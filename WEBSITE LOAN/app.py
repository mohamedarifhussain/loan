from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load("loan_predictor.pkl")

@app.route('/')
def index():
    # Render the HTML form
    return render_template("index.html")  # Ensure the HTML file is named index.html and placed in a "templates" folder.

@app.route('/predict', methods=['POST'])
def predict():
    # Get the form data
    data = request.json
    
    # Convert received JSON data to a format suitable for prediction
    input_features = [
        data['loan_id'], data['gender'], data['married'], data['dependents'],
        data['education'], data['self_employed'], data['applicant_income'],
        data['coapplicant_income'], data['loan_amount'], data['loan_amount_term'],
        data['credit_history'], data['property_area']
    ]
    
    # Predict using the model
    prediction = model.predict([input_features])
    result = "Eligible for Loan" if prediction[0] == 1 else "Not Eligible for Loan"
    
    return jsonify({'result': result})

if __name__ == '_main_':
    app.run(debug=True)