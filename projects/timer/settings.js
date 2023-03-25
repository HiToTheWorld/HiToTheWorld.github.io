const settings = {
    "time": "15:00",
    "font": "'Roboto', sans-serif",
    "anti_lag": true,
    "color": "#ffffff",
}

document.getElementById("timer").style.fontFamily = settings.font

document.getElementById("settingsbtn").addEventListener("click", function () {
    if (document.getElementById("settings").style.display == "block") {
        document.getElementById("settings").style.display = "none";
    } else {
        document.getElementById("settings").style.display = "block";
    }
})

const fonts = [
    "Abel",
    "Abril Fatface",
    "Acme",
    "Alegreya",
    "Alegreya Sans",
    "Anton",
    "Archivo",
    "Archivo Black",
    "Archivo Narrow",
    "Arimo",
    "Arvo",
    "Asap",
    "Asap Condensed",
    "Bitter",
    "Bowlby One SC",
    "Bree Serif",
    "Cabin",
    "Cairo",
    "Catamaran",
    "Crete Round",
    "Crimson Text",
    "Cuprum",
    "Dancing Script",
    "Dosis",
    "Droid Sans",
    "Droid Serif",
    "EB Garamond",
    "Exo",
    "Exo 2",
    "Faustina",
    "Fira Sans",
    "Fjalla One",
    "Francois One",
    "Gloria Hallelujah",
    "Hind",
    "Inconsolata",
    "Indie Flower",
    "Josefin Sans",
    "Julee",
    "Karla",
    "Lato",
    "Libre Baskerville",
    "Libre Franklin",
    "Lobster",
    "Lora",
    "Mada",
    "Manuale",
    "Maven Pro",
    "Merriweather",
    "Merriweather Sans",
    "Montserrat",
    "Montserrat Subrayada",
    "Mukta Vaani",
    "Muli",
    "Noto Sans",
    "Noto Serif",
    "Nunito",
    "Open Sans",
    "Open Sans Condensed",
    "Oswald",
    "Oxygen",
    "PT Sans",
    "PT Sans Caption",
    "PT Sans Narrow",
    "PT Serif",
    "Pacifico",
    "Passion One",
    "Pathway Gothic One",
    "Play",
    "Playfair Display",
    "Poppins",
    "Questrial",
    "Quicksand",
    "Raleway",
    "Roboto",
    "Roboto Condensed",
    "Roboto Mono",
    "Roboto Slab",
    "Ropa Sans",
    "Rubik",
    "Saira",
    "Saira Condensed",
    "Saira Extra Condensed",
    "Saira Semi Condensed",
    "Satisfy",
    "Sedgwick Ave",
    "Sedgwick Ave Display",
    "Shadows Into Light",
    "Signika",
    "Slabo 27px",
    "Source Code Pro",
    "Source Sans Pro",
    "Spectral",
    "Titillium Web",
    "Ubuntu",
    "Ubuntu Condensed",
    "Varela Round",
    "Vollkorn",
    "Work Sans",
    "Yanone Kaffeesatz",
    "Zilla Slab",
    "Zilla Slab Highlight"
]

for (let i = 0; i < fonts.length; i++) {
    const obj = document.createElement("option")
    obj.text = fonts[i]
    if (obj.text == "Roboto") {
        obj.selected = true
    }
    document.getElementById("fontSelector").append(obj)
}

document.getElementById("fontSelector").addEventListener("change", function () {
    document.getElementById("timer").style.fontFamily = "'" + document.getElementById("fontSelector").value + "', sans-serif";
})

window.setInterval(function () {
    document.getElementById("timer").style.fontSize = document.getElementById("fontSizeSelector").value + "vw";
}, 10)

document.getElementById("background").addEventListener("click", function () {
    document.getElementById("settings").style.display = "none";
})