import data from "./resources/data.js"

function setup() {
    const questionElem = document.getElementById("results")
    function toDiv(blob) {
        const split = blob[0].split("\\");
        const body = document.createElement("div")
        for (let i = 0; i < split.length; i++) {
            const elem = document.createElement("p");
            elem.innerText = split[i];
            elem.classList.add("wg")
            elem.classList.add("spacing")
            body.append(elem)
        }

        const c = blob[1];
        const telem = document.createElement("div");
        for (let i = 0; i < c.length; i++) {
            if (c[i].charAt(0) == "#") {
                const e = document.createElement("code")
                e.classList.add("tag")
                e.innerText = c[i]
                telem.append(e)
            }
        }
        body.append(telem)
        return body;
    }

    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
        const e = document.createElement("div")
        const titlebox = document.createElement("h3")
        const body = toDiv(data[keys[i]])

        e.classList.add("questionContainer")
        titlebox.classList.add("titlebox")
        titlebox.classList.add("wgb")
        titlebox.innerText = keys[i]
        body.classList.add("questionBody")

        e.append(titlebox)
        e.append(body)
        questionElem.prepend(e)
    }
}

setup()

function testForMatch(a, b) {
    let list = a.split(" ");
    let matches = 0;

    for (let i = 0; i < list.length; i++) {
        if (b.match(list[i])) {
            matches++;
        }
    }

    if (matches / list.length >= 0.75) {
        return true;
    }

    return false;
}

function searchTags(name, sp) {
    const l = data[name][1]
    for (let i = 0; i < l.length; i++) {
        if (l[i].match(sp)) {
            return true;
        }
    }
    return false;
}

function search() {
    const text = inputBox.value;
    const elems = document.getElementById("results").childNodes
    let elemDisplayed = false
    for (let i = 0; i < elems.length; i++) {
        const e = elems[i]
        if (e.className == "questionContainer") {
            if (testForMatch(text.toLowerCase(), e.querySelector("h3").innerText.toLowerCase()) || searchTags(e.querySelector("h3").innerText, text)) {
                e.style.display = "block"
                elemDisplayed = true
            } else {
                e.style.display = "none"
            }
        }
    }
    if (elemDisplayed == true) {
        document.getElementById("noResults").style.display = "none"
    } else {
        document.getElementById("noResults").style.display = "block"
    }
}

const inputBox = document.querySelector("#fields input")
inputBox.addEventListener("keydown", search)
inputBox.addEventListener("keyup", search)

document.getElementById("newQuestionSubmit").addEventListener("click", function() {
    const text = document.querySelector("#remarks input").value
    if (text.length > 5) {
        var url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfB7uYo2Holp2pAtfwCd5KZkU4x86HPP4FoHQry2H8-nAKnpQ/formResponse?entry.422547697=" + encodeURIComponent(text);
    
        var script = document.createElement('script');
        script.src = url + '&callback=handleResponse';
        document.getElementsByTagName('head')[0].appendChild(script);
        document.querySelector("#remarks input").value = "";
    }
})
