const elements = [
    { name: "hydrogen", symbol: "h", atomicNumber: 1, state: "gas", metal: "nonmetal", classList: [], atomicMass: 1.008 },
    { name: "helium", symbol: "he", atomicNumber: 2, state: "gas", metal: "nonmetal", classList: ["noble gas"], atomicMass: 4.003 },
    { name: "lithium", symbol: "li", atomicNumber: 3, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 6.941 },
    { name: "beryllium", symbol: "be", atomicNumber: 4, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 9.012 },
    { name: "boron", symbol: "b", atomicNumber: 5, state: "solid", metal: "metalloid", classList: [], atomicMass: 10.911 },
    { name: "carbon", symbol: "c", atomicNumber: 6, state: "solid", metal: "nonmetal", classList: [], atomicMass: 12.011 },
    { name: "nitrogen", symbol: "n", atomicNumber: 7, state: "gas", metal: "nonmetal", classList: [], atomicMass: 14.007 },
    { name: "oxygen", symbol: "o", atomicNumber: 8, state: "gas", metal: "nonmetal", classList: [], atomicMass: 15.999 },
    { name: "fluorine", symbol: "f", atomicNumber: 9, state: "gas", metal: "nonmetal", classList: ["halogen"], atomicMass: 8.998 },
    { name: "neon", symbol: "ne", atomicNumber: 10, state: "gas", metal: "nonmetal", classList: ["noble gas"], atomicMass: 20.180 },
    { name: "sodium", symbol: "na", atomicNumber: 11, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 22.990 },
    { name: "magnesium", symbol: "mg", atomicNumber: 12, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 24.305 },
    { name: "aluminum", symbol: "al", atomicNumber: 13, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 26.982 },
    { name: "silicon", symbol: "si", atomicNumber: 14, state: "solid", metal: "metalloid", classList: [], atomicMass: 28.085 },
    { name: "phosphorus", symbol: "p", atomicNumber: 15, state: "solid", metal: "nonmetal", classList: [], atomicMass: 30.974 },
    { name: "sulfur", symbol: "s", atomicNumber: 16, state: "solid", metal: "nonmetal", classList: [], atomicMass: 32.060 },
    { name: "chlorine", symbol: "cl", atomicNumber: 17, state: "gas", metal: "nonmetal", classList: ["halogen"], atomicMass: 35.450 },
    { name: "argon", symbol: "ar", atomicNumber: 18, state: "gas", metal: "nonmetal", classList: ["noble gas"], atomicMass: 39.948 },
    { name: "potassium", symbol: "k", atomicNumber: 19, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 39.098 },
    { name: "calcium", symbol: "ca", atomicNumber: 20, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 40.078 },
    { name: "scandium", symbol: "sc", atomicNumber: 21, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 44.956 },
    { name: "titanium", symbol: "ti", atomicNumber: 22, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 47.867 },
    { name: "vanadium", symbol: "v", atomicNumber: 23, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 50.942 },
    { name: "chromium", symbol: "cr", atomicNumber: 24, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "manganese", symbol: "mn", atomicNumber: 25, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "iron", symbol: "fe", atomicNumber: 26, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "cobalt", symbol: "co", atomicNumber: 27, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "nickel", symbol: "ni", atomicNumber: 28, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "copper", symbol: "cu", atomicNumber: 29, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "zinc", symbol: "zn", atomicNumber: 30, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "gallium", symbol: "ga", atomicNumber: 31, state: "", metal: "", classList: ["inner transition metal"], atomicMass: 0 },
    { name: "germanium", symbol: "ge", atomicNumber: 32, state: "solid", metal: "metalloid", classList: [], atomicMass: 0 },
    { name: "arsenic", symbol: "as", atomicNumber: 33, state: "solid", metal: "metalloid", classList: [], atomicMass: 0 },
    { name: "selenium", symbol: "se", atomicNumber: 34, state: "solid", metal: "nonmetal", classList: [], atomicMass: 0 },
    { name: "bromine", symbol: "br", atomicNumber: 35, state: "liquid", metal: "nonmetal", classList: ["halogen"], atomicMass: 0 },
    { name: "krypton", symbol: "kr", atomicNumber: 36, state: "gas", metal: "nonmetal", classList: [], atomicMass: 0 },
    { name: "rubidium", symbol: "rb", atomicNumber: 37, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 0 },
    { name: "strontium", symbol: "sr", atomicNumber: 38, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 0 },
    { name: "yttrium", symbol: "y", atomicNumber: 39, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "zirconium", symbol: "zr", atomicNumber: 40, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "niobium", symbol: "nb", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "molybdenum", symbol: "mo", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "technetium", symbol: "tc", atomicNumber: 43, state: "solid", metal: "metal", classList: ["transition metal", "radioactive"], atomicMass: 0 },
    { name: "ruthenium", symbol: "ru", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "rhodium", symbol: "rh", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "palladium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "silver", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "cadmium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "indum", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 0 },
    { name: "tin", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 0 },
    { name: "antimony", symbol: "", atomicNumber: 0, state: "solid", metal: "metalloid", classList: [], atomicMass: 0 },
    { name: "tellurium", symbol: "", atomicNumber: 0, state: "solid", metal: "metalloid", classList: [], atomicMass: 0 },
    { name: "iodine", symbol: "", atomicNumber: 0, state: "solid", metal: "nonmetal", classList: ["halogen"], atomicMass: 0 },
    { name: "xenon", symbol: "", atomicNumber: 0, state: "gas", metal: "nonmetal", classList: [], atomicMass: 0 },
    { name: "cesium", symbol: "cs", atomicNumber: 55, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 0 },
    { name: "barium", symbol: "ba", atomicNumber: 56, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 0 },
    { name: "lanthanum", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "cerium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "praseodymium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "neodymium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "promethium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide", "radioactive"], atomicMass: 0 },
    { name: "samarium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "europium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "gadolinium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "terbium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "dysprosium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "holmium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "erbium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "thulium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "ytterbium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "lutetium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 0 },
    { name: "hafnium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "tantalum", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "tungsten", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "rhenium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "osmium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "iridium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "platinum", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "gold", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "mercury", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 0 },
    { name: "thallium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 0 },
    { name: "lead", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 0 },
    { name: "bismuth", symbol: "", atomicNumber: 83, state: "solid", metal: "metal", classList: ["inner transition metal", "radioactive"], atomicMass: 0 },
    { name: "polonium", symbol: "", atomicNumber: 84, state: "solid", metal: "metalloid", classList: ["radioactive"], atomicMass: 0 },
    { name: "astatine", symbol: "", atomicNumber: 85, state: "solid", metal: "metalloid", classList: ["halogen", "radioactive"], atomicMass: 0 },
    { name: "radon", symbol: "", atomicNumber: 86, state: "gas", metal: "nonmetal", classList: ["radioactive"], atomicMass: 0 },
    { name: "francium", symbol: "fr", atomicNumber: 87, state: "solid", metal: "metal", classList: ["alkali", "radioactive"], atomicMass: 0 },
    { name: "radium", symbol: "", atomicNumber: 88, state: "solid", metal: "metal", classList: ["alkaline", "radioactive"], atomicMass: 0 },
    { name: "actinium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 0 },
    { name: "thorium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 0 },
    { name: "protactinium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 0 },
    { name: "uranium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 0 },
    { name: "neptunium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 0 },
    { name: "plutonium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 0 },
    { name: "americium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "curium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "berkelium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "californium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "einsteinium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "fermium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "mendelevium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "nobelium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "lawrencium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["actinide", "synthetic"], atomicMass: 0 },
    { name: "rutherfordium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "dubnium", symbol: "", atomicNumber: 0, state: "", metal: "", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "seaborgium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "bohrium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "hassium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "meitnerium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "darmstadtium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "roentgenium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "copernicium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["transition metal", "synthetic"], atomicMass: 0 },
    { name: "nihonium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal", "synthetic"], atomicMass: 0 },
    { name: "flerovium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal", "synthetic"], atomicMass: 0 },
    { name: "moscovium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal", "synthetic"], atomicMass: 0 },
    { name: "livermorium", symbol: "", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal", "synthetic"], atomicMass: 0 },
    { name: "tennessine", symbol: "", atomicNumber: 0, state: "solid", metal: "metalloid", classList: ["halogen", "synthetic"], atomicMass: 0 },
    { name: "oganesson", symbol: "", atomicNumber: 0, state: "gas", metal: "nonmetal", classList: ["noble gas", "synthetic"], atomicMass: 0 },
]

const questionKeywords = []
const guessedKeywords = []
const typeGroupings = {
    chemicalGroups: ["noble gas", "alkaline", "alkali", "halogen", "transition metal", "inner transition metal", "lanthanide", "actinide", "synthetic", "radioactive"],
    states: ["gas", "solid", "liquid"],
    metals: ["nonmetal", "metalloid", "metal"],
    elements: []
}

for (let i = 0; i < elements.length; i++) {
    questionKeywords.push(elements[i].name)
}

for (let i = 0; i < Object.keys(typeGroupings).length; i++) {
    for (let j = 0; j < typeGroupings[Object.keys(typeGroupings)[i]].length; j++) {
        questionKeywords.push(typeGroupings[Object.keys(typeGroupings)[i]][j])
    }
}

for (let i = 0; i < elements.length; i++) {
    typeGroupings.elements.push(elements[i].name)
}

function capName(str) {
    let cutstr = str.split(" ")
    let newstr = ""
    for (let i = 0; i < cutstr.length; i++) {
        newstr += cutstr[i].charAt(0).toUpperCase() + cutstr[i].slice(1)
        if (i < cutstr.length - 1) {
            newstr += " "
        }
    }
    return newstr
}

function addHint(text) {
    const li = document.createElement("li")
    li.innerText = text
    document.getElementById("hintsList").appendChild(li)
    score += 1
    document.getElementById("hintsCount").innerText = score
}

function run() {

    let score = 0;
    let element = elements[Math.floor(Math.random() * (elements.length))]

    function formatInput(input) {
        input = input.toLowerCase()
        input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?=]/g, "")
        return input
    }

    function clueReveal(keyword) {
        if (element.name == keyword) {
            document.getElementById("bannerMsg").innerText = "Congratulations! You got the element in " + score + " tries! It was " + capName(element.name) + "! Reload to play again!";
            document.getElementById("questionInput").disabled = true;
            document.getElementById("enterBtn").disabled = true;
        } else if (typeGroupings.elements.includes(keyword)) {
            addHint("The secret element is not " + capName(keyword) + ".")
        }

        if (element.state == keyword) {
            addHint("The secret element is a " + keyword + "!")
        } else if (typeGroupings.states.includes(keyword) == true) {
            addHint("The secret element is not a " + keyword + ".")
        }

        if (element.classList.includes(keyword)) {
            addHint("The secret element is part of the '" + capName(keyword) + "' chemical group!")
        } else if (typeGroupings.chemicalGroups.includes(keyword)) {
            addHint("The secret element is not part of the '" + capName(keyword) + "' chemical group.")
        }

        if (element.metal == keyword) {
            addHint("The secret element if of the '" + capName(keyword) + "' metal type!")
        } else if (typeGroupings.metals.includes(keyword)) {
            addHint("The secret element is not of the '" + capName(keyword) + "' metal type.")
        }
    }

    function inputEntered() {
        const input = formatInput(document.getElementById("questionInput").value)

        input.replace("lanthanoid", "lanthanide")
        input.replace("actinoid", "actinide")

        let matches = []
        let matched = false

        for (let i = 0; i < questionKeywords.length; i++) {
            if (input.match(questionKeywords[i])) {
                matches.push(questionKeywords[i])
            }
        }

        for (let j = 0; j < matches.length; j++) {
            let singular = true
            for (let k = 0; k < matches.length; k++) {
                if (k != j && matches[k].includes(matches[j]) == true) {
                    singular = false
                }
            }

            if (singular == true && guessedKeywords.includes(matches[j]) == false) {
                clueReveal(matches[j])
                matched = true
                guessedKeywords.push(matches[j]);
            }
        }

        if (input.includes("atomic mass")) {
            if (input.includes("greater than")) {
                let num = parseInt(input.split("greater than")[1])
                if (guessedKeywords.includes("mass-" + num) == false) {
                    if (element.atomicMass > num) {
                        addHint("The secret element's atomic mass is greater than " + num + "!")
                    } else if (element.atomicMass < num) {
                        addHint("The secret element's atomic mass is less than " + num + ".")
                    }
                    guessedKeywords.push("mass-" + num)
                    matched = true
                }
            } else if (input.includes("less than")) {
                let num = parseInt(input.split("less than")[1])
                if (guessedKeywords.includes("mass-" + num) == false) {
                    if (element.atomicMass < num) {
                        addHint("The secret element's atomic mass is less than " + num + "!")
                    } else if (element.atomicMass > num) {
                        addHint("The secret element's atomic mass is greater than " + num + ".")
                    }
                    guessedKeywords.push("mass-" + num)
                    matched = true
                }
            }
        }

        if (input.includes("symbol") && input.includes("start") && input.includes("with")) {
            let string = input.split("with")[1]
            let letter = string.charAt(0)

            for (let i = 0; i < string.length; i++) {
                letter = string.charAt(i)
                if (letter.match(/[a-z]/g)) {
                    break
                }
            }

            do {
                letter = string.charAt
            } while (!(letter.match(/[a-z]/g)))
            if (element.symbol.charAt(0) == letter) {
                addHint("The secret element's symbol starts with" + capName(letter) + "!")
            } else {
                addHint("The secret element's symbol does not start with" + capName(letter) + ".")
            }
        }

        if (input.includes("i give up")) {
            document.getElementById("bannerMsg").innerText = "Aww! Don't give up! You can do it! By the way the element was " + capName(element.name) + ".";
            document.getElementById("questionInput").disabled = true;
            document.getElementById("enterBtn").disabled = true;
        }

        document.getElementById("questionInput").value = "";
    }

    window.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            inputEntered();
        }
    })

    document.getElementById("enterBtn").addEventListener("click", inputEntered);
}

run()