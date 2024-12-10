from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS
import tkinter as tk
from tkinter import messagebox

app = Flask(__name__)
CORS(app) 

# Load the trained model
model = joblib.load("TEST\loan_predictor.pkl")


@app.route('/predict', methods=['POST'])
def predict():
    print(2)
    try:
        data = request.json
        # Process input data...
        print(data)
        input_features = pd.DataFrame({'Loan_ID':[5], 'Gender':[1], 'Married':[1], 'Dependents':[2], 'Education':[1],'Self_Employed':[1], 'ApplicantIncome':[1000], 'CoapplicantIncome':[2000], 'LoanAmount':[1], 'Loan_Amount_Term':[1], 'Credit_History':[1], 'Property_Area':[2]})
        input_features = pd.DataFrame({ 
                                       'Gender':[data['gender']], 
                                       'Married':[data['married']], 
                                       'Dependents':[data['dependents']], 
                                       'Education':[data['education']],
                                       'Self_Employed':[data['self_employed']], 
                                       'ApplicantIncome':[data['applicant_income']], 
                                       'CoapplicantIncome':[data['coapplicant_income']], 
                                       'LoanAmount':[data['loan_amount']], 
                                       'Loan_Amount_Term':[data['loan_amount_term']], 
                                       'Credit_History':[data['credit_history']], 
                                       'Property_Area':[data['property_area']]})

        prediction = model.predict(input_features)
        prediction = int(np.array(prediction)[0])
        result = "Eligible for Loan" if prediction == 1 else "Not Eligible for Loan"
        print(result)
        print(prediction)
        root = tk.Tk()
        
        popup = tk.Toplevel()
        popup.title("Loan Approval Message")
        popup.geometry("300x100")  # Set the size of the pop-up window
        popup.attributes('-topmost', True)  # Make the window always on top

    # Create a label for the message
        label = tk.Label(popup, text=result)
        label.pack(pady=20)
        root.mainloop()

        return jsonify({'prediction': prediction})
    except Exception as e:
        print(e)
        print("error")
        return jsonify({'error': str(e)}), 400

    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)