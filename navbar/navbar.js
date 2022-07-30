//HTML

const navbar = document.createElement("div")
const navbaropen = document.createElement("button")
const navbaropenimg = document.createElement("canvas")
const navbartitle = document.createElement("h1")
const navbarbuttons = document.createElement("div")
const closemobilenavbar = document.createElement("button")
const homebutton = document.createElement("a")
const myprojectsbutton = document.createElement("a")
const thissitebutton = document.createElement("a")
const robloxbutton = document.createElement("a")
const morebutton = document.createElement("button")
const navbarcover = document.createElement("div")
const morearrow = document.createElement("i")

navbar.id = "navbar"
navbaropen.id = "navbaropen"
navbarbuttons.id = "navbarbuttons"
closemobilenavbar.id = "closemobilenavbar"
navbarcover.id = "navbarcover"
morebutton.id = "navbarmorebutton"

morearrow.className = "navbardownarrow"

// navbaropenimg.src = "https://publicdatastore.rabitailleow.repl.co/images/numberstat.png"
navbaropenimg.height = 30
navbaropenimg.width = 30
let ctx = navbaropenimg.getContext('2d')
ctx.beginPath()
ctx.moveTo(5, (navbaropenimg.height / 2) - 5)
ctx.lineTo(navbaropenimg.width - 5, (navbaropenimg.height / 2) - 5)
ctx.moveTo(5, navbaropenimg.height / 2)
ctx.lineTo(navbaropenimg.width - 5, navbaropenimg.height / 2)
ctx.moveTo(5, (navbaropenimg.height / 2) + 5)
ctx.lineTo(navbaropenimg.width - 5, (navbaropenimg.height / 2) + 5)
ctx.strokeStyle = "white"
ctx.lineWidth = 2
ctx.stroke()

homebutton.href = serverhost
myprojectsbutton.href = serverhost + "projects/"
thissitebutton.href = serverhost + "thissite/"
robloxbutton.href = serverhost + "projects/roblox"

navbartitle.innerHTML = "rabitailleow"
closemobilenavbar.innerHTML = "X"
homebutton.innerHTML = "Home"
myprojectsbutton.innerHTML = "My Projects"
thissitebutton.innerHTML = "This Site"
robloxbutton.innerHTML = "Roblox"
morebutton.innerHTML = "More"


document.body.prepend(navbarcover)

morebutton.appendChild(morearrow)
navbarbuttons.appendChild(closemobilenavbar)
navbarbuttons.appendChild(homebutton)
navbarbuttons.appendChild(myprojectsbutton)
navbarbuttons.appendChild(thissitebutton)
navbarbuttons.appendChild(robloxbutton)
navbarbuttons.appendChild(morebutton)
navbaropen.appendChild(navbaropenimg)
navbar.appendChild(navbaropen)
navbar.appendChild(navbartitle)
navbar.appendChild(navbarbuttons)

document.body.insertBefore(navbar, navbarcover)

//CSS

let navbarcss = document.createElement("link")
navbarcss.rel = "stylesheet"
navbarcss.type = "text/css"
navbarcss.href = serverhost + "navbar/navbar.css"
document.head.appendChild(navbarcss)

//JavaScript

const atags = navbarbuttons.getElementsByTagName('a')

if (window.innerWidth > 800 && atags.length >= 3) {
  console.log(atags.length)
  for (let i = 2; i < atags.length; i++) {
    atags[i].style.display = "none"
  }
  morebutton.style.display = "block"
}

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
        window.setTimeout(function () {
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
        window.setTimeout(function () {
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

let mobile = (window.innerWidth < 800)

window.onresize = function () {
  if ((mobile == true && window.innerWidth > 800) || (mobile == false && window.innerWidth < 800)) {
    window.location.reload()
  }
}

window.onscroll = function () {
  onpagescroll()
}

onpagescroll()

document.getElementById('navbaropen').addEventListener('click', function () {
  if (window.innerWidth < 800) {
    document.getElementById('navbarbuttons').style.animation = "buttonsmobilein 1s"
    window.setTimeout(function () {
      document.getElementById('navbarbuttons').style.left = "0"
      document.getElementById('navbarbuttons').style.animation = "none"
    }, 999)
  }
})

document.getElementById('closemobilenavbar').addEventListener('click', function () {
  if (window.innerWidth < 800) {
    document.getElementById('navbarbuttons').style.animation = "buttonsmobileout 1s"
    window.setTimeout(function () {
      document.getElementById('navbarbuttons').style.left = "calc(-40vh + -15px)"
      document.getElementById('navbarbuttons').style.animation = "none"
    }, 999)
  }
})

for (let i = 0; i < atags.length; i++) {
  if (atags[i].href == window.location.href) {
    atags[i].style.borderBottom = "5px solid white"
  }
}