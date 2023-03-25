function parseRGB(rgb) {
    const s = rgb.split("(")[1].split(")")[0].split(", ")
    return { "r": s[0], "g": s[1], "b": s[2] }
}

function getTime(ptime) {
    const a = parseInt(ptime.split(":")[0])
    const b = parseInt(ptime.split(":")[1])

    if (a > 60 || b > 59 || ptime.split(":")[2]) {
        console.error("Invalid time.")
        return;
    }

    return (a * 60) + b;
}


function parseTime(s) {
    let a = Math.floor(s / 60);
    let b = s % 60;

    if (a.toString().length > 2 || b.toString().length > 2) {
        console.error("Invalid time.")
        return;
    }

    if (a.toString().length == 1) {
        a = "0" + a
    }

    if (b.toString().length == 1) {
        b = "0" + b
    }

    return a + ":" + b;
}


let started;
let paused;
let focused = true;
let programTime = "15:00";

function start() {
    document.getElementById("tsMinuteTen").disabled = true;
    document.getElementById("tsMinuteOne").disabled = true;
    document.getElementById("tsSecondTen").disabled = true;
    document.getElementById("tsSecondOne").disabled = true;
    if (settings.anti_lag == false) {
        if (paused || !started) {
            paused = null;
            document.getElementById("start").innerText = "pause";
            let i = started || getTime(programTime);
            started = true
            if (i) {
                function updTimer() {
                    if (i > 0) {
                        if (!paused) {
                            if (!focused) {
                                document.title = "Timer: " + parseTime(i);
                            }
                            document.getElementById("timer").innerText = parseTime(i);
                            started = i;
                            i--;
                            window.setTimeout(updTimer, 1000)
                        }
                    } else {
                        document.getElementById("timer").innerText = parseTime(i);
                        started = null;

                        if (!focused) {
                            document.title = "Timer: 00:00";
                        }

                        //Play sound
                    }
                }
                updTimer();
            }
        } else {
            paused = true;
            document.getElementById("start").innerText = "play_arrow";
        }
    } else if (!started) {
        document.getElementById("start").disabled = true;
        document.getElementById("start").style.cursor = "initial"

        const rgbColor = parseRGB(document.getElementById("start").style.color)
        document.getElementById("start").style.color = "rgba(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ", 0.5)";

        const startTime = new Date().getTime()
        const interval = window.setInterval(updTimer, 10)
        function updTimer() {
            const currentTime = new Date().getTime()
            const time = getTime(programTime) - ((currentTime - startTime) / 1000);
            started = parseTime(Math.floor(time))
            if (time <= 0) {
                window.clearInterval(interval)

                //Play sound
            } else {
                document.getElementById("timer").innerText = parseTime(Math.floor(time))
                if (focused) {
                    document.title = "Timer";
                } else {
                    document.title = "Timer: " + started;
                }
            }
        }
    }
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("background").addEventListener("keydown", function (e) {
    if (e.key == " ") {
        start();
    }
});


window.addEventListener("blur", function () {
    focused = null;
    if (started) {
        document.title = "Timer: " + parseTime(started);
    }
})


window.addEventListener("focus", function () {
    focused = true;
    document.title = "Timer";
})


function setConfig(config) {
    if (config.background) { document.getElementById("background").style.backgroundImage = config.background }
    if (config.color) {
        settings.color = config.color
        document.getElementById("timer").style.color = config.color;
        document.getElementById("settingsbtn").style.color = config.color;
        document.getElementById("start").style.color = config.color;

        if (settings.anti_lag == true && started) {
            const rgbColor = parseRGB(document.getElementById("start").style.color)
            document.getElementById("start").style.color = "rgba(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ", 0.5)";
        }
    }
}

function onClockInput() {
    let a = document.getElementById("tsMinuteTen").value + document.getElementById("tsMinuteOne").value
    let b = document.getElementById("tsSecondTen").value + document.getElementById("tsSecondOne").value

    if (a.toString().length == 1) {
        a = "0" + a
    }

    if (b.toString().length == 1) {
        b = "0" + b
    }

    programTime = a + ":" + b
    document.getElementById("timer").innerText = programTime;
}

document.getElementById("tsMinuteTen").addEventListener("input", onClockInput)
document.getElementById("tsMinuteOne").addEventListener("input", onClockInput)
document.getElementById("tsSecondTen").addEventListener("input", onClockInput)
document.getElementById("tsSecondOne").addEventListener("input", onClockInput)