document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');

  // Simple validation logic
  if (name && email.includes('@') && phone && message) {
    feedback.style.color = 'green';
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.display = 'block';

    // Optionally clear form fields after submission
    setTimeout(() => {
      document.getElementById('contact-form').reset();
      feedback.style.display = 'none';
    }, 3000);

    // Replace this part with actual backend submission (e.g., an API call)
  } else {
    feedback.style.color = 'red';
    feedback.textContent = 'Please fill out all fields correctly.';
    feedback.style.display = 'block';
  }
});
