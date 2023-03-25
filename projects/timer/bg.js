const backgrounds = {
    "Orange gradient": {
        "type": "gradient",
        "imageData": "linear-gradient(to bottom right, darksalmon, coral, darksalmon, coral)",
        "animated": true,
        "timercolor": "#ffffff",
        "oppcolor": "#666666",
    },
    "Green gradient": {
        "type": "gradient", //Types: gradient, video, photo, gif
        "imageData": "linear-gradient(to bottom right, darkseagreen, darkolivegreen, darkseagreen, darkolivegreen)", //css background
        "animated": true, //If the image should be artifitialy animated
        "timercolor": "#ffffff",
        "oppcolor": "#666666",
    },
    "Sea gradient": {
        "type": "gradient",
        "imageData": "linear-gradient(to bottom right, cadetblue, plum, cadetblue, plum)",
        "animated": true,
        "timercolor": "#ffffff",
        "oppcolor": "#666666",
    },
    "Day gradient": {
        "type": "gradient",
        "imageData": "linear-gradient(to bottom right, mintcream, lightpink, mintcream, lightpink)",
        "animated": true,
        "timercolor": "#666666",
        "oppcolor": "#ffffff",
    },
}

let data = backgrounds["Orange gradient"];

setConfig({
    "background": data.imageData,
    "color": data.timercolor,
})

if (data.animated == true) {
    let pos = [0, 0]
    function move() {
        if (!paused) {
            pos[0]--;
            pos[1]--;
            if (pos[0] <= window.innerWidth * (-2)) {
                pos[0] = 0;
                pos[1] = 0;
            }
            document.getElementById("background").style.backgroundPosition = `${pos[0]}px ${pos[1]}px`
        }
    }
    window.setInterval(move, 10)
}

for (let i = 0; i < Object.keys(backgrounds).length; i++) {
    const obj = document.createElement("option")
    obj.text = Object.keys(backgrounds)[i]
    document.getElementById("backgroundSelector").append(obj)
}

document.getElementById("backgroundSelector").addEventListener("change", function () {
    data = backgrounds[document.getElementById("backgroundSelector").value];
    setConfig({
        "background": data.imageData,
        "color": data.timercolor,
    })
})