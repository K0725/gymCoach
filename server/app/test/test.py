from fastapi import APIRouter
from app.utils.supabase import supabase

router = APIRouter()

@router.get("/test")
async def test_supabase():
    try:
        data = supabase.table("messages").select("*").execute()
        print('Supabase test query response:', data)
        return {"message": "Supabase test query successful"}
    except Exception as e:
        print('Error testing Supabase:', str(e))
        return {"error": "Failed to test Supabase connection"}