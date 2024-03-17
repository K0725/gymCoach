import openai
from app.config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def generate_workout_suggestions(user_input: str):
    prompt = f"Generate a list of workout exercises for {user_input.lower()} with the following format:\n\nExercise Name: <exercise_name>\nBody Parts Targeted: <body_parts>\nPercentage of Muscle Growth: <percentage>\n\n"
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=500,
        n=1,
        stop=None,
        temperature=0.7,
    )

    workout_suggestions = response.choices[0].text.strip()
    return workout_suggestions