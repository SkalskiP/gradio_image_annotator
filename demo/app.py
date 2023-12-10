
import gradio as gr
from gradio_image_annotator import image_annotator


example = image_annotator().example_inputs()

demo = gr.Interface(
    lambda x:x,
    image_annotator(),  # interactive version of your component
    image_annotator(),  # static version of your component
    # examples=[[example]],  # uncomment this line to view the "example version" of your component
)


demo.launch()
