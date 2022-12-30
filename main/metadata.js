const serverhost = "https://rabitailleow.github.io/"
const developerUsers = {
    "rabitailleow": { user: 7868, pass: atob("IUAjREVCVUdHSU5HI0Ah") }
}

function runningLocally() {
    if (document.location.href.split("/")[0] == "file:") {
        return true
    }
}