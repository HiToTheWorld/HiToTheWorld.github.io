let formlink = "1JyHZIZA95PsyTQp4NYKqswrczILbPRYYk1rv-G2syWc"
let entrys = [219503384, 112310945, 1364991061, 547331515]

var form = document.getElementById("contactForm");
function handleForm(e) {
    e.preventDefault();
    let values = [
        document.getElementById("contactuseremail").value,
        document.getElementById("contactusername").value,
        document.getElementById("contactcategory").options[document.getElementById("contactcategory").selectedIndex].text,
        document.getElementById("contactmessage").value
    ]
    let nls = "&/n;"
    if (values[3].includes(nls) == true) {
        nls = "**/n**"
    }
    let value3lines = values[3].split("\n")

    values[3] = ""
    for (let i = 0; i < value3lines.length; i++) {
        if (i == 0) {
            values[3] += value3lines[i]
        } else {
            values[3] += values[3] + nls + value3lines[i]
        }
    }

    let link = "https://docs.google.com/forms/d/" + formlink + "/formResponse?"
    for (let i = 0; i < entrys.length; i++) {
        link = link + "&entry." + entrys[i] + "=" + values[i]
    }
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", link);
    xhReq.send();
    document.getElementById("contactformresults").innerText = "Your request has been submitted!";
    window.setTimeout(function () {
        document.getElementById("contactformresults").innerText = "";
    }, 5000)
}

form.addEventListener('submit', handleForm);