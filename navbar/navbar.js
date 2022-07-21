const navbar = document.getElementById('navbar')
const navbarcover = document.getElementById('navbarcover')
const atags = document.getElementById('navbarbuttons').getElementsByTagName('a')
let side = true

function onpagescroll() {
  let maxoffset = 80
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
          console.log(atags[i].style.animation)
          atags[i].style.padding = "2.5%"
          atags[i].style.animation = "none"
        }
      }, 500)
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
          atags[i].style.animation = "none"
        }
      }, 500)
    }

  }
}

window.onscroll = function() {
  onpagescroll()
}

onpagescroll()

for (let i = 0; i < atags.length; i++) {
  if (atags[i].href == window.location) {
    atags[i].style.borderBottom = "5px solid white"
  }
}
