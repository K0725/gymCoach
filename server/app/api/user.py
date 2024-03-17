from fastapi import APIRouter, Depends
from app.models.user import User
from app.utils.auth import authenticate_user, create_access_token  # Import authentication utilities

router = APIRouter()

@router.post("/register")
async def register_user(user: User):
    # Register a new user
    return {"message": "User registered successfully"}

@router.post("/login")
async def login(user_credentials: User):
    user = authenticate_user(user_credentials)
    if not user:
        return {"message": "Invalid credentials"}
    access_token = create_access_token(user)
    return {"access_token": access_token}