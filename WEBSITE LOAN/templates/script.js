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


// const form = document.getElementById('loan-form');
// const submitBtn = document.getElementById('submit-btn');
// const resultDiv = document.getElementById('result');

// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());
//   console.log(data);

//   // Store data into an array
//   const loanData = [
//     data['gender'],
//     data['married'],
//     data['dependents'],
//     data['education'],
//     data['self-employed'],
//     data['applicant-income'],
//     data['coapplicant-income'],
//     data['loan-amount'],
//     data['loan-amount-term'],
//     data['credit-history'],
//     data['property-area']
//   ];

//   console.log(loanData);

//   // Convert array to CSV string
//   const csvString = loanData.join(',');

//   // Create a blob with the CSV string
//   const blob = new Blob([csvString], { type: 'text/csv' });

//   // Create a link to download the CSV file
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = 'loan_data.csv';
//   link.click();
// });


const form = document.getElementById('loan-form');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  // Send POST request to Flask app
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});

