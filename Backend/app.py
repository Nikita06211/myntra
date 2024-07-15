from flask import Flask, request, jsonify, render_template, send_from_directory
from torchvision import transforms
from PIL import Image
import torch
import base64
from io import BytesIO
import traceback
from flask import Flask, render_template


import os
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/customize', methods=['POST'])
def customize():
    try:
        # Debug: Print the entire prompt_to_image_map
        print("Debug: prompt_to_image_map contents:")
        for key, value in prompt_to_image_map.items():
            print(f"  {key}: {value}")

        prompt = request.form.get('prompt')
        print(f"Received prompt: {prompt}")

        # Debug: Check if the prompt exists in the map
        if prompt.lower() in prompt_to_image_map:
            print(f"Debug: Prompt '{prompt}' found in map")
        else:
            print(f"Debug: Prompt '{prompt}' NOT found in map")

        customized_image = prompt_to_image_map.get(prompt.lower())
        if customized_image:
            print(f"Matched customization: {customized_image}")
            return jsonify({'customized_image': customized_image}), 200
        else:
            print("No matching customization found")
            return jsonify({'error': 'No customization available for the entered prompt.'}), 400
    except Exception as e:
        print(f"Error in customize route: {str(e)}")
        print(traceback.format_exc())
        return jsonify({'error': 'An unexpected error occurred.'}), 500

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)


# Define the path to your model checkpoint
model_path = '/workspace/myntra_botique/latest_net_G.pth'

# Load the checkpoint
checkpoint = torch.load(model_path, map_location=torch.device('cpu'))

# Create a model instance
class YourModelClass(torch.nn.Module):
    def __init__(self):
        super(YourModelClass, self).__init__()
        self.model = torch.nn.Sequential(
            torch.nn.Conv2d(3, 64, kernel_size=4, stride=2, padding=1),
            torch.nn.Sequential(
                torch.nn.Conv2d(64, 128, kernel_size=4, stride=2, padding=1),
                torch.nn.BatchNorm2d(128),
                torch.nn.Sequential(
                    torch.nn.Conv2d(128, 256, kernel_size=4, stride=2, padding=1),
                    torch.nn.BatchNorm2d(256),
                    torch.nn.Sequential(
                        torch.nn.Conv2d(256, 512, kernel_size=4, stride=2, padding=1),
                        torch.nn.BatchNorm2d(512),
                        torch.nn.Sequential(
                            torch.nn.Conv2d(512, 512, kernel_size=4, stride=2, padding=1),
                            torch.nn.BatchNorm2d(512),
                            torch.nn.Sequential(
                                torch.nn.Conv2d(512, 512, kernel_size=4, stride=2, padding=1),
                                torch.nn.BatchNorm2d(512),
                                torch.nn.Sequential(
                                    torch.nn.ConvTranspose2d(512, 512, kernel_size=4, stride=2, padding=1),
                                    torch.nn.BatchNorm2d(512),
                                    torch.nn.ReLU(True),
                                    torch.nn.ConvTranspose2d(512, 256, kernel_size=4, stride=2, padding=1),
                                    torch.nn.BatchNorm2d(256),
                                    torch.nn.ReLU(True)
                                ),
                                torch.nn.ConvTranspose2d(256, 128, kernel_size=4, stride=2, padding=1),
                                torch.nn.BatchNorm2d(128),
                                torch.nn.ReLU(True)
                            ),
                            torch.nn.ConvTranspose2d(128, 64, kernel_size=4, stride=2, padding=1),
                            torch.nn.BatchNorm2d(64),
                            torch.nn.ReLU(True)
                        ),
                        torch.nn.ConvTranspose2d(64, 3, kernel_size=4, stride=2, padding=1),
                        torch.nn.Tanh()
                    )
                )
            )
        )

    def forward(self, x):
        return self.model(x)

model = YourModelClass()

# After loading the checkpoint
new_state_dict = {}
for k, v in checkpoint.items():
    new_key = k.replace('model.model.', 'model.')
    new_state_dict[new_key] = v

model.load_state_dict(new_state_dict, strict=False)

# Set the model to evaluation mode
model.eval()

# Example inference function
def customize_dress(input_image):
    print(f"Customization prompt: {prompt}")

    transform = transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])
    input_tensor = transform(input_image).unsqueeze(0)

    with torch.no_grad():
        output = model(input_tensor)

    output_image = transforms.ToPILImage()(output.squeeze(0))

    buffered = BytesIO()
    output_image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()

    return img_str

app = Flask(__name__, static_url_path='/static')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/customize', methods=['POST'])
def customize():
    file = request.files['image']
    prompt = request.form['prompt']
    if file and prompt:
        input_image = Image.open(file.stream).convert('RGB')
        customized_image_str = customize_dress(input_image, prompt)
        return jsonify({'customized_image': customized_image_str})
    else:
        return jsonify({'error': 'No image or prompt provided'}), 400
    except Exception as e:
        app.logger.error(f"An error occurred: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)'''
