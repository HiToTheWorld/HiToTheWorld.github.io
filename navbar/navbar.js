//HTML

const navbar = document.createElement("div")
const navbaropen = document.createElement("button")
const navbaropenimg = document.createElement("img")
const navbartitle = document.createElement("h1")
const navbarbuttons = document.createElement("div")
const closemobilenavbar = document.createElement("button")
const homebutton = document.createElement("a")
const myprojectsbutton = document.createElement("a")
const thissitebutton = document.createElement("a")
const navbarcover = document.createElement("div")

navbar.id = "navbar"
navbaropen.id = "navbaropen"
navbarbuttons.id = "navbarbuttons"
closemobilenavbar.id = "closemobilenavbar"

navbaropenimg.src = "https://publicdatastore.rabitailleow.repl.co/images/numberstat.png"

homebutton.href = "https://" + window.location.hostname
myprojectsbutton.href = "https://" + window.location.hostname + "/projects"
thissitebutton.href = "https://" + window.location.hostname + "/thissite"

navbartitle.innerHTML = "Programming and Development"
closemobilenavbar.innerHTML = "X"
homebutton.innerHTML = "Home"
myprojectsbutton.innerHTML = "My Projects"
thissitebutton.innerHTML = "This Site"

document.body.prepend(navbarcover)

navbarbuttons.appendChild(closemobilenavbar)
navbarbuttons.appendChild(homebutton)
navbarbuttons.appendChild(myprojectsbutton)
navbarbuttons.appendChild(thissitebutton)
navbaropen.appendChild(navbaropenimg)
navbar.appendChild(navbaropen)
navbar.appendChild(navbartitle)
navbar.appendChild(navbarbuttons)

navbarcover.insertBefore(navbar, null)

//CSS

let stylelink = document.createElement("link")
stylelink.rel = "stylesheet"
stylelink.type = "text/css"
stylelink.href = "https://" + window.location.hostname + "/navbar/navbar.css"
document.head.appendChild(stylelink)

//JavaScript

const atags = navbarbuttons.getElementsByTagName('a')
let side = true
let maxw = 800

function onpagescroll() {
  let maxoffset = 80
  if (window.innerWidth > 800) {
    if (document.body.scrollTop > maxoffset || document.documentElement.scrollTop > maxoffset || window.pageYOffset > maxoffset) {
      if (side == false) {
        side = true
        navbar.style.animation = "bartoslimnavbar 0.5s"
        for (let i = 0; i < atags.length; i++) {
          atags[i].style.animation = "buttonstoslimnavbar 0.5s"
        }
        window.setTimeout(function() {
          navbar.style.height = "80px";
          navbar.style.animation = "none"
          for (let i = 0; i < atags.length; i++) {
            atags[i].style.padding = "2.5%"
            atags[i].style.marginRight = "1.3%"
            atags[i].style.animation = "none"
          }
        }, 499)
      }
    } else {
      if (side == true) {
        side = false
        navbar.style.animation = "bartofullnavbar 0.5s"
        for (let i = 0; i < atags.length; i++) {
          atags[i].style.animation = "buttonstofullnavbar 0.5s"
        }
        window.setTimeout(function() {
          navbar.style.height = "120px";
          navbar.style.animation = "none"
          for (let i = 0; i < atags.length; i++) {
            atags[i].style.padding = "3%"
            atags[i].style.marginRight = "3%"
            atags[i].style.animation = "none"
          }
        }, 499)
      }
    }
  }
}

window.onresize = function() {
  window.location.reload()
}

window.onscroll = function() {
  onpagescroll()
}

onpagescroll()

document.getElementById('navbaropen').addEventListener('click', function() {
  if (window.innerWidth < 800) {
    document.getElementById('navbarbuttons').style.animation = "buttonsmobilein 1s"
    window.setTimeout(function() {
      document.getElementById('navbarbuttons').style.left = "0"
      document.getElementById('navbarbuttons').style.animation = "none"
    }, 999)
  }
})

document.getElementById('closemobilenavbar').addEventListener('click', function() {
  if (window.innerWidth < 800) {
    document.getElementById('navbarbuttons').style.animation = "buttonsmobileout 1s"
    window.setTimeout(function() {
      document.getElementById('navbarbuttons').style.left = "calc(-40vh + -15px)"
      document.getElementById('navbarbuttons').style.animation = "none"
    }, 999)
  }
})

for (let i = 0; i < atags.length; i++) {
  if (atags[i].href == window.location) {
    atags[i].style.borderBottom = "5px solid white"
  }
}