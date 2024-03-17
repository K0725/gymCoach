from fastapi import FastAPI
from app.api.api import router as api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

from dotenv import load_dotenv
load_dotenv()

origins = [
    "http://localhost:3000",  # React's default port
    "http://127.0.0.1:5173/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api")