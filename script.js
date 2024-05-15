var stopwatch = document.getElementById("stopwatch");
var startBtn = document.getElementById("start-btn");
var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;

/* Function to start the stopwatch */
function start(flag) {
    if (flag) {
        startBtn.disabled = true;
    }
    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
        ms++;
        if (ms == 100) {
            sec++;
            ms = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        stopwatch.innerHTML = min + ':' + sec + ':' + ms;
        // Calling start() function recursively to continue the stopwatch
        start();
    }, 10); // setTimeout delay time: 10 milliseconds
}

/* Function to pause the stopwatch */
function pause() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}

/* Function to reset the stopwatch */
function reset() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
    ms = 0;
    sec = 0;
    min = 0;
    stopwatch.innerHTML = '00:00:00';
}
