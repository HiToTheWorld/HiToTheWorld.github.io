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

    console.log(values[3])
    let link = "https://docs.google.com/forms/d/" + formlink + "/formResponse?"
    for (let i = 0; i < entrys.length; i++) {
        link = link + "&entry." + entrys[i] + "=" + values[i]
    }
    console.log(link)
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", link);
    xhReq.send();
    document.getElementById("contactformresults").innerText = xhReq.responseText;
}

form.addEventListener('submit', handleForm);