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

function gameover() {
  console.log("GAME OVER")
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

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

let maxtime = 90

let timePassed = 0;
let timeLeft = maxtime;
let timerInterval = null;

document.getElementById("countdown").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining }"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
  timeLeft
)}</span>
</div>
`;

function gameplay() {
  maxtime = 90
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

  // The following is for CountDown

  const FULL_DASH_ARRAY = 283;

  startTimer();

  function onTimesUp() {
    clearInterval(timerInterval);
    gameover()
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = maxtime - timePassed;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / maxtime;
    return rawTimeFraction - (1 / maxtime) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
}

onstart()

document.getElementById("start").addEventListener("click", onstart)