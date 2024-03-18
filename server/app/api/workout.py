from fastapi import APIRouter
from app.utils.openai import generate_workout_suggestions
from app.utils.supabase import supabase
router = APIRouter()

# class WorkoutInput(BaseModel):
#     workout_area: str 

@router.post("/")
async def create_workout(workout_area: str):
    print('Received workout_area:', workout_area)
    suggestions = generate_workout_suggestions(workout_area)
    data = supabase.table("messages").insert(
        {"workout_area": workout_area, "suggestion": suggestions}
    ).execute()
    return {"workout_area": workout_area, "message": suggestions}

# async is use to make the function asynchronous which means that the function will not wait for the response of the function to continue the execution of the code.
@router.get("/")
async def get_workout_history():
    data = supabase.table("messages").select("*").execute()
    messages = data.data
    return messages