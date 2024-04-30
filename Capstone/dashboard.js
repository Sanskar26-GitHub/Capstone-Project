document.addEventListener('DOMContentLoaded', function () {
    // Check if a user is logged in
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('loggedInUser').textContent = 'Logged in as: ${loggedInUser};'
    }

    // Logout function
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (event) {
            event.preventDefault();
            sessionStorage.removeItem('loggedInUser');
            window.location.href = 'index.html';
        });
    }

    //form submission
    const patientForm = document.getElementById('patientForm');
    if (patientForm) {
        patientForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get form values
            var name = document.getElementById('name').value;
            var age = document.getElementById('age').value;
            var gender = document.getElementById('gender').value;

            // Check if all fields are filled
            if (name && age && gender) {
                // Simulating vitals calculation
                var heartRate = Math.floor(Math.random() * (120 - 60) + 60);
                var bloodPressure = Math.floor(Math.random() * (140 - 90) + 90) + '/' + Math.floor(Math.random() * (90 - 60) + 60);
                var temperature = (Math.random() * (100 - 97) + 97).toFixed(1);

                // Get current date and time
                var dateTime = new Date().toLocaleString();

                // Calculate chances of heart attack
                var chanceOfHeartAttack = calculateChanceOfHeartAttack(heartRate, bloodPressure, temperature);

                // Display last recorded vitals including time and chances of heart attack
                document.getElementById('patientVitals').innerHTML = `
                    <h2>Last Recorded Vitals</h2>
                    <p><strong>Heart Rate:</strong> ${heartRate} bpm</p>
                    <p><strong>Blood Pressure:</strong> ${bloodPressure}</p>
                    <p><strong>Temperature:</strong> ${temperature} °F</p>
                    <p><strong>Chance of Heart Attack:</strong> ${chanceOfHeartAttack}</p>
                    <p><strong>Date and Time:</strong> ${dateTime}</p>
                `;
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});

// Function to calculate chance of heart attack
function calculateChanceOfHeartAttack(heartRate, bloodPressure, temperature) {
    const heartRateThreshold = 100; // bpm
    const systolicThreshold = 120; // mmHg
    const diastolicThreshold = 80; // mmHg
    const temperatureThreshold = 99.0; // °F

    if (heartRate > heartRateThreshold || 
        getBloodPressureSystolic(bloodPressure) > systolicThreshold ||
        getBloodPressureDiastolic(bloodPressure) > diastolicThreshold ||
        temperature > temperatureThreshold) {
        return "Yes";
    } else {
        return "No";
    }
}

function getBloodPressureSystolic(bloodPressure) {
    return parseInt(bloodPressure.split('/')[0]);
}

function getBloodPressureDiastolic(bloodPressure) {
    return parseInt(bloodPressure.split('/')[1]);
}