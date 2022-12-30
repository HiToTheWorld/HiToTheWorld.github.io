let sp = atob((new URL(document.location)).searchParams.get("t"));

if (((sp.slice(0, 11) == "D3vt00!s+id" && developerUsers[atob(sp.slice(10))]) || runningLocally()) && window.innerWidth >= 700) {
    window.history.replaceState({}, "Devtools", window.location.href);
} else {
    window.location.replace("../")
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 700) {
        window.location.replace("../")
    }
})

/* <button id="mdreaderbutton" onclick="showProjectModal(this.id)">
<img src='../main/images/markdown.png' />
<div>
  <p><strong>MD Reader</strong></p>
  <p>Read a markdown file!</p>
</div>
</button> */

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

window.setInterval(updProjectManager, 100)