function myDigitalClock() {
    var date = new Date();
    var hours = date.getHours();    // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var zone = "AM";

    // Convert to 12-hour format and determine AM/PM
    if (hours >= 12) {
        zone = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }

    // Add leading zeros if necessary
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the time in the console
    var timeString = hours + ":" + minutes + ":" + seconds + " " + zone;
    console.log(timeString);

    // Update the clock every second
    setTimeout(myDigitalClock, 1000);
}

myDigitalClock();
