from scan import final
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
cors=CORS(app)


@app.route("/voice",methods=['POST'])
def index():
    user_question=request.json['sentence']
    subject=request.json['subject']
    return({"result" :"done"})

# Your image processing function
def process_image(image_data):
    text= final(image_data)
    # Implement your image processing logic here
    # For now, let's just return a placeholder result
    return (text)


@app.route('/scan', methods=['POST'])
def get_info():
    # Get the image data from the POST request
    image_data = request.json

    # Pass the image data to the processing function
    result = process_image(image_data['path'])

    # Return the result as JSON response
    return ({"result": f"{result}"})

if __name__ == '__main__':
    app.run(debug=True,port=6000)
