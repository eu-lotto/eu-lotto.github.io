// countdown.js

// JavaScript function to update the countdown
function updateCountdown() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 00:00:00").getTime();

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = "Draw results in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Update every 1 second
    setTimeout(updateCountdown, 1000);
}
