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

function onpagescroll() {
  let maxoffset = 80
  if (document.body.scrollTop > maxoffset || document.documentElement.scrollTop > maxoffset || window.pageYOffset > maxoffset) {
    if (side == false) {
      side = true
      navbar.style.animation = "toslimnavbar 0.5s"
      window.setTimeout(function () {
        navbar.style.height = "50px";
        navbar.style.animation = "none"
      }, 499)
    }
  } else {
    if (side == true) {
      side = false
      navbar.style.animation = "tofullnavbar 0.5s"
      window.setTimeout(function () {
        navbar.style.height = "120px";
        navbar.style.animation = "none"
      }, 499)
    }
    
  }
}

window.onscroll = function () {onpagescroll()}

onpagescroll()