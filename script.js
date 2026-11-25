function showMessage() {
    alert("Welcome to Swingstars Hospital. Your health is our priority.");
}

function validate() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    } else if (email === "") {
        alert("Please enter your email.");
        return false;
    } else {
        alert("Thank you, " + name + ". Your message has been sent.");
        document.getElementById("contactForm").reset();
        return true;
    }
}

function validateAppointment() {

    var patientID = document.getElementById("patientID").value.trim();
    var patientName = document.getElementById("patientName").value.trim();
    var doctorID = document.getElementById("doctorID").value.trim();
    var department = document.getElementById("department").value;
    var appointmentDate = document.getElementById("appointmentDate").value;
    var appointmentTime = document.getElementById("appointmentTime").value;
    var reason = document.getElementById("reason").value.trim();

    if (patientID === "") {
        alert("Please enter your Patient ID.");
        return false;
    } else if (patientName === "") {
        alert("Please enter your name.");
        return false;
    } else if (doctorID === "") {
        alert("Please enter Doctor ID.");
        return false;
    } else if (department === "") {
        alert("Please select a department.");
        return false;
    } else if (appointmentDate === "") {
        alert("Please select an appointment date.");
        return false;
    } else if (appointmentTime === "") {
        alert("Please select an appointment time.");
        return false;
    } else if (reason === "") {
        alert("Please enter the reason for your appointment.");
        return false;
    } else {

        fetch("http://localhost:8080/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                patientID: patientID,
                patientName: patientName,
                doctorID: doctorID,
                appointmentDate: appointmentDate,
                appointmentTime: appointmentTime,
                reason: department + " - " + reason
            })
        })

        .then(response => response.text())
        .then(data => {
            alert(data);

            if (data === "Appointment booked successfully!") {
                document.getElementById("appointmentForm").reset();
            }
        })

        .catch(error => {
            alert("Unable to connect to Swingstars Hospital Server.");
            console.log(error);
        });
    }
}