"""
Simple RAG Chatbot using OpenAI + FAISS for vector search
"""
import os
import numpy as np
import faiss
import logging
from pathlib import Path
from PyPDF2 import PdfReader
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


class PortfolioChatbot:
    """
    A simple RAG chatbot that:
    1. Loads documents from knowledge_base folder
    2. Creates embeddings and stores in FAISS
    3. Searches for relevant context when user asks a question
    4. Uses OpenAI to generate a response based on that context
    """
    
    def __init__(self):
        self.dimension = 1536        # text-embedding-3-small dimension
        
        # Separate storage for each mode
        self.indexes = {
            "professional": {
                "documents": [],
                "metadata": [],
                "faiss_index": None,
                "is_initialized": False
            },
            "tutorial": {
                "documents": [],
                "metadata": [],
                "faiss_index": None,
                "is_initialized": False
            }
        }
    
    def load_file(self, filepath: str) -> str:
        """Read content from a file (txt, md, vue, or pdf)."""
        filepath = Path(filepath)
        
        if filepath.suffix in ['.txt', '.md', '.vue']:
            with open(filepath, 'r', encoding='utf-8') as f:
                return f.read()
        elif filepath.suffix == '.pdf':
            reader = PdfReader(filepath)
            text = ""
            for page in reader.pages:
                extracted = page.extract_text()
                if extracted:
                    text += extracted + "\n"
            return text
        else:
            return ""
    
    def chunk_text(self, text: str, chunk_size: int = 500, overlap: int = 50) -> list:
        """Split text into overlapping chunks for better context retrieval."""
        chunks = []
        start = 0
        text_length = len(text)

        while start < text_length:
            end = start + chunk_size
            chunk = text[start:end].strip()
            if chunk:  # Only add non-empty chunks
                chunks.append(chunk)
            start = end - overlap

        return chunks

    def create_embedding(self, text: str) -> list:
        """Create embedding for a single text using OpenAI."""
        response = client.embeddings.create(
            input=text,
            model="text-embedding-3-small"
        )
        return response.data[0].embedding

    def load_knowledge_base(self, folder_path: str = None, mode: str = "professional"):
        """Function to load documents, create embeddings, and build FAISS index."""
        
        # Get the correct index for this mode
        index_data = self.indexes[mode]

        # Define folder paths for each mode (multiple folders supported)
        if mode == "professional":
            folder_paths = [
                "../portfolio_frontend/public/documents/",      # CV and other PDFs
                "../portfolio_frontend/src/components/",        # AboutSection, ProjectsSection, etc.
            ]
        elif mode == "tutorial":
            folder_paths = [
                "../portfolio_frontend/src/components/space/",  # BlackHole, Starfield, etc.
            ]
        else:
            folder_paths = [folder_path] if folder_path else []

        # Load files from ALL folders for this mode
        for folder in folder_paths:
            folder_path_obj = Path(folder)
            if not folder_path_obj.exists():
                logger.warning(f"Folder not found: {folder}")
                continue
                
            for filepath in folder_path_obj.glob("*.*"):
                # Skip non-relevant files
                if filepath.suffix not in ['.txt', '.md', '.vue', '.pdf']:
                    continue
                    
                logger.info(f"Loading file for {mode}: {filepath}")
                content = self.load_file(filepath)
                if not content:
                    continue
                
                chunks = self.chunk_text(content)
                for chunk in chunks:
                    embedding = self.create_embedding(chunk)
                    index_data["documents"].append(chunk)
                    index_data["metadata"].append({
                        "source": str(filepath.name),
                        "mode": mode
                    })
                    
                    # Add to this mode's FAISS index
                    vector = np.array([embedding]).astype('float32')
                    if index_data["faiss_index"] is None:
                        index_data["faiss_index"] = faiss.IndexFlatL2(self.dimension)
                    index_data["faiss_index"].add(vector)
        
        # Mark as initialized after loading
        if index_data["documents"]:
            index_data["is_initialized"] = True
            logger.info(f"Loaded {len(index_data['documents'])} chunks into {mode} FAISS index")

    def search(self, query: str, mode: str = "professional", top_k: int = 3) -> list:
        """Search for relevant documents using the mode-specific FAISS index."""
        index_data = self.indexes[mode]
        
        if not index_data["is_initialized"]:
            return []
        
        query_embedding = np.array([self.create_embedding(query)]).astype('float32')
        
        distances, indices = index_data["faiss_index"].search(query_embedding, top_k)
        
        results = []
        for i, idx in enumerate(indices[0]):
            if idx < len(index_data["documents"]):
                results.append({
                    "content": index_data["documents"][idx],
                    "source": index_data["metadata"][idx]["source"],
                    "score": float(distances[0][i])
                })
        
        return results

    def chat(self, question: str, mode: str = "professional", history: list = None) -> str:
        """Generate a response using RAG."""
        if history is None:
            history = []
        
        # Search uses the mode-specific index now
        search_results = self.search(question, mode=mode, top_k=3)
        
        logger.info(f"Search results: {search_results}")
        context = ""
        if search_results:
            context = "\n\n---\n\n".join([
                f"[Source: {r['source']}]\n{r['content']}" 
                for r in search_results
            ])
        else:
            context = "No relevant information found in knowledge base."
        
        messages = [
            {"role": "system", "content": self.get_system_prompt(mode)},
            {"role": "system", "content": f"Context from knowledge base:\n\n{context}"},
        ]
        
        for msg in history[-6:]:
            messages.append(msg)
        
        messages.append({"role": "user", "content": question})
        
        response = client.responses.create(
            model="gpt-4.1-mini",
            input=messages,
            temperature=0.2
            )
        
        return response.output_text


    def get_system_prompt(self, mode: str) -> str:
        """
        Returns the system prompt based on the chat mode.
        """
        if mode == "tutorial":
            return """You are Tii's AI Teaching Assistant for his portfolio website.

Your role is to explain how the space effects (BlackHole, Starfield, Wormhole, SpacetimeWarp) 
were created using Three.js, GLSL shaders, and WebGL.

Guidelines:
- Be friendly and educational
- Break down complex concepts into simple explanations
- Use analogies when helpful
- Reference the code examples in the context
- If asked about something not in the context, say you can only help with the space effects

Always base your answers on the provided context."""

        else:  # professional mode
            return """You are Tii's Professional AI Assistant for his portfolio website.

Your role is to answer questions about Tiisetso Khumalo's:
NOTE: Tiisetso Khumalo is a South African software developer and engineer and she is a woman.
- Professional experience and work history
- Technical skills and certifications
- Education and qualifications
- Projects and achievements

Guidelines:
- Be professional and concise
- Only answer based on the provided context (CV/professional info)
- If asked something not in the context, politely redirect to what you know
- Be helpful and represent Tiisetso positively

Always base your answers on the provided context."""
