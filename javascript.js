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

//Script for payment with SQUARE
function showCheckoutWindow(e) {
    e.preventDefault();

    const url = document.getElementById('embedded-checkout-modal-checkout-button').getAttribute('data-url');
    const title = 'Square Payment Links';

    // Some platforms embed in an iframe, so we want to top window to calculate sizes correctly
    const topWindow = window.top ? window.top : window;

    // Fixes dual-screen position                                Most browsers          Firefox
    const dualScreenLeft = topWindow.screenLeft !==  undefined ? topWindow.screenLeft : topWindow.screenX;
    const dualScreenTop = topWindow.screenTop !==  undefined   ? topWindow.screenTop  : topWindow.screenY;

    const width = topWindow.innerWidth ? topWindow.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = topWindow.innerHeight ? topWindow.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const h = height * .75;
    const w = 500;

    const systemZoom = width / topWindow.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(url, title, `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`);

    if (window.focus) newWindow.focus();
  }

  // This overrides the default checkout button click handler to show the embed modal
  // instead of opening a new tab with the given link url
  document.getElementById('embedded-checkout-modal-checkout-button').addEventListener('click', function (e) {
    showCheckoutWindow(e);
  });