from fastapi import FastAPI
from pydantic import BaseModel
from app.utils.openai import generate_workout_suggestions
from app.utils.supabase import supabase

app = FastAPI()

class Workout(BaseModel):
    workout_area: str

@app.post("/api/workouts")
async def create_workout(workout: Workout):
    suggestions = generate_workout_suggestions(workout.workout_area)
    data = supabase.table("messages").insert(
        {"workout_area": workout.workout_area, "suggestion": suggestions}
    ).execute()
    return {"workout_area": workout.workout_area, "suggestion": suggestions}

@app.get("/api/workouts")
async def get_workout_history():
    data = supabase.table("messages").select("*").execute()
    messages = data.data
    return messages