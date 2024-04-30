document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log("Username:", username);
    console.log("Password:", password);
  
    if (username === 'patient' && password === '1234') {
        storeUserType('patient'); 
        console.log("Redirecting to patient dashboard...");
        redirectToDashboard('patient');
    } else if (username === 'doctor' && password === '5678') {
        storeUserType('doctor'); 
        console.log("Redirecting to doctor dashboard...");
        redirectToDashboard('doctor');
    } else {
        showMessage('Invalid username or password');
    }
  });
  
  document.getElementById('home').addEventListener('click', function(event) {
  event.preventDefault();
  const userType = sessionStorage.getItem('userType');
  if (userType === 'patient') {
      window.location.href = 'patient_dashboard.html';
    } else if (userType === 'doctor') {
      window.location.href = 'doctor_dashboard.html';
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
  
  function storeUserType(userType) {
    sessionStorage.setItem('userType', userType);
  }
