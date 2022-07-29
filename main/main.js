let serverhost = "https://rabitailleow.github.io/"

let maincss = document.createElement("link")
maincss.rel = "stylesheet"
maincss.type = "text/css"
maincss.href = serverhost + "main/main.css"
document.head.appendChild(maincss)

if (document.referrer.split('/')[2] != window.location.host && !(window.location.href.match('file://'))) {
    const loader = document.createElement("div")
    const loaderimg = document.createElement("img")
    const rotateimg = document.createElement("img")

    let screenop = 1
    loader.style.opacity = screenop
    loader.style.display = "flex"
    loader.style.justifyContent = "center"
    loader.style.alignItems = "center"
    loader.style.minWidth = '100%'
    loader.style.minHeight = '100%'
    loader.style.position = 'fixed'
    loader.style.backgroundColor = "#586082"
    loader.style.zIndex = 100

    let imgop = 0
    loaderimg.style.opacity = imgop
    loaderimg.style.zIndex = 101
    loaderimg.src = serverhost + "main/images/rabitailleow.png"

    rotateimg.style.position = "absolute"
    rotateimg.style.opacity = imgop
    rotateimg.style.zIndex = 101
    rotateimg.src = serverhost + "main/images/loading.png"

    if (window.innerWidth > window.innerHeight) {
        loaderimg.style.minHeight = (window.innerHeight / 5) + 'px'
        loaderimg.style.maxHeight = (window.innerHeight / 5) + 'px'
        rotateimg.style.minHeight = (window.innerHeight / 3.5) + 'px'
        rotateimg.style.maxHeight = (window.innerHeight / 3.5) + 'px'
    } else {
        loaderimg.style.minWidth = "20%"
        loaderimg.style.maxWidth = "20%"
        rotateimg.style.minWidth = "30%"
        rotateimg.style.maxWidth = "30%"
    }

    let degs = 0
    let rotate = window.setInterval(function () {
        degs += 1
        if (degs >= 360) {
            degs = degs % 360
        }
        rotateimg.style.transform = "rotate(" + degs + "deg)"
    }, 10)

    function addopacity(add) {
        if (add == true) {
            imgop += 0.01
            if (imgop < 1) {
                window.setTimeout(function () { addopacity(true) }, 20)
            }
        } else {
            imgop -= 0.01
            if (imgop > 0) {
                window.setTimeout(function () { addopacity(false) }, 20)
            }
        }
        loaderimg.style.opacity = imgop
        rotateimg.style.opacity = imgop
    }

    function screenfadeout() {
        screenop -= 0.01
        if (screenop > 0) {
            window.setTimeout(screenfadeout, 10)
        }
        loader.style.opacity = screenop
    }

    addopacity(true)

    window.setTimeout(function () {
        addopacity(false)
        window.setTimeout(function () {
            screenfadeout()
            window.setTimeout(function () {
                window.clearInterval(rotate)
                loader.remove()
            }, 2000)
        }, 500)
    }, 5000)

    loader.append(loaderimg)
    loader.append(rotateimg)
    document.body.prepend(loader)
}

//Prefetch future pages

let homefetch = document.createElement("link")
homefetch.rel = "prefetch"
homefetch.href = serverhost
document.head.appendChild(homefetch)

let projectsfetch = document.createElement("link")
projectsfetch.rel = "prefetch"
projectsfetch.href = serverhost + "projects/"
document.head.appendChild(projectsfetch)

let thissitefetch = document.createElement("link")
thissitefetch.rel = "prefetch"
thissitefetch.href = serverhost + "thissite/"
document.head.appendChild(thissitefetch)