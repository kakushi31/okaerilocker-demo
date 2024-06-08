function validateForm() {
    var fromDate = document.getElementById("fromDate").value;
    var untilDate = document.getElementById("untilDate").value;

    // Convert dates to Date objects
    var fromDateObj = new Date(fromDate);
    var untilDateObj = new Date(untilDate);

    // Check if fromDate is before untilDate
    if (fromDateObj >= untilDateObj) {
        alert("Booking From Date must be before Booking Until Date");
        return false;
    }

    return true;
}

// Function to restrict input to numeric characters only
function restrictInputToNumbers(event) {
    var key = event.key;
    if (!/^\d$/.test(key)) {
        event.preventDefault();
    }
}

// Event listeners for country code and phone number inputs
document.getElementById("countryCode").addEventListener("keypress", restrictInputToNumbers);
document.getElementById("phoneNumber").addEventListener("keypress", restrictInputToNumbers);


// JavaScript to enforce maximum length for phone number and country code
document.getElementById("countryCode").addEventListener("input", function() {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4); // Limit to 3 characters
    }
});

document.getElementById("phoneNumber").addEventListener("input", function() {
    if (this.value.length > 15) {
        this.value = this.value.slice(0, 15); // Limit to 15 characters
    }
});