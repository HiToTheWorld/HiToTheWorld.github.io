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
const morebutton = document.createElement("a")
const navbarcover = document.createElement("div")
const morearrow = document.createElement("i")
const morebuttonsmenu = document.createElement("div")

navbar.id = "navbar"
navbaropen.id = "navbaropen"
navbarbuttons.id = "navbarbuttons"
closemobilenavbar.id = "closemobilenavbar"
navbarcover.id = "navbarcover"
morebutton.id = "navbarmorebutton"
morebuttonsmenu.id = "morebuttonsmenu"

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

const atags = []

atags.push(homebutton)
atags.push(myprojectsbutton)
atags.push(thissitebutton)
atags.push(robloxbutton)

document.body.prepend(navbarcover)

morebutton.appendChild(morearrow)
morebutton.appendChild(morebuttonsmenu)
navbarbuttons.appendChild(closemobilenavbar)
navbarbuttons.appendChild(homebutton)
navbarbuttons.appendChild(myprojectsbutton)
navbarbuttons.appendChild(thissitebutton)
navbarbuttons.appendChild(robloxbutton)
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

let maxbuttons = 3

if (window.innerWidth > 800 && atags.length > maxbuttons && atags.length != maxbuttons + 1) {
  for (let i = maxbuttons; i < atags.length; i++) {
    // atags[i].style.margin = 0
    atags[i].style.padding = "10% 0"
    atags[i].style.paddingLeft = "8%"
    atags[i].style.minWidth = "92%"
    atags[i].style.maxWidth = "92%"
    atags[i].style.animation = "none"
    atags[i].style.minHeight = 0
    // atags[i].style.background = "none"
    morebuttonsmenu.appendChild(atags[i])
  }
  navbarbuttons.appendChild(morebutton)
  atags.splice(2)
  atags.push(morebutton)
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

let morebuttonsview = false

window.setInterval(function () {
  morebuttonsmenu.style.top = morebutton.getBoundingClientRect().top + morebutton.getBoundingClientRect().height + "px"
  // if (morebutton.matches(":hover")) {
  //   if (morebuttonsview == false) {
  //     morebuttonsview = true
  //     morebuttonsmenu.style.minHeight = 0
  //     morebuttonsmenu.style.maxHeight = 0
  //     morebuttonsmenu.style.height = 0
  //     morebuttonsmenu.style.display = "block"
  //     morebuttonsmenu.style.animation = "morebuttonstofull 1s"
  //     window.setTimeout(function () {
  //       morebuttonsmenu.style.minHeight = "80vh"
  //       morebuttonsmenu.style.maxHeight = "80vh"
  //     }, 1000)
  //   }
  // } else {
  //   if (morebuttonsview == true) {
  //     morebuttonsview = false
  //     morebuttonsmenu.style.animation = "morebuttonstonone 1s"
  //     window.setTimeout(function () {
  //       morebuttonsmenu.style.display = "none"
  //     }, 1000)
  //   }
  // }
}, 10)

window.onresize = function () {
  if ((mobile == true && window.innerWidth > 1000) || (mobile == false && window.innerWidth < 1000)) {
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