// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

function showProjectModal(modalname) {
  modalname = modalname.split('button')[0] + 'modal'
  console.log(modalname)
  let modal = document.getElementById(modalname)
  document.getElementById('projectmodals').style.display = 'flex'
  modal.style.display = "block"
  
  // let pos = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset

  // console.log(pos)
  // document.documentElement.style.height = "100%"
  // document.body.style.height = "100%"
  // document.documentElement.style.overflow = "hidden"
  // document.body.style.overflow = "hidden"
  //   document.documentElement.style.top = pos
  // document.body.style.top = pos
}

document.getElementById('projectmodals').addEventListener('click', function (e) {
  if (e.target == document.getElementById('projectmodals')) {
    document.getElementById('projectmodals').style.display = 'none'
    let modals = document.getElementById('projectmodals').getElementsByTagName('div')
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none"
    }
  }
})