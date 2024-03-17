from fastapi import APIRouter
from .workout import create_workout, get_workout_history

router = APIRouter()

@router.post("/workouts")
async def post_workout(workout_area: str):
    return await create_workout(workout_area)

@router.get("/workouts")
async def get_workouts():
    return await get_workout_history()