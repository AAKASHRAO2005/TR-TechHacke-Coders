# Flask example
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend access

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    name = data['name']
    interests = data['interests']
    marks = int(data['marks'])

    # Simple prediction logic
    if marks >= 85 and 'coding' in interests:
        suggestion = "Software Engineer, AI/ML Specialist, or Data Scientist"
    elif marks >= 70 and 'design' in interests:
        suggestion = "UI/UX Designer, Graphic Designer, or Product Designer"
    elif marks >= 60 and 'management' in interests:
        suggestion = "Project Manager, HR Specialist, or Business Analyst"
    else:
        suggestion = "Explore skill-based certifications..."

    return jsonify({
        'name': name,
        'interests': interests,
        'marks': marks,
        'suggestion': suggestion
    })

if __name__ == '__main__':
    app.run(debug=True)
