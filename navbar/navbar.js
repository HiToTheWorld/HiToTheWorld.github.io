const navbar = document.getElementById('navbar')
const navbarcover = document.getElementById('navbarcover')
const atags = document.getElementById('navbarbuttons').getElementsByTagName('a')
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

window.onresize = function () {
  window.location.reload()
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
  if (atags[i].href == window.location) {
    atags[i].style.borderBottom = "5px solid white"
  }
}
