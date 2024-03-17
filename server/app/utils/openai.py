import openai
from app.config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def generate_workout_suggestions(workout_area: str):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Gym Coach"},
            {"role": "user", "content": f"I need a workout plan for {workout_area}. Can you provide 3 core workout and its target muscle?"},
        ]
    )

    # Extract the assistant's reply
    suggestions = response['choices'][0]['message']['content']

    return suggestions