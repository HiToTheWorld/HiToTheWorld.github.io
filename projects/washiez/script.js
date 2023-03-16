import data from "./resources/data.js"

function setup() {
    const questionElem = document.getElementById("results")

    const keys = Object.keys(data)

    for (let i = 0; i < keys.length; i++) {
        const e = document.createElement("div")
        const titlebox = document.createElement("h3")
        const blob = data[keys[i]]
        const split = blob[0].split("\\");
        const body = document.createElement("div")

        for (let j = 0; j < split.length; j++) {
            const elem = document.createElement("p");
            const slice = split[j].split("**")
            
            for (let k = 0; k < slice.length; k++) {
                if (k % 2 != 0) {
                    const el = document.createElement("strong")
                    el.innerText = slice[k]
                    elem.append(el)
                } else {
                    elem.append(document.createTextNode(slice[k]))
                }
            }
            
            elem.classList.add("wg")
            elem.classList.add("spacing")
            body.append(elem)
        }

        e.dataset.rel = 0
        e.classList.add("questionContainer")
        titlebox.classList.add("titlebox")
        titlebox.classList.add("wgb")
        const span = document.createElement("span")
        span.innerText = keys[i]
        titlebox.append(span)
        body.classList.add("questionBody")

        const c = blob[1];
        if (c.length > 0 && window.innerWidth > 600) {
            const telem = document.createElement("div");
            telem.classList.add("tagContainer")
            for (let i = 0; i < c.length; i++) {
                if (c[i].charAt(0) == "#") {
                    const e = document.createElement("code")
                    e.classList.add("tag")
                    e.innerText = c[i]
                    telem.append(e)
                }
            }

            titlebox.prepend(telem)
        }

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

    return matches / list.length;
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

function orderByRelevance() {
    const elems = document.getElementById("results").children

    for (let i = 0; i < elems.length; i++) {
        for (let j = 0; j < elems.length; j++) {
            if (elems[i].className == "questionContainer" && elems[j].className == "questionContainer") {
                if (elems[i].dataset.rel >= elems[j].dataset.rel) {
                    elems[i].remove()
                    document.getElementById("results").insertBefore(elems[i], elems[j])
                }
            }
        }
    }
}

function search() {
    const text = inputBox.value;
    const elems = document.getElementById("results").childNodes
    let elemDisplayed = false

    for (let i = 0; i < elems.length; i++) {
        const e = elems[i]
        if (e.className == "questionContainer") {
            e.dataset.rel = testForMatch(text.toLowerCase(), e.querySelector("h3 span").innerText.toLowerCase())
            if (e.dataset.rel >= 0.8) {
                e.style.display = "block"
                elemDisplayed = true
            } else {
                if (searchTags(e.querySelector("h3 span").innerText, text)) {
                    e.style.display = "block"
                    elemDisplayed = true
                    e.dataset.rel = 0
                } else {
                    e.style.display = "none"
                }
            }
        }
    }

    orderByRelevance()

    if (elemDisplayed == true) {
        document.getElementById("noResults").style.display = "none"
    } else {
        document.getElementById("noResults").style.display = "block"
    }
}

const inputBox = document.querySelector("#fields input")
inputBox.addEventListener("keydown", search)
inputBox.addEventListener("keyup", search)

document.getElementById("newQuestionSubmit").addEventListener("click", function () {
    const text = document.querySelector("#remarks input").value
    if (text.length > 5) {
        var url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfB7uYo2Holp2pAtfwCd5KZkU4x86HPP4FoHQry2H8-nAKnpQ/formResponse?entry.422547697=" + encodeURIComponent(text);

        var script = document.createElement('script');
        script.src = url + '&callback=handleResponse';
        document.getElementsByTagName('head')[0].appendChild(script);
        document.querySelector("#remarks input").value = "";
        document.getElementById("remarks").remove()
    }
})
