const island = document.getElementById("island")
const a = document.getElementById("entrycode")
const b = document.getElementById("userid")
const c = document.getElementById("userpass")
const lock = document.getElementById("lockimg")
const text = document.getElementById("intext")

function findUserFromId(id) {
    for (let i = 0; i < Object.keys(developerUsers).length; i++) {
        if (developerUsers[Object.keys(developerUsers)[i]].user == id) {
            return Object.keys(developerUsers)[i]
        }
    }
}

function run() {
    let attempts = 5
    const twostep = false
    const password = btoa("D3vt00!s")

    function tob() {
        a.blur()
        island.style.animation = "blurisland 3s"
        lock.style.animation = "blurisland 3s"
        window.setTimeout(function () {
            a.style.display = "none"
            c.style.display = "none"
            b.style.display = "initial"
            b.focus()
            text.innerText = "This application is locked. Sign in to continue."
        }, 1500)
        window.setTimeout(function () {
            island.style.animation = null
            lock.style.animation = null
            b.addEventListener("keydown", function (e) {
                if (e.key == "Enter") {
                    toc()
                }
            })
        }, 3000)
    }

    function toc() {
        b.blur()
        island.style.animation = "blurisland 3s"
        lock.style.animation = "blurisland 3s"
        window.setTimeout(function () {
            b.style.display = "none"
            c.style.display = "initial"
            c.focus()
            text.innerText = "Welcome, " + b.value
        }, 1500)
        window.setTimeout(function () {
            island.style.animation = null
            lock.style.animation = null
            c.addEventListener("keydown", function (e) {
                if (e.key == "Enter") {
                    let userName = findUserFromId(b.value)
                    let user = developerUsers[userName]
                    if (user && user.pass == c.value) {
                        a.value = "";
                        b.value = "";
                        c.value = "";
                        if (runningLocally()) {
                            window.location.replace("open/index.html?t=" + btoa(atob(password) + "+id" + btoa(userName)))
                        } else {
                            window.location.replace("open/?t=" + btoa(atob(password) + "+id" + btoa(userName)))
                        }
                    } else {
                        b.value = "";
                        c.value = "";
                        tob()
                    }
                }
            })
        }, 3000)
    }

    console.log(document.referrer)

    function gate() {
        if (a.value == atob(password)) {
            tob()
        } else {
            attempts--
            a.value = "";
            a.style.animation = "wrongPass 0.5s"
            window.setTimeout(function () {
                a.style.outlineColor = "#f54242"
            }, 500)
        }
    }

    a.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            gate()
        }
    })

    a.addEventListener("blur", function () {
        a.style.outlineColor = "#0070c9"
        a.style.animation = null
    })

    window.onbeforeunload = function () {
        try {
            window.history.replaceState({}, "Devtools Gate", attempts);
        } catch {
            console.error("History Error")
        }
    }
}

run()

// function send(token) {

// }