
import gradio as gr
from gradio_image_annotator import ImageAnnotator


example = ImageAnnotator().example_inputs()

demo = gr.Interface(
    lambda x:x,
    ImageAnnotator(),  # interactive version of your component
    ImageAnnotator(),  # static version of your component
    # examples=[[example]],  # uncomment this line to view the "example version" of your component
)


demo.launch()
