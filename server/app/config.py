from dotenv import load_dotenv
import os

load_dotenv('/home/koki/documents/project/gymGPT/server/.env')

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_API_KEY")