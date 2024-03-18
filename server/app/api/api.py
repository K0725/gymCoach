from fastapi import APIRouter
from .workout import create_workout, get_workout_history
from pydantic import BaseModel, Field

router = APIRouter()

class WorkoutData(BaseModel):
    workout_area: str

@router.post("/")
async def post_workout(workout_data: WorkoutData):
    return await create_workout(workout_data.workout_area)

@router.get("/get")
async def get_workouts():
    return await get_workout_history()