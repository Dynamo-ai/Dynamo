import streamlit as st
from streamlit_option_menu import option_menu
from image import main
from text import text_main
from voice import voice_main
EXAMPLE_NO = 3
def streamlit_menu(example=3):
    if example == 3:
        selected = option_menu(
            menu_title=None,  # required
            options=["Text","Voice","Image"],  # required
            icons=["book", "mic", "image"],  # optional
            menu_icon="cast",  # optional
            orientation="horizontal",
            styles={
                "container": {"padding": "0!important", "background-color": "#1b1b1b"},
                "icon": {"color": "white", "font-size": "25px"},
                "nav-link": {
                    "font-size": "25px",
                    "text-align": "left",
                    "margin": "15px",
                    "--hover-color": "",
                },
                "nav-link-selected": {"background-color": "red"},
            },
        )
        return selected


selected = streamlit_menu(example=EXAMPLE_NO)

if selected == "Text":
    text_main()
if selected == "Voice":
    voice_main()
if selected == "Image":
    main()
