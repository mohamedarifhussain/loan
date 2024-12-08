document.getElementById('predict-button').addEventListener('click', function() {
    // Placeholder for prediction logic
    const result = predictLoanEligibility();
    
    document.getElementById('result').innerText = `Your loan eligibility prediction: ${result}`;
});

function predictLoanEligibility() {
    // Simple logic for demonstration purposes
    // In a real application, you would gather user input and perform actual predictions
    const randomOutcome = Math.random() < 0.5 ? "Approved" : "Rejected";
    return randomOutcome;
}

const aboutButton = document.getElementById('ABOUT');
const aboutSection = document.getElementById('about');

aboutButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const TechnologyButton = document.getElementById('TECHNOLOGY');
const TechnologySection = document.getElementById('technology');

TechnologyButton.addEventListener('click', () => {
  TechnologySection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('loan-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Collect form data
  const formData = {
      loan_id: Math.floor(Math.random() * 1000), // Replace with a unique Loan ID logic
      gender: parseInt(document.querySelector('input[name="gender"]:checked').value),
      married: parseInt(document.querySelector('input[name="married"]:checked').value),
      dependents: parseInt(document.querySelector('select[name="dependents"]').value),
      education: parseInt(document.querySelector('input[name="education"]:checked').value),
      self_employed: parseInt(document.querySelector('input[name="self-employed"]:checked').value),
      applicant_income: parseFloat(document.querySelector('input[name="applicant-income"]').value),
      coapplicant_income: parseFloat(document.querySelector('input[name="coapplicant-income"]').value),
      loan_amount: parseFloat(document.querySelector('input[name="loan-amount"]').value),
      loan_amount_term: parseFloat(document.querySelector('input[name="loan-amount-term"]').value),
      credit_history: parseInt(document.querySelector('input[name="credit-history"]:checked').value),
      property_area: parseInt(document.querySelector('select[name="property-area"]').value),
  };

  // Send data to backend
  fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      // Display the result
      document.getElementById('result').innerText = data.result;
  })
  .catch(error => console.error('Error:', error));
});

// const form = document.getElementById('loan-form');
// const submitBtn = document.getElementById('submit-btn');
// const resultDiv = document.getElementById('result');

// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());
//   console.log(data);

//   // Send POST request to Flask app
//   fetch('/submit', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
// });

