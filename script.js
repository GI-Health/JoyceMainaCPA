// Listen for the form submission event
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the form fields
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const messageField = document.getElementById('message');
  const feedback = document.getElementById('form-feedback'); // Element to display feedback messages

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const phone = phoneField.value.trim();
  const message = messageField.value.trim();

  // Clear previous invalid class
  nameField.classList.remove('invalid');
  emailField.classList.remove('invalid');
  phoneField.classList.remove('invalid');
  messageField.classList.remove('invalid');

  // Simple validation to ensure all fields are filled out correctly
  if (name && isValidEmail(email) && phone && message) {
    // Display success feedback
    feedback.style.color = 'green';
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.display = 'block';

    // Call the function to submit the form to Google Forms using iframe
    handleFormSubmit();

  } else {
    // Show error feedback if validation fails
    feedback.style.color = 'red';
    feedback.textContent = 'Please fill out all fields correctly.';
    feedback.style.display = 'block';

    // Highlight invalid fields in red
    if (!name) nameField.classList.add('invalid');
    if (!isValidEmail(email)) emailField.classList.add('invalid');
    if (!phone) phoneField.classList.add('invalid');
    if (!message) messageField.classList.add('invalid');
  }
});

// Function to validate email
function isValidEmail(email) {
  // Regular expression for basic email validation (requires both "@" and ".")
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

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
  
      // Optionally reset form fields after submission
  setTimeout(() => {
    form.reset(); // Reset form fields
    document.getElementById("thank-you").style.display = "block"; // Display success message
  }, 1500);

  // Show a custom success message on the page
  document.getElementById("thank-you").style.display = "block"; // Display the custom confirmation message
}
