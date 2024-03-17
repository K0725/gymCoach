from fastapi import APIRouter, Depends
from app.utils.openai import generate_workout_suggestions
from app.utils.auth import get_current_user  # Import authentication utility (if needed)

router = APIRouter()

@router.post("/")
async def get_workout(user_input: str, current_user=Depends(get_current_user)):
    workout_suggestions = generate_workout_suggestions(user_input)
    return {"workout_suggestions": workout_suggestions}

@router.get("/")
async def get_workout_history(current_user=Depends(get_current_user)):
    # Retrieve workout history from the database
    workout_history = []
    return {"workout_history": workout_history}