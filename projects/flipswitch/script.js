document.getElementById("enablejs").style.display = "none"

window.onorientationchange = function() {
  window.location.reload()
}

if (window.orientation == 0) {
  document.getElementById("rotatedevice").style.display = "flex"
}

function onstart() {
  gameplay()
}

//GAMEPLAY CONFIG
let cardgroups = {
    "hot": {title: "Hot", ptnr: "cold", pic: "cards/hot.png"},
    "cold": {title: "Cold", ptnr: "hot", pic: "cards/cold.png"}
}
let cards = [
    {title: "Flamin' Hot Cheatos", group: "hot"},
    {title: "Snow", group: "cold"}
]

function gameplay() {
    function side1() {

    }

    function side2() {

    }
}

document.getElementById("start").addEventListener("click", onstart)