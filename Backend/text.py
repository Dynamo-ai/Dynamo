import streamlit as st
import os
import google.generativeai as genai
import time
from dotenv import load_dotenv

load_dotenv()

def text_main():
    # Function to record start time
    def caltime():
        st.session_state.start_time = time.time()
    
    # Function to calculate and display elapsed time
    def stptime():
        if 'start_time' in st.session_state:
            elapsed_time = round(time.time() - st.session_state.start_time, 2)
            st.write(f"Results Generated in: {elapsed_time} seconds.")
            del st.session_state.start_time

    # Set API key and configure model
    os.environ['GOOGLE_API_KEY'] = os.getenv('GOOGLE_API_KEY')
    genai.configure(api_key=os.environ['GOOGLE_API_KEY'])
    model = genai.GenerativeModel('gemini-pro')

    # Initialize messages if not already in session state
    if "messages" not in st.session_state:
        st.session_state.messages = [
            {"role": "assistant", "content": "How can I help you today?"}
        ]

    # Display previous messages
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

    # Function to handle language model responses
    def llm_function(query):
        response = model.generate_content(query)
        if response:
            stptime()
            with st.chat_message("assistant"):
                st.markdown(response.text)
            st.session_state.messages.extend([
                {"role": "user", "content": query},
                {"role": "assistant", "content": response.text}
            ])
    query = st.chat_input("Ask Me Anything")
    # Input and processing
    if query:
        caltime()
        with st.chat_message("user"):
            st.markdown(query)
        llm_function(query)
