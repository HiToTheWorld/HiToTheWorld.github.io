const lights = document.querySelectorAll(".lightgroup")
const d = document.getElementById("display")
let focused;
let started;
let timeout;

function start() {
  d.innerText = ""
  timeout = window.setTimeout(function() {
    const change = lights[lights.length - 1].querySelectorAll("svg circle")
    for (let e of change) {
      e.style.fill = "#ff3333"
    }
    timeout = window.setTimeout(function() {
      const change = lights[lights.length - 2].querySelectorAll("svg circle")
      for (let e of change) {
        e.style.fill = "#ff3333"
      }
      timeout = window.setTimeout(function() {
        let change = lights[lights.length - 3].querySelectorAll("svg circle")
        for (let e of change) {
          e.style.fill = "#ff3333"
        }
        timeout = window.setTimeout(function() {
          change = lights[lights.length - 4].querySelectorAll("svg circle")
          for (let e of change) {
            e.style.fill = "#ff3333"
          }
          timeout = window.setTimeout(function() {
            change = lights[lights.length - 5].querySelectorAll("svg circle")
            for (let e of change) {
              e.style.fill = "#ff3333"
            }
            timeout = window.setTimeout(function() {
              for (let a of lights) {
                change = a.querySelectorAll("svg circle")
                for (let e of change) {
                  e.style.fill = "#212121"
                }
              }
              started = new Date().getTime()
              timeout = window.setInterval(function() {
                d.innerText = new Date().getTime() - started + "ms";
              }, 1)
            }, ((Math.random() * 3000) + 1000))
          }, 1250)
        }, 1250)
      }, 1250)
    }, 1250)
  }, 1250)
}

function end() {
  if (focused) {
    if (started && timeout) {
      window.clearInterval(timeout)
    } else {
      window.clearTimeout(timeout)
      d.innerText = "Too early."
    }

    started = false;
    focused = false;
  } else {
    focused = true;

    for (let a of lights) {
      change = a.querySelectorAll("svg circle")
      for (let e of change) {
        e.style.fill = "#212121"
      }
    }

    start();
  }
}

window.addEventListener("click", end)
window.addEventListener("keydown", function(e) {
  if (e.key == " ") {
    end()
  }
})
