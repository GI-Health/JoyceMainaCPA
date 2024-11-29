// Listen for the form submission event
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the form fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback'); // Element to display feedback messages

  // Simple validation to ensure all fields are filled out correctly
  if (name && email.includes('@') && phone && message) {
    // Display success feedback
    feedback.style.color = 'green';
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.display = 'block';

    // Call the function to submit the form to Google Forms using iframe
    handleFormSubmit();

    // Optionally reset form fields after submission
    setTimeout(() => {
      document.getElementById('contact-form').reset();
      feedback.style.display = 'none'; // Hide the feedback message after a few seconds
    }, 3000);
  } else {
    // Show error feedback if validation fails
    feedback.style.color = 'red';
    feedback.textContent = 'Please fill out all fields correctly.';
    feedback.style.display = 'block';
  }
});

// Function to handle form submission without redirect
function handleFormSubmit() {
  var form = document.getElementById("contact-form");

  // Create a hidden iframe to submit the form to Google Forms without redirecting
  var iframe = document.createElement("iframe");
  iframe.name = "hidden_iframe"; // The iframe name is used as the form's target
  iframe.style.display = "none"; // Hide the iframe
  form.target = "hidden_iframe"; // Set the form's target to the iframe

  // Append the iframe to the body of the document
  document.body.appendChild(iframe);

  // Submit the form
  form.submit();

  // Show a custom success message on the page
  document.getElementById("thank-you").style.display = "block"; // Display the custom confirmation message
}
