document.addEventListener("DOMContentLoaded", function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jul 7, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="countdownTimer"
        document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdownTimer").innerHTML = "EXPIRED";
        }
    }, 1000);
    
});
document.getElementById('notifyButton').addEventListener('click', function() {
    const userEmail = document.getElementById('userEmail').value;
    sendNotification(userEmail);
});

function sendNotification(email) {
    // Code to send email notification
    
    console.log(`Email sent to ${email}. Thank you for waiting.`);
}