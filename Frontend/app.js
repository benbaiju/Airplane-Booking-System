document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      const formData = new FormData(form); // Get the form data
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
  
      // Replace 'your-api-endpoint' with the actual API endpoint URL
      const apiUrl = 'http://localhost:8080/save';
  
      // Send the data to the API using the Fetch API
      fetch(apiUrl, {
        method: 'POST', // Change to the appropriate HTTP method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      })
        .then(response => response.json())
        .then(data => {
          // Handle the API response data if needed
          console.log(data);
        })
        .catch(error => {
          // Handle any errors that occur during the API request
          console.log('Error:', error);
        });
    });
  });
  