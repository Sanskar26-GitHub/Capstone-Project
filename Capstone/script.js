document.addEventListener('DOMContentLoaded', function() {
    // Get references to the login options
    var patientLogin = document.getElementById('patient-login');
    var doctorLogin = document.getElementById('doctor-login');
  
    // Add click event listener for patient login
    patientLogin.addEventListener('click', function() {
      redirectToLoginPage('patient');
    });
  
    // Add click event listener for doctor login
    doctorLogin.addEventListener('click', function() {
      redirectToLoginPage('doctor');
    });
  });
  
  function redirectToLoginPage(userType) {
    // Redirect to the login page with the appropriate user type
    window.location.href = 'login.html?type=' + userType;
  }
  