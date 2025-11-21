document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // prevent page reload

        // Get values
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const middleInitial = document.getElementById("middleInitial").value.trim();
        const contactNumber = document.getElementById("contactNumber").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const studentID = document.getElementById("studentID").value.trim();
        const terms = document.getElementById("terms").checked;

        // Get select text
        const courseSelect = document.getElementById("course");
        const course = courseSelect.options[courseSelect.selectedIndex].text;

        const yearLevelSelect = document.getElementById("yearLevel");
        const yearLevel = yearLevelSelect.options[yearLevelSelect.selectedIndex].text;

        // Basic validation
        let messages = [];
        if (!firstName) messages.push("First Name is required.");
        if (!lastName) messages.push("Last Name is required.");
        if (!contactNumber) messages.push("Contact Number is required.");
        if (!dob) messages.push("Date of Birth is required.");
        if (!gender) messages.push("Gender must be selected.");
        if (!studentID) messages.push("Student ID is required.");
        if (!course) messages.push("Course must be selected.");
        if (!yearLevel) messages.push("Year Level must be selected.");
        if (!terms) messages.push("You must agree to the terms and conditions.");

        if (messages.length > 0) {
            alert("Please fix the following errors:\n\n" + messages.join("\n"));
            return;
        }

        if (!/^\d{10,15}$/.test(contactNumber)) {
            alert("Contact Number must be 10-15 digits only.");
            return;
        }

        const fullName = middleInitial ? `${firstName} ${middleInitial} ${lastName}` : `${firstName} ${lastName}`;

        // Show success message with checkmark
        successMessage.innerHTML = `<i class="fas fa-check-circle"></i> Registration submitted successfully! You will receive a confirmation email shortly.`;
        successMessage.classList.add("show");

        // Hide message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove("show");
        }, 5000);

        // Reset form
        form.reset();
    });
});
