import os
import logging
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from chatbot import PortfolioChatbot

# Load environment variables
load_dotenv()

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# Global chatbot instance
chatbot: PortfolioChatbot = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load the knowledge base when the app starts."""
    global chatbot
    logging.info("Starting Portfolio API...")
    chatbot = PortfolioChatbot()
    
    # Load both knowledge bases separately
    logging.info("Loading professional knowledge base...")
    chatbot.load_knowledge_base("knowledge_base", mode="professional")
    
    logging.info("Loading tutorial knowledge base...")
    chatbot.load_knowledge_base("knowledge_base", mode="tutorial")
    
    logging.info("Chatbot ready!")
    yield
    logging.info("Shutting down...")


# Initialize FastAPI app
app = FastAPI(
    title="Tii's Portfolio API",
    description="AI Chatbot API for portfolio website",
    version="1.0.0",
    lifespan=lifespan
)

# CORS - Allow your frontend to call this API
app.add_middleware(
    CORSMiddleware,
    # Production origins
    # allow_origins=[
    #     'https://tiisetso-khumalo-portfolio.vercel.app/',
    #     "http://localhost:8000",
    #     os.getenv("FRONTEND_URL", "")
    # ],
    # Development origins
    allow_origins=[
        'http://localhost:5173',
        "http://localhost:8000",
        os.getenv("FRONTEND_URL", "")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Request/Response models
class ChatRequest(BaseModel):
    message: str
    mode: str = "professional"  # "professional" or "tutorial"
    history: list = []


class ChatResponse(BaseModel):
    answer: str
    mode: str
    sources: list = []


# ============== ENDPOINTS ==============

@app.get("/")
async def root():
    """Health check endpoint."""
    return {"status": "online", "message": "Tii's Portfolio API is running!"}


@app.get("/health")
async def health():
    """Health check for monitoring."""
    if not chatbot:
        return {"status": "healthy", "chatbot": "not initialized"}
    
    pro_ready = chatbot.indexes["professional"]["is_initialized"]
    tut_ready = chatbot.indexes["tutorial"]["is_initialized"]
    
    return {
        "status": "healthy",
        "professional": "ready" if pro_ready else "not loaded",
        "tutorial": "ready" if tut_ready else "not loaded"
    }


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Main chat endpoint.
    
    - mode: "professional" for CV/experience questions
    - mode: "tutorial" for space effects code explanations
    """
    if not chatbot:
        raise HTTPException(status_code=503, detail="Chatbot not initialized")
    
    # Check if the requested mode is initialized
    if not chatbot.indexes[request.mode]["is_initialized"]:
        raise HTTPException(status_code=503, detail=f"{request.mode} knowledge base not loaded")
    
    try:
        # Get response from chatbot
        answer = chatbot.chat(
            question=request.message,
            mode=request.mode,
            history=request.history
        )
    
        # Search with mode to get correct sources
        search_results = chatbot.search(request.message, mode=request.mode, top_k=3)
        sources = [r["source"] for r in search_results]
        
        return ChatResponse(
            answer=answer,
            mode=request.mode,
            sources=sources
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/status")
async def status():
    """Get chatbot status and loaded documents."""
    if not chatbot:
        return {"initialized": False, "professional_docs": 0, "tutorial_docs": 0}
    
    return {
        "professional": {
            "initialized": chatbot.indexes["professional"]["is_initialized"],
            "documents": len(chatbot.indexes["professional"]["documents"])
        },
        "tutorial": {
            "initialized": chatbot.indexes["tutorial"]["is_initialized"],
            "documents": len(chatbot.indexes["tutorial"]["documents"])
        }
    }




# Run with: uvicorn app:app --reload
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
