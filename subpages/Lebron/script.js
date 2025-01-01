function video() {
    let boton = document.getElementById("abrirDialogo");
    boton.classList.remove("invisible");
}

document.getElementById('abrirDialogo').addEventListener('click', function() {
    const dialogo = document.getElementById('dialogo');
    const video = document.getElementById('video');
    dialogo.showModal();
    video.play();
});



function startCountdown() {

    let parrafo = document.getElementById("contador");
    // Get the current date
    var now = new Date();

    // Set the target date to today's date with the desired time
    var targetDate = new Date();
    targetDate.setHours(23);
    targetDate.setMinutes(23);
    targetDate.setSeconds(0);

    // If the target time has already passed for today, set it to tomorrow
    if (now >= targetDate) {
        targetDate.setDate(targetDate.getDate() + 1);
    }

    // Calculate the time difference between now and the target date
    var timeDiff = targetDate.getTime() - now.getTime();

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
        now = new Date();
        timeDiff = targetDate.getTime() - now.getTime();

        // Check if the countdown has reached zero
        if (timeDiff <= 0) {
            clearInterval(countdownInterval);
            console.log("Countdown reached zero!");
            // You can perform any action here when the countdown reaches zero
            video();
        } else {
            // Calculate remaining hours, minutes, and seconds
            var hours = Math.floor(timeDiff / (1000 * 60 * 60));
            var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            // Display the countdown
            parrafo.innerHTML = ("Mi cosita bonita sale en: " + hours + "h " + minutes + "m " + seconds + "s");
        }
    }, 1000);
}

// Start the countdown
startCountdown();
