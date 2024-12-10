
$('#submit-btn').on('click', function() {
    // Gather input values
    const formData = {
        gender: $('input[name="gender"]:checked').val(),
        married: $('input[name="married"]:checked').val(),
        dependents: $('select[name="dependents"]').val(),
        education: $('input[name="education"]:checked').val(),
        self_employed: $('input[name="self-employed"]:checked').val(),
        applicant_income: $('input[name="applicant-income"]').val(),
        coapplicant_income: $('input[name="coapplicant-income"]').val(),
        loan_amount: $('input[name="loan-amount"]').val(),
        loan_amount_term: $('input[name="loan-amount-term"]').val(),
        credit_history: $('input[name="credit-history"]:checked').val(),
        property_area: $('select[name="property-area"]').val()
    };

    fetch('http://localhost:5000/predict', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(formData)  // Ensure payload is a valid JSON object
});

   //Send data to the backend
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/predict',
        content : "application/json",
        data: JSON.stringify(formData),
        // success: function(response) {
        //     $('#result').html('Prediction: ' + response.prediction);
        // },
        // error: function(error) {
        //     console.error('Error:', error);
        //     $('#result').html('An error occurred while processing your request.');
        //}
    });
});






