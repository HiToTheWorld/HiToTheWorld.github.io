const developerUsers = {
    "rabitailleow": { user: 7868, pass: atob("IUAjREVCVUdHSU5HI0Ah") }
}

function runningLocally() {
    if (document.location.href.split("/")[0] == "file:") {
        return true
    }
}

function getServerHost() {
    let sh = "https://rabitailleow.github.io/"
    if (runningLocally()) {
        sh = "file:///D:/Programming/rabitailleow.github.io/"
    }
    return sh
}

const serverhost = getServerHost()