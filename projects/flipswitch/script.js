document.getElementById("enablejs").style.display = "none"

window.onorientationchange = function () {
  window.location.reload()
}

if (window.orientation == 0) {
  document.getElementById("rotatedevice").style.display = "flex"
}

function onstart() {
  gameplay()
}

//SELF CONFIG - DO NOT TOUCH
let lassign = "a"
let rassign = "l"

//GAMEPLAY CONFIG
let cardgroups = {
  "hot": { title: "Hot", ptnr: "cold", pic: "images/groups/hot.png" },
  "cold": { title: "Cold", ptnr: "hot", pic: "images/groups/cold.png" },


}
let cards = [
  { title: "Flamin' Hot Cheatos", group: "hot", pic: "images/cards/fhc.png" },
  { title: "Snow", group: "cold", pic: "images/cards/snow.png" }
]
let powerups = [
  {
    title: "Flip", pic: "images/powerups/flip.png", f: function () {
      let newgroups = [currentGroups[1], currentGroups[0]]
      currentGroups = newgroups
    }
  },
  {
    title: "Switch", pic: "images/powerups/switch.png", f: function () {
      assignGroups()
    }
  },
  {
    title: "Cross", pic: "images/powerups/cross.png", f: function () {
      lassign = false
      rassign = true
    }
  }
]

function gameplay() {
  let currentCard
  let currentGroups = []
  function clearpowerups() {
    lassign = true
    rassign = false
  }

  function generateCard() {
    currentCard = cards[Math.floor(Math.random() * cards.length)]
    document.getElementById("ccardimage").style.backgroundImage = "url('" + currentCard.pic + "')";
    document.getElementById("ccardtitle").innerText = currentCard.title;
  }

  function assignGroups() {
    let cooldown = 0
    let newGroup0 = ""
    do {
      newGroup0 = Object.keys(cardgroups)[Math.floor(Math.random() * Object.keys(cardgroups).length)]
      cooldown += 1
    } while ((newGroup0 == currentGroups[0] || newGroup0 == currentGroups[1]) && cooldown < 1000)
    currentGroups[0] = newGroup0
    currentGroups[1] = cardgroups[currentGroups[0]].ptnr
    document.getElementById("side1image").style.backgroundImage = "url('" + cardgroups[currentGroups[0]].pic + "')";
    document.getElementById("side1title").innerText = cardgroups[currentGroups[0]].title;
    document.getElementById("side2image").style.backgroundImage = "url('" + cardgroups[currentGroups[1]].pic + "')";
    document.getElementById("side2title").innerText = cardgroups[currentGroups[1]].title;
  }

  function side1() {
    if (currentCard.group == currentGroups[0]) {
      console.log("Correct!1")
    }
    generateCard()
  }

  function side2() {
    if (currentCard.group == currentGroups[1]) {
      console.log("Correct!2")
    }
    generateCard()
  }

  function oninputfunction(inputKey) {
    if (inputKey == lassign) {
      side1()
    } else if (inputKey == rassign) {
      side2()
    }
  }

  assignGroups()
  generateCard()

  document.getElementById("side1image").addEventListener("mousedown", function (e) { oninputfunction(lassign) })
  document.getElementById("side2image").addEventListener("mousedown", function (e) { oninputfunction(rassign) })

  window.addEventListener("keydown", function (e) { oninputfunction(e.key) })
}

gameplay()

document.getElementById("start").addEventListener("click", onstart)