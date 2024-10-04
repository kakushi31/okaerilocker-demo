document.addEventListener("DOMContentLoaded", function() {
    // Event listeners for country code and phone number inputs
    var countryCodeInput = document.getElementById("CountryCode");
    var phoneNumberInput = document.getElementById("PhoneNumber");

    if (countryCodeInput) {
        countryCodeInput.addEventListener("keypress", restrictInputToNumbers);
        countryCodeInput.addEventListener("input", function() {
            if (this.value.length > 4) {
                this.value = this.value.slice(0, 4); // Limit to 4 characters
            }
        });
    }

    if (phoneNumberInput) {
        phoneNumberInput.addEventListener("keypress", restrictInputToNumbers);
        phoneNumberInput.addEventListener("input", function() {
            if (this.value.length > 15) {
                this.value = this.value.slice(0, 15); // Limit to 15 characters
            }
        });
    }

    // Attach submit event listener to the form
    var form = document.getElementById("booking-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            if (!validateForm()) {
                event.preventDefault(); // Prevent form submission
            }
        });
    }

});

// Function to restrict input to numeric characters only
function restrictInputToNumbers(event) {
    var key = event.key;
    if (!/^\d$/.test(key)) {
        event.preventDefault();
    }
}

function validateForm() {
    var fromDate = document.getElementById("FromDate").value;
    var untilDate = document.getElementById("UntilDate").value;

    // Convert dates to Date objects
    var fromDateObj = new Date(fromDate);
    var untilDateObj = new Date(untilDate);

    // Check if fromDate is before untilDate
    console.log('From Date:', fromDateObj);
    console.log('Until Date:', untilDateObj);
    
    if (fromDateObj >= untilDateObj) {
        alert('Check your booking date. "From" must be before "Until"');
        console.log('Validation failed');
        return false; // Prevent form submission
    }

    console.log('Validation passed');
    return true; // Allow form submission
}