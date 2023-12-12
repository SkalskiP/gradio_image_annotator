
import gradio as gr
from gradio_image_annotator import ImageAnnotator


example = ImageAnnotator().example_inputs()

# demo = gr.Interface(
#     lambda x:x,
#     ImageAnnotator(),  # interactive version of your component
#     ImageAnnotator(),  # static version of your component
# )

with gr.Blocks() as demo:
    with gr.Row():
        gr.ImageEditor()
        ImageAnnotator()

demo.launch()
