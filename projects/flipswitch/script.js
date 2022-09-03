document.getElementById("enablejs").style.display = "none"

window.onorientationchange = function () {
  window.location.reload()
}

if (window.orientation == 0 || window.innerWidth < window.innerHeight || window.innerWidth < 650) {
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
  { title: "Fire", group: "hot", pic: "images/cards/fire.png" },
  { title: "Snow", group: "cold", pic: "images/cards/snow.png" },
  { title: "Ice", group: "ice", pic: "images/cards/ice.png" },
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

//PRELOAD
//cards
//<link rel="preload" as="image" href="important.png">
for (let i = 0; i < cards.length; i++) {
  let link = document.createElement("link")
  link.setAttribute("rel", "preload")
  link.setAttribute("as", "image")
  link.setAttribute("href", cards[i].pic)
  document.head.appendChild(link)
}

function gameplay() {
  let maxtime = 90
  let timer = maxtime
  let currentCard
  let currentGroups = []
  let pts = 0
  let addpts = 0
  let streak = 0
  function clearpowerups() {
    lassign = true
    rassign = false
  }

  function subpoints() {
    window.setTimeout(function () {
      if (addpts > 0) {
        addpts -= 1
        subpoints()
      }
    }, 30)
  }

  function generateCard() {
    let newcard
    do {
      newcard = cards[Math.floor(Math.random() * cards.length)]
    } while (newcard == currentCard)
    currentCard = newcard
    document.getElementById("ccardimage").style.backgroundImage = "url('" + currentCard.pic + "')";
    document.getElementById("ccardtitle").innerText = currentCard.title;
    addpts = 100
    subpoints()

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

  function zerosbefore(num) {
    let times = 7 - num
    let string = ""
    for (let i = 0; i < times; i++) {
      string = string + "0"
    }
    return string
  }

  function side1() {
    if (currentCard.group == currentGroups[0]) {
      pts += addpts
      document.getElementById("currentscore").innerText = zerosbefore(pts.toString().length) + pts.toString()
      streak += 1
    } else {
      streak = 1
    }
    generateCard()
  }

  function side2() {
    if (currentCard.group == currentGroups[1]) {
      pts += (addpts * (streak + 1))
      document.getElementById("currentscore").innerText = zerosbefore(pts.toString().length) + pts.toString()
      streak += 1
    } else {
      streak = 0
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

  const canvas = document.getElementById("cdcanvas")
  const ctx = canvas.getContext('2d')
  let clockpercent = 100

  window.setInterval(function () {
    if (timer > 0) {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.beginPath()
      ctx.strokeStyle = "grey"
      ctx.lineWidth = 15
      ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, 2 * Math.PI)
      ctx.stroke()

      let calcpercent = clockpercent
      if (calcpercent == 0) {
        calcpercent = 100
      } else if (calcpercent == 100) {
        calcpercent = 0
      }
      ctx.beginPath()
      ctx.strokeStyle = "royalblue"
      ctx.lineWidth = 15
      ctx.arc(canvas.width / 2, canvas.height / 2, 40, 1.5 * Math.PI, ((calcpercent / 50) - 0.5) * Math.PI)
      ctx.stroke()
      timer -= 0.01
      clockpercent = (timer / maxtime) * 100

      document.getElementById("countdowndisplay").innerText = Math.floor(timer)
    } else {

    }
  }, 10)
}

gameplay()

document.getElementById("start").addEventListener("click", onstart)