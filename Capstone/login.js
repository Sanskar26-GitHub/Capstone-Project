document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'patient' && password === '1234') {
      redirectToDashboard('patient');
    } else if (username === 'doctor' && password === '5678') {
      redirectToDashboard('doctor');
    } else {
      showMessage('Invalid username or password');
    }
  });
  
  function redirectToDashboard(userType) {
    if (userType === 'patient') {
      window.location.href = 'patient_dashboard.html';
    } else if (userType === 'doctor') {
      window.location.href = 'doctor_dashboard.html';
    }
  }
  
  function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
  }
  