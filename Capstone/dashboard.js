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

                // Get current date and time
                var dateTime = new Date().toLocaleString();

                // Calculate chances of heart attack
                var chanceOfHeartDisease = calculateChanceOfHeartDisease(heartRate, bloodPressure);

                // Display last recorded vitals including time and chances of heart disease
                document.getElementById('patientVitals').innerHTML = `
                    <h2>Last Recorded Vitals</h2>
                    <p><strong>Heart Rate:</strong> ${heartRate} bpm</p>
                    <p><strong>Blood Pressure:</strong> ${bloodPressure}</p>
                    <p><strong>Chances of Heart disease: </strong> ${chanceOfHeartDisease}</p>
                    <p><strong>Date and Time:</strong> ${dateTime}</p>
                `;
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
})
// Function to calculate chance of heart disease
function calculateChanceOfHeartDisease(heartRate, bloodPressure) {
    const heartRateThreshold = 100; // bpm
    const systolicThreshold = 120; // mmHg
    const diastolicThreshold = 80; // mmHg

    if (heartRate > heartRateThreshold || 
        getBloodPressureSystolic(bloodPressure) > systolicThreshold ||
        getBloodPressureDiastolic(bloodPressure) > diastolicThreshold) {
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

function updateTimeSlots() {
    var doctor = document.getElementById("doctor").value;
    var timeSelect = document.getElementById("time");

    // Clear existing options
    timeSelect.innerHTML = '';

    // Add new time slots based on the selected doctor
    if (doctor === "Dr. Smith") {
        addTimeSlots(["Available Slots","9:00 AM", "10:00 AM", "11:00 AM"]);
    } else if (doctor === "Dr. Johnson") {
        addTimeSlots(["Available Slots","2:00 PM", "3:00 PM", "4:00 PM"]);
    }
}

function addTimeSlots(slots) {
    var timeSelect = document.getElementById("time");
    slots.forEach(function(slot) {
        var option = document.createElement("option");
        option.text = slot;
        timeSelect.add(option);
    });
}

function bookAppointment() {
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    var confirmationMessage = "Your appointment is confirmed with " + doctor + " on " + date + " at " + time + ".";
    alert(confirmationMessage);
    return false; 
}
updateTimeSlots();
