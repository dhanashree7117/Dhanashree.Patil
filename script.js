document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const messageEl = document.getElementById('formMessage');

  if (name === '' || email === '') {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Please fill in all fields.';
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Please enter a valid email.';
    return;
  }

  messageEl.style.color = 'green';
  messageEl.textContent = `Thanks for contacting us, ${name}! We'll get back to you soon.`;

  // Reset form fields
  this.reset();
});
