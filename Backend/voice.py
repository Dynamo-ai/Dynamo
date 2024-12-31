import streamlit as st
import os
import google.generativeai as genai
import pyttsx3
import speech_recognition as sr
from dotenv import load_dotenv

load_dotenv()

def voice_main():
    # Text-to-speech function
    def txs(text, voice_id=None):
        engine = pyttsx3.init()
        engine.setProperty('rate', 150)
        if voice_id:
            engine.setProperty('voice', voice_id)
        engine.say(text)
        engine.runAndWait()

    # Voice input function
    def voice():
        recognizer = sr.Recognizer()
        with sr.Microphone() as source:
            st.write("Listening...")
            recognizer.adjust_for_ambient_noise(source)
            audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio)
            return text
        except sr.UnknownValueError:
            st.error("Sorry, could not understand audio.")
            return ""

    # Setup Streamlit
    # st.title("Dynamo AI 🎙")
    
    os.environ['GOOGLE_API_KEY'] = os.getenv('GOOGLE_API_KEY')
    genai.configure(api_key=os.environ['GOOGLE_API_KEY'])
    model = genai.GenerativeModel('gemini-pro')

    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = [
            {
                "role": "assistant",
                "content": "How can I help you today?"
            }
        ]

    # Layout
    col1, col2 = st.columns(2)
    with col1:
        button1 = st.button("Get Voice Input")
    with col2:
        button2 = st.toggle("👩")

    strings = ""
    if button1:
        voice_input = voice()
        if voice_input:
            strings += voice_input

    # Display chat history
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

    # Process the query
    if strings:
        with st.chat_message("user"):
            st.markdown(strings)

        response = model.generate_content(strings)
        if response:
            with st.chat_message("assistant"):
                st.markdown(response.text)

            st.session_state.messages.extend([
                {
                    "role": "user",
                    "content": strings
                },
                {
                    "role": "assistant",
                    "content": response.text
                }
            ])

            # Text-to-speech output
            if button2:
                voices = pyttsx3.init().getProperty('voices')
                txs(response.text, voices[1].id)  # Use second voice in list
            else:
                txs(response.text)

# Run the main function
# if __name__ == "__main__":
#     main()
