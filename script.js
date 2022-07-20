const navbar = document.getElementById('navbar')
const navbarcover = document.getElementById('navbarcover')

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showProjectModal(pelem) {
  let modal = pelem.getElementsByClassName('projectModal')[0]
//   modal.style.display = "block"
}

let side = true

document.addEventListener('scroll', function() {
  if (isInViewport(navbarcover) == true) {
    if (side == false) {
      side = true
      navbar.style.animation = "tofullnavbar 0.5s"
      window.setTimeout(function () {
        navbar.style.minHeight = "120px";
      }, 500)
    }
  } else {
    if (side == true) {
      side = false
      navbar.style.animation = "toslimnavbar 0.5s"
      window.setTimeout(function () {
        navbar.style.minHeight = "80px";
      }, 500)
    }
  }
})