const navbar = document.getElementById('navbar')

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

document.addEventListener('scroll', function() {
  if (isInViewport(navbar) == true) {
    
  } else {

  }
})
