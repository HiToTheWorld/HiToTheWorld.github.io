let sp = (new URL(document.location)).searchParams.get("t");

function testWidth() {
    if (window.innerWidth < 700) {
        if (!runningLocally()) {
            window.history.replaceState({}, "Devtools", "../");
        }
        window.location.replace("../");
    }
}

testWidth()

if (performance.getEntriesByType('navigation')[0].type == "reload" || (document.referrer != "https://rabitailleow.github.io/devtools/" && !runningLocally())) {
    if (!runningLocally()) {
        window.history.replaceState({}, "Devtools", "../")
    }
    window.location.replace("../")
}

if (sp) {
    try {
        sp = atob(sp)
        atob(sp.slice(11))
    } catch {
        if (!runningLocally()) {
            window.history.replaceState({}, "Devtools", "../")
        }
        window.location.replace("../");
    }

    if ((sp.slice(0, 11) == "D3vt00!s+id" && developerUsers[atob(sp.slice(11))]) && window.innerWidth >= 700) {
        if (!runningLocally()) {
            window.history.replaceState({}, "Devtools", "../");
        }
    } else {
        if (!runningLocally()) {
            window.history.replaceState({}, "Devtools", "../");
        }
        window.location.replace("../");
    }
} else {
    if (!runningLocally()) {
        window.history.replaceState({}, "Devtools", "../");
    }
    window.location.replace("../");
}

window.addEventListener("resize", testWidth)


function getInputFromId(id) {
    return document.getElementById("-projectManager-" + id).value
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function formatDate(date) {
    let dates = date.split("-")
    return months[parseInt(dates[1]) - 1] + " " + dates[2] + ", " + dates[0]
}

function launchPath(p) {
    if (getInputFromId("path")) {
        if (p == true) {
            return `
            <button onclick="window.location.replace('./` + getInputFromId("path") + `')" class="modallaunchwebsite">Launch 🚀</button>`
        } else {
            return `
            <button onclick="window.location.replace('./projects/` + getInputFromId("path") + `')" class="modallaunchwebsite">Launch 🚀</button>`
        }
    }

    return ""
}

function updProjectManager() {
    let string = `//Root Button
<button id="` + getInputFromId("projectId") + `" onclick="showProjectModal(this.id)">
<img src='main/images/` + getInputFromId("icon") + `' />
<div>
    <p><strong>` + getInputFromId("title") + `</strong></p>
    <p>` + getInputFromId("shortDesc") + `</p>
</div>
</button>



//Root Modal
<div class="projectmodal" id="` + getInputFromId("projectId") + `modal">
<img src='main/images/` + getInputFromId("modalImg") + `' />
<h2>` + getInputFromId("title") + `</h2>
<p>` + getInputFromId("longDesc") + `</p>` + launchPath(false) + `
<div class="dateContainer">
  <hr>
  <h6>` + formatDate(getInputFromId("date")) + `</h6>
</div>
</div>


//------------------------------


//Project Button
<button id="` + getInputFromId("projectId") + `" onclick="showProjectModal(this.id)">
<img src='../main/images/` + getInputFromId("icon") + `' />
<div>
    <p><strong>` + getInputFromId("title") + `</strong></p>
    <p>` + getInputFromId("shortDesc") + `</p>
</div>
</button>



//Project Modal
<div class="projectmodal" id="` + getInputFromId("projectId") + `modal">
<img src='../main/images/` + getInputFromId("modalImg") + `' />
<h2>` + getInputFromId("title") + `</h2>
<p>` + getInputFromId("longDesc") + `</p>` + launchPath(true) + `
<div class="dateContainer">
  <hr>
  <h6>` + formatDate(getInputFromId("date")) + `</h6>
</div>
</div>
`
    document.getElementById("projectManagerOutput").value = string
}

let copycount = 0
const onelineIn = document.getElementById("onelineinput")

function oneline() {
    let text = document.getElementById("onelineinput").value
    text = text.replaceAll("\n", "")
    text = text.replaceAll("  ", "")

    navigator.clipboard.writeText(text);

    copycount++
    document.getElementById("onelinecopyalert").innerText = "Copied! (" + copycount + ")"
}

onelineIn.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        oneline()
    }
})

window.setInterval(updProjectManager, 100)