

// Source - https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to

var countDownDate = new Date()
countDownDate.setHours(14);
countDownDate.setMinutes(30);

// Get today's date and time
var now = new Date().getTime();

// Set date to tmr if already over
if (Math.floor((countDownDate.getTime() - now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) <= -4) {
    countDownDate.setDate(date.getDate() + 1);
}

// Update the count down every 1 second
var x = setInterval(function () {


    // Find the distance between now and the count down date
    var distance = countDownDate.getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $("#hourCount").text(hours < 0 ? 0 : hours);
    $("#minCount").text(minutes < 0 ? 0 : minutes);
    $("#secCount").text(seconds < 0 ? 0 : seconds);

    // While the session is active
    if (distance < 0 && hours > -4) {
        $('#zoomBt').click(function(){
            window.location.assign("https://us02web.zoom.us/j/7461305803?pwd=Yms2L0Q2RzhteVhvV2pIYkVDbzAydz09");
        });
        
    } else{
        // Inactive
        $('#zoomBt').click(function(){
            window.location.assign("#");
        });
        $("#zoomBt").css("opacity","0.5");
        $("#zoomBt").text("Zoom not available");
    }
}, 1000);