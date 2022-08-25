function showProjectModal(modalname) {
    modalname = modalname.split('button')[0] + 'modal'
    let modal = document.getElementById(modalname)
    document.getElementById('projectmodals').style.display = 'flex'
    modal.style.display = "block"
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