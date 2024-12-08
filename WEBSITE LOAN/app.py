from flask import Flask, request, jsonify, render_template
import csv
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.get_json()
    with open('loan_data.csv', 'a', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(data.values())
    return jsonify({'message': 'Data submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True)

