const navbar = document.getElementById('navbar')
const navbarcover = document.getElementById('navbarcover')

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function showProjectModal(pelem) {
//   let modal = pelem.getElementsByClassName('projectModal')[0]
// //   modal.style.display = "block"
// }

let side = true

console.log('compiled')

document.onscroll = function () {
  console.log('scrolled')
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    if (side == false) {
      side = true
      navbar.style.animation = "toslimnavbar 0.5s"
      window.setTimeout(function () {
        navbar.style.height = "50px";
        navbar.style.animation = "none"
      }, 499)
      console.log('1')
    }
  } else {
    if (side == true) {
      side = false
      navbar.style.animation = "tofullnavbar 0.5s"
      window.setTimeout(function () {
        navbar.style.height = "80px";
        navbar.style.animation = "none"
      }, 499)
      console.log('2')
    }
    
  }
}

console.log('finished compiling')