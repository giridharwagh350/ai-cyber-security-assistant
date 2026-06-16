import google.generativeai as genai

genai.configure(
    api_key="YOUR_GEMINI_API_KEY"
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def ask_bot(question):

    prompt = f"""
    You are a Cyber Security Expert.

    Question:
    {question}

    Give short practical advice.
    """

    response = model.generate_content(prompt)

    return response.text