const elements = [
    { name: "hydrogen", symbol: "h", atomicNumber: 1, state: "gas", metal: "nonmetal", classList: [], atomicMass: 1.008, tablePos: { x: 0, y: 0 } },
    { name: "helium", symbol: "he", atomicNumber: 2, state: "gas", metal: "nonmetal", classList: ["noble gas"], atomicMass: 4.003, tablePos: { x: 17, y: 0 } },
    { name: "lithium", symbol: "li", atomicNumber: 3, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 6.941, tablePos: { x: 0, y: 1 } },
    { name: "beryllium", symbol: "be", atomicNumber: 4, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 9.012, tablePos: { x: 1, y: 1 } },
    { name: "boron", symbol: "b", atomicNumber: 5, state: "solid", metal: "metalloid", classList: [], atomicMass: 10.911, tablePos: { x: 12, y: 1 } },
    { name: "carbon", symbol: "c", atomicNumber: 6, state: "solid", metal: "nonmetal", classList: [], atomicMass: 12.011, tablePos: { x: 13, y: 1 } },
    { name: "nitrogen", symbol: "n", atomicNumber: 7, state: "gas", metal: "nonmetal", classList: [], atomicMass: 14.007, tablePos: { x: 14, y: 1 } },
    { name: "oxygen", symbol: "o", atomicNumber: 8, state: "gas", metal: "nonmetal", classList: [], atomicMass: 15.999, tablePos: { x: 15, y: 1 } },
    { name: "fluorine", symbol: "f", atomicNumber: 9, state: "gas", metal: "nonmetal", classList: ["halogen"], atomicMass: 18.998, tablePos: { x: 16, y: 1 } },
    { name: "neon", symbol: "ne", atomicNumber: 10, state: "gas", metal: "nonmetal", classList: ["noble gas"], atomicMass: 20.180, tablePos: { x: 17, y: 1 } },
    { name: "sodium", symbol: "na", atomicNumber: 11, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 22.990, tablePos: { x: 0, y: 2 } },
    { name: "magnesium", symbol: "mg", atomicNumber: 12, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 24.305, tablePos: { x: 1, y: 2 } },
    { name: "aluminum", symbol: "al", atomicNumber: 13, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 26.982, tablePos: { x: 12, y: 2 } },
    { name: "silicon", symbol: "si", atomicNumber: 14, state: "solid", metal: "metalloid", classList: [], atomicMass: 28.085, tablePos: { x: 13, y: 2 } },
    { name: "phosphorus", symbol: "p", atomicNumber: 15, state: "solid", metal: "nonmetal", classList: [], atomicMass: 30.974, tablePos: { x: 14, y: 2 } },
    { name: "sulfur", symbol: "s", atomicNumber: 16, state: "solid", metal: "nonmetal", classList: [], atomicMass: 32.060, tablePos: { x: 15, y: 2 } },
    { name: "chlorine", symbol: "cl", atomicNumber: 17, state: "gas", metal: "nonmetal", classList: ["halogen"], atomicMass: 35.450, tablePos: { x: 16, y: 2 } },
    { name: "argon", symbol: "ar", atomicNumber: 18, state: "gas", metal: "nonmetal", classList: ["noble gas"], atomicMass: 39.948, tablePos: { x: 17, y: 2 } },
    { name: "potassium", symbol: "k", atomicNumber: 19, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 39.098, tablePos: { x: 0, y: 3 } },
    { name: "calcium", symbol: "ca", atomicNumber: 20, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 40.078, tablePos: { x: 1, y: 3 } },
    { name: "scandium", symbol: "sc", atomicNumber: 21, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 44.956, tablePos: { x: 2, y: 3 } },
    { name: "titanium", symbol: "ti", atomicNumber: 22, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 47.867, tablePos: { x: 3, y: 3 } },
    { name: "vanadium", symbol: "v", atomicNumber: 23, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 50.942, tablePos: { x: 4, y: 3 } },
    { name: "chromium", symbol: "cr", atomicNumber: 24, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 51.996, tablePos: { x: 5, y: 3 } },
    { name: "manganese", symbol: "mn", atomicNumber: 25, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 54.938, tablePos: { x: 6, y: 3 } },
    { name: "iron", symbol: "fe", atomicNumber: 26, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 55.845, tablePos: { x: 7, y: 3 } },
    { name: "cobalt", symbol: "co", atomicNumber: 27, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 58.933, tablePos: { x: 8, y: 3 } },
    { name: "nickel", symbol: "ni", atomicNumber: 28, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 58.693, tablePos: { x: 9, y: 3 } },
    { name: "copper", symbol: "cu", atomicNumber: 29, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 63.546, tablePos: { x: 10, y: 3 } },
    { name: "zinc", symbol: "zn", atomicNumber: 30, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 65.380, tablePos: { x: 11, y: 3 } },
    { name: "gallium", symbol: "ga", atomicNumber: 31, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 69.723, tablePos: { x: 12, y: 3 } },
    { name: "germanium", symbol: "ge", atomicNumber: 32, state: "solid", metal: "metalloid", classList: [], atomicMass: 72.631, tablePos: { x: 13, y: 3 } },
    { name: "arsenic", symbol: "as", atomicNumber: 33, state: "solid", metal: "metalloid", classList: [], atomicMass: 74.922, tablePos: { x: 14, y: 3 } },
    { name: "selenium", symbol: "se", atomicNumber: 34, state: "solid", metal: "nonmetal", classList: [], atomicMass: 78.971, tablePos: { x: 15, y: 3 } },
    { name: "bromine", symbol: "br", atomicNumber: 35, state: "liquid", metal: "nonmetal", classList: ["halogen"], atomicMass: 79.904, tablePos: { x: 16, y: 3 } },
    { name: "krypton", symbol: "kr", atomicNumber: 36, state: "gas", metal: "nonmetal", classList: ["noble gas"], atomicMass: 83.798, tablePos: { x: 17, y: 3 } },
    { name: "rubidium", symbol: "rb", atomicNumber: 37, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 85.468, tablePos: { x: 0, y: 4 } },
    { name: "strontium", symbol: "sr", atomicNumber: 38, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 87.620, tablePos: { x: 1, y: 4 } },
    { name: "yttrium", symbol: "y", atomicNumber: 39, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 88.906, tablePos: { x: 2, y: 4 } },
    { name: "zirconium", symbol: "zr", atomicNumber: 40, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 91.224, tablePos: { x: 3, y: 4 } },
    { name: "niobium", symbol: "nb", atomicNumber: 41, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 92.906, tablePos: { x: 4, y: 4 } },
    { name: "molybdenum", symbol: "mo", atomicNumber: 42, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 95.95, tablePos: { x: 5, y: 4 } },
    { name: "technetium", symbol: "tc", atomicNumber: 43, state: "solid", metal: "metal", classList: ["transition metal", "radioactive"], atomicMass: 98.907, tablePos: { x: 6, y: 4 } },
    { name: "ruthenium", symbol: "ru", atomicNumber: 44, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 101.070, tablePos: { x: 7, y: 4 } },
    { name: "rhodium", symbol: "rh", atomicNumber: 45, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 102.906, tablePos: { x: 8, y: 4 } },
    { name: "palladium", symbol: "47", atomicNumber: 46, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 106.420, tablePos: { x: 9, y: 4 } },
    { name: "silver", symbol: "ag", atomicNumber: 47, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 107.868, tablePos: { x: 10, y: 4 } },
    { name: "cadmium", symbol: "cd", atomicNumber: 48, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 112.414, tablePos: { x: 11, y: 4 } },
    { name: "indium", symbol: "in", atomicNumber: 49, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 114.818, tablePos: { x: 12, y: 4 } },
    { name: "tin", symbol: "sn", atomicNumber: 50, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 118.711, tablePos: { x: 13, y: 4 } },
    { name: "antimony", symbol: "sb", atomicNumber: 51, state: "solid", metal: "metalloid", classList: [], atomicMass: 121.760, tablePos: { x: 14, y: 4 } },
    { name: "tellurium", symbol: "te", atomicNumber: 52, state: "solid", metal: "metalloid", classList: [], atomicMass: 127.600, tablePos: { x: 15, y: 4 } },
    { name: "iodine", symbol: "i", atomicNumber: 53, state: "solid", metal: "nonmetal", classList: ["halogen"], atomicMass: 126.904, tablePos: { x: 16, y: 4 } },
    { name: "xenon", symbol: "xe", atomicNumber: 54, state: "gas", metal: "nonmetal", classList: ["noble gas"], atomicMass: 131.293, tablePos: { x: 17, y: 4 } },
    { name: "cesium", symbol: "cs", atomicNumber: 55, state: "solid", metal: "metal", classList: ["alkali"], atomicMass: 132.905, tablePos: { x: 0, y: 5 } },
    { name: "barium", symbol: "ba", atomicNumber: 56, state: "solid", metal: "metal", classList: ["alkaline"], atomicMass: 137.328, tablePos: { x: 1, y: 5 } },
    { name: "lanthanum", symbol: "la", atomicNumber: 57, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 138.905, tablePos: { x: 2, y: 8 } },
    { name: "cerium", symbol: "ce", atomicNumber: 58, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 140.116, tablePos: { x: 3, y: 8 } },
    { name: "praseodymium", symbol: "pr", atomicNumber: 59, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 140.908, tablePos: { x: 4, y: 8 } },
    { name: "neodymium", symbol: "nd", atomicNumber: 60, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 144.243, tablePos: { x: 5, y: 8 } },
    { name: "promethium", symbol: "pm", atomicNumber: 61, state: "solid", metal: "metal", classList: ["lanthanide", "radioactive"], atomicMass: 144.913, tablePos: { x: 6, y: 8 } },
    { name: "samarium", symbol: "sm", atomicNumber: 62, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 150.360, tablePos: { x: 7, y: 8 } },
    { name: "europium", symbol: "eu", atomicNumber: 63, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 151.964, tablePos: { x: 8, y: 8 } },
    { name: "gadolinium", symbol: "gd", atomicNumber: 64, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 157.250, tablePos: { x: 9, y: 8 } },
    { name: "terbium", symbol: "tb", atomicNumber: 65, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 158.925, tablePos: { x: 10, y: 8 } },
    { name: "dysprosium", symbol: "dy", atomicNumber: 66, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 162.500, tablePos: { x: 11, y: 8 } },
    { name: "holmium", symbol: "ho", atomicNumber: 67, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 164.930, tablePos: { x: 12, y: 8 } },
    { name: "erbium", symbol: "er", atomicNumber: 68, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 167.259, tablePos: { x: 13, y: 8 } },
    { name: "thulium", symbol: "tm", atomicNumber: 69, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 168.934, tablePos: { x: 14, y: 8 } },
    { name: "ytterbium", symbol: "yb", atomicNumber: 70, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 173.055, tablePos: { x: 15, y: 8 } },
    { name: "lutetium", symbol: "lu", atomicNumber: 71, state: "solid", metal: "metal", classList: ["lanthanide"], atomicMass: 174.967, tablePos: { x: 16, y: 8 } },
    { name: "hafnium", symbol: "hf", atomicNumber: 72, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 178.490, tablePos: { x: 3, y: 5 } },
    { name: "tantalum", symbol: "ta", atomicNumber: 73, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 180.948, tablePos: { x: 4, y: 5 } },
    { name: "tungsten", symbol: "w", atomicNumber: 74, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 183.840, tablePos: { x: 5, y: 5 } },
    { name: "rhenium", symbol: "re", atomicNumber: 75, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 186.207, tablePos: { x: 6, y: 5 } },
    { name: "osmium", symbol: "os", atomicNumber: 76, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 190.230, tablePos: { x: 7, y: 5 } },
    { name: "iridium", symbol: "ir", atomicNumber: 77, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 192.217, tablePos: { x: 8, y: 5 } },
    { name: "platinum", symbol: "pt", atomicNumber: 78, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 195.085, tablePos: { x: 9, y: 5 } },
    { name: "gold", symbol: "au", atomicNumber: 79, state: "solid", metal: "metal", classList: ["transition metal"], atomicMass: 196.967, tablePos: { x: 10, y: 5 } },
    { name: "mercury", symbol: "hg", atomicNumber: 80, state: "liquid", metal: "metal", classList: ["transition metal"], atomicMass: 200.592, tablePos: { x: 11, y: 5 } },
    { name: "thallium", symbol: "tl", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal"], atomicMass: 204.383, tablePos: { x: 12, y: 5 } },
    { name: "lead", symbol: "pb", atomicNumber: 0, state: "solid", metal: "metal", classList: ["inner transition metal", "radioactive"], atomicMass: 207.200, tablePos: { x: 13, y: 5 } },
    { name: "bismuth", symbol: "bi", atomicNumber: 83, state: "solid", metal: "metal", classList: ["inner transition metal", "radioactive"], atomicMass: 208.980, tablePos: { x: 14, y: 5 } },
    { name: "polonium", symbol: "po", atomicNumber: 84, state: "solid", metal: "metalloid", classList: ["radioactive"], atomicMass: "[208.982]", tablePos: { x: 15, y: 5 } },
    { name: "astatine", symbol: "at", atomicNumber: 85, state: "solid", metal: "metalloid", classList: ["halogen", "radioactive"], atomicMass: 209.987, tablePos: { x: 16, y: 5 } },
    { name: "radon", symbol: "rn", atomicNumber: 86, state: "gas", metal: "nonmetal", classList: ["noble gas", "radioactive"], atomicMass: 222.018, tablePos: { x: 17, y: 5 } },
    { name: "francium", symbol: "fr", atomicNumber: 87, state: "solid", metal: "metal", classList: ["alkali", "radioactive"], atomicMass: 223.020, tablePos: { x: 0, y: 6 } },
    { name: "radium", symbol: "ra", atomicNumber: 88, state: "solid", metal: "metal", classList: ["alkaline", "radioactive"], atomicMass: 226.025, tablePos: { x: 1, y: 6 } },
    { name: "actinium", symbol: "ac", atomicNumber: 89, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 227.028, tablePos: { x: 2, y: 9 } },
    { name: "thorium", symbol: "th", atomicNumber: 90, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 232.038, tablePos: { x: 3, y: 9 } },
    { name: "protactinium", symbol: "pa", atomicNumber: 91, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 231.036, tablePos: { x: 4, y: 9 } },
    { name: "uranium", symbol: "u", atomicNumber: 92, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 238.029, tablePos: { x: 5, y: 9 } },
    { name: "neptunium", symbol: "np", atomicNumber: 93, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 237.048, tablePos: { x: 6, y: 9 } },
    { name: "plutonium", symbol: "pu", atomicNumber: 94, state: "solid", metal: "metal", classList: ["actinide", "radioactive"], atomicMass: 244.064, tablePos: { x: 7, y: 9 } },
    { name: "americium", symbol: "am", atomicNumber: 95, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: 243.061, tablePos: { x: 8, y: 9 } },
    { name: "curium", symbol: "cm", atomicNumber: 96, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: 247.070, tablePos: { x: 9, y: 9 } },
    { name: "berkelium", symbol: "bk", atomicNumber: 97, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: 247.070, tablePos: { x: 10, y: 9 } },
    { name: "californium", symbol: "cf", atomicNumber: 98, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: 251.080, tablePos: { x: 11, y: 9 } },
    { name: "einsteinium", symbol: "es", atomicNumber: 99, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: "[254]", tablePos: { x: 12, y: 9 } },
    { name: "fermium", symbol: "fm", atomicNumber: 100, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: 257.095, tablePos: { x: 13, y: 9 } },
    { name: "mendelevium", symbol: "md", atomicNumber: 101, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: 258.100, tablePos: { x: 14, y: 9 } },
    { name: "nobelium", symbol: "no", atomicNumber: 102, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: 259.101, tablePos: { x: 15, y: 9 } },
    { name: "lawrencium", symbol: "lr", atomicNumber: 103, state: "solid", metal: "metal", classList: ["actinide", "synthetic", "radioactive"], atomicMass: "[262]", tablePos: { x: 16, y: 9 } },
    { name: "rutherfordium", symbol: "rf", atomicNumber: 104, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "[261]", tablePos: { x: 3, y: 6 } },
    { name: "dubnium", symbol: "db", atomicNumber: 105, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "262", tablePos: { x: 4, y: 6 } },
    { name: "seaborgium", symbol: "sg", atomicNumber: 106, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "[266]", tablePos: { x: 5, y: 6 } },
    { name: "bohrium", symbol: "bh", atomicNumber: 107, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "[264]", tablePos: { x: 6, y: 6 } },
    { name: "hassium", symbol: "hs", atomicNumber: 108, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "[269]", tablePos: { x: 7, y: 6 } },
    { name: "meitnerium", symbol: "mt", atomicNumber: 109, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "[278]", tablePos: { x: 8, y: 6 } },
    { name: "darmstadtium", symbol: "ds", atomicNumber: 110, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "[281]", tablePos: { x: 9, y: 6 } },
    { name: "roentgenium", symbol: "rg", atomicNumber: 111, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "[280]", tablePos: { x: 10, y: 6 } },
    { name: "copernicium", symbol: "cn", atomicNumber: 112, state: "solid", metal: "metal", classList: ["transition metal", "synthetic", "radioactive"], atomicMass: "[285]", tablePos: { x: 11, y: 6 } },
    { name: "nihonium", symbol: "nh", atomicNumber: 113, state: "solid", metal: "metal", classList: ["inner transition metal", "synthetic", "radioactive"], atomicMass: "[286]", tablePos: { x: 12, y: 6 } },
    { name: "flerovium", symbol: "fl", atomicNumber: 114, state: "solid", metal: "metal", classList: ["inner transition metal", "synthetic", "radioactive"], atomicMass: "[289]", tablePos: { x: 13, y: 6 } },
    { name: "moscovium", symbol: "mc", atomicNumber: 115, state: "solid", metal: "metal", classList: ["inner transition metal", "synthetic", "radioactive"], atomicMass: "[289]", tablePos: { x: 14, y: 6 } },
    { name: "livermorium", symbol: "lv", atomicNumber: 116, state: "solid", metal: "metal", classList: ["inner transition metal", "synthetic", "radioactive"], atomicMass: "[293]", tablePos: { x: 15, y: 6 } },
    { name: "tennessine", symbol: "ts", atomicNumber: 117, state: "solid", metal: "metalloid", classList: ["halogen", "synthetic", "radioactive"], atomicMass: "[294]", tablePos: { x: 16, y: 6 } },
    { name: "oganesson", symbol: "og", atomicNumber: 118, state: "gas", metal: "nonmetal", classList: ["noble gas", "synthetic", "radioactive"], atomicMass: "[294]", tablePos: { x: 17, y: 6 } },
]

const questionKeywords = []
const guessedKeywords = []
const typeGroupings = {
    chemicalGroups: ["noble gas", "alkaline", "alkali", "halogen", "transition metal", "inner transition metal", "lanthanide", "actinide"],
    states: ["gas", "solid", "liquid"],
    metals: ["nonmetal", "metalloid", "metal"],
    elements: [],
    chemTypes: ["synthetic", "radioactive"]
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

let score = 0;

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

function greyElement(element) {
    document.getElementById(element).style.backgroundColor = "#808080"
}

function hintElements(cl) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.includes(cl) || elements[i].state == cl || elements[i].metal == cl) {
            greyElement(elements[i].name)
        }
    }
}

function oppElements(cl) {
    for (let i = 0; i < elements.length; i++) {
        if (!(elements[i].classList.includes(cl)) && elements[i].state != cl && elements[i].metal != cl) {
            greyElement(elements[i].name)
        }
    }
}

//RULING: 0: >; 1: <; 2: >=; 3: <=; 4: ==;

function findAndGreyNumberElements(attribute, num, ruling) {
    for (let i = 0; i < elements.length; i++) {
        if (ruling == 0 && parseInt(elements[i][attribute]) > num) {
            greyElement(elements[i].name)
        }
        if (ruling == 1 && parseInt(elements[i][attribute]) < num) {
            greyElement(elements[i].name)
        }
        if (ruling == 4 && parseInt(elements[i][attribute]) == num) {
            greyElement(elements[i].name)
        }
    }
}

function findAndGreySymbols(symbol, opp) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].symbol.charAt(0) == symbol) {
            if (opp == false) {
                greyElement(elements[i].name)
            }
        } else {
            if (opp == true) {
                greyElement(elements[i].name)
            }
        }
    }
}

function run() {
    let element = elements[Math.floor(Math.random() * (elements.length))]

    let debugInit = false
    let bigHintInit = false

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
            greyElement(keyword)
        }

        if (element.state == keyword) {
            addHint("The secret element is a " + keyword + "!")
            oppElements(keyword)
        } else if (typeGroupings.states.includes(keyword) == true) {
            addHint("The secret element is not a " + keyword + ".")
            hintElements(keyword)
        }

        if (element.classList.includes(keyword) && !(typeGroupings.chemTypes.includes(keyword))) {
            addHint("The secret element is part of the '" + capName(keyword) + "' chemical group!")
            oppElements(keyword)
        } else if (typeGroupings.chemicalGroups.includes(keyword)) {
            addHint("The secret element is not part of the '" + capName(keyword) + "' chemical group.")
            hintElements(keyword)
        }

        if (element.metal == keyword) {
            addHint("The secret element if of the '" + capName(keyword) + "' metal type!")
            oppElements(keyword)
        } else if (typeGroupings.metals.includes(keyword)) {
            addHint("The secret element is not of the '" + capName(keyword) + "' metal type.")
            hintElements(keyword)
        }

        if (element.classList.includes(keyword) && typeGroupings.chemTypes.includes(keyword)) {
            addHint("The secret element is " + capName(keyword) + "!")
            oppElements(keyword)
        } else if (typeGroupings.chemTypes.includes(keyword)) {
            addHint("The secret element is not " + capName(keyword) + ".")
            hintElements(keyword)
        }
    }

    function inputEntered() {
        let input = document.getElementById("questionInput").value

        let matches = []
        let matched = false

        if (input == "!@#DEBUGGING#@!") {
            debugInit = true
            matched = true
        } else {
            if (input == "```" && debugInit == true) {
                matched = true

                let msg = "Welcome Adventurer. We have awaited your presence. Please wait as we get your X-Files..."
                document.getElementById("bannerMsg").innerText = msg + " (0)"

                window.setTimeout(function () {
                    document.getElementById("bannerMsg").innerText = msg + " (1)"
                    window.setTimeout(function () {
                        document.getElementById("bannerMsg").innerText = msg + " (2)"
                        window.setTimeout(function () {
                            document.getElementById("bannerMsg").innerText = msg + " (3)"
                            window.setTimeout(function () {
                                document.getElementById("bannerMsg").innerText = msg + " (4)"
                                window.setTimeout(function () {
                                    document.getElementById("bannerMsg").innerText = msg + " (5)"
                                    window.setTimeout(function () {
                                        document.getElementById("bannerMsg").innerText = "X-Files[Elementalite] { name: 'Elementalite', file: '{ name: '" + element.name + "', symbol: '" + element.symbol + "', atomicNumber: " + element.atomicNumber + ", state: '" + element.state + "', metal: '" + element.state + "', classList: " + element.state + ", atomicMass: " + element.atomicMass + " }' }"
                                    }, 500)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            } else {
                input = formatInput(input)
                debugInit = false

                document.getElementById("bannerMsg").innerText = ""

                input = input.replaceAll("lanthanoid", "lanthanide")
                input = input.replaceAll("actinoid", "actinide")
                input = input.replaceAll("non-metal", "nonmetal")
                input = input.replaceAll("non metal", "nonmetal")

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

                if (input.includes("atomic mass") == true) {
                    if (input.includes("greater than") == true || input.includes(">")) {
                        let num = parseInt(input.split("greater than")[1])
                        if (guessedKeywords.includes("mass-" + num) == false) {
                            if (parseInt(element.atomicMass) > num) {
                                addHint("The secret element's atomic mass is greater than " + num + "!")
                                findAndGreyNumberElements("atomicMass", num, 1)
                            } else if (parseInt(element.atomicMass) < num) {
                                addHint("The secret element's atomic mass is less than " + num + ".")
                                findAndGreyNumberElements("atomicMass", num, 0)
                            }
                            guessedKeywords.push("mass-" + num)
                            matched = true
                        }
                    } else if (input.includes("less than") == true || input.includes("<")) {
                        let num = parseInt(input.split("less than")[1])
                        if (guessedKeywords.includes("mass-" + num) == false) {
                            if (parseInt(element.atomicMass) < num) {
                                addHint("The secret element's atomic mass is less than " + num + "!")
                                findAndGreyNumberElements(atomicMass, num, 0)
                            } else if (parseInt(element.atomicMass) > num) {
                                addHint("The secret element's atomic mass is greater than " + num + ".")
                                findAndGreyNumberElements(atomicMass, num, 1)
                            }
                            guessedKeywords.push("mass-" + num)
                            matched = true
                        }
                    }
                }

                if (input.includes("symbol") == true && input.includes("start") == true && input.includes("with") == true) {
                    let string = input.split("with")[1]
                    let letter = string.charAt(0)

                    for (let i = 0; i < string.length; i++) {
                        letter = string.charAt(i)
                        if (letter && letter.match(/[a-z]/g)) {
                            break
                        }
                    }

                    if (element.symbol.charAt(0) == letter) {
                        addHint("The secret element's symbol starts with " + capName(letter) + "!")
                        findAndGreySymbols(letter, true)
                    } else {
                        addHint("The secret element's symbol does not start with " + capName(letter) + ".")
                        findAndGreySymbols(letter, false)
                    }

                    matched = true
                }

                if (input.includes("big hint") == true) {
                    document.getElementById("bannerMsg").innerText = "Rats. You've trapped us. We will give you a huge hint if you brighten our day with a fun fact. Whaddya say?"
                    bigHintInit = true
                    matched = true
                } else {
                    if (input.includes("did you know") == true && bigHintInit == true) {
                        document.getElementById("bannerMsg").innerText = "Interesting! The hint is the element start with " + capName(element.name.charAt(0) + element.name.charAt(1))
                        matched = true
                    } else {
                        bigHintInit = false
                    }
                }

                if (input.includes("owen") == true && input.includes("best") == true) {
                    document.getElementById("bannerMsg").innerText = "Why thank you! *bows*"
                    matched = true
                    window.setTimeout(function () { document.getElementById("bannerMsg").innerText = "" }, 3000)
                }

                if (input.includes("sofia the first") == true || input.includes("ooga booga") == true || input.includes("roblox") == true) {
                    document.getElementById("bannerMsg").innerText = "Hey! Thats my favorite!"
                    matched = true
                }

                if (input.includes("open the chamber of secrets") == true) {
                    document.getElementById("bannerMsg").innerText = "If you say so... {HeFN-OFSiCa;PVBSi-CaOB-HeBKCa;PHeMgPCr;F-NFTiB-ScS}"
                    matched = true
                }

                if (input.includes("i give up") == true) {
                    document.getElementById("bannerMsg").innerText = "Aww! Don't give up! You can do it! By the way the element was " + capName(element.name) + ".";
                    document.getElementById("questionInput").disabled = true;
                    document.getElementById("enterBtn").disabled = true;
                    matched = true
                }
            }
        }

        document.getElementById("questionInput").value = "";

        if (matched == false) {
            document.getElementById("bannerMsg").innerText = "Invalid phrase."
        }
    }

    window.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            inputEntered();
        }
    })

    document.getElementById("enterBtn").addEventListener("click", inputEntered);
}

/* let table = [[]]
let tablePos = {x: 0, y: 0}
let newLines = [1, 3, 11, 19, 37, 55, 87]
let leftEnds = [2, 5, 13] */

function hashName(name) {
    return name.replaceAll(" ", "-");
}

const majorClasses = ["alkaline", "alkali", "inner transition metal", "transition metal", "halogen", "noble gas", "lanthanide", "actinide"]

for (let i = 0; i < elements.length; i++) {
    let e = elements[i]
    /*     elements[i].atomicNumber = i + 1 */

    let th = document.createElement("th")
    let symbol = document.createElement("p")
    let name = document.createElement("p")
    let atomicMass = document.createElement("p")
    let atomicNumber = document.createElement("p")
    let topBar = document.createElement("div")

    let hasMajorClass = false

    for (let j = 0; j < e.classList.length; j++) {
        if (majorClasses.includes(e.classList[j])) {
            hasMajorClass = true;
            th.classList.add(hashName(e.classList[0]))
        } else {
            th.classList.add("-" + hashName(e.classList[0]))
            /* topBar.append() */
        }
    }

    if (hasMajorClass == false) {
        th.classList.add(e.metal)
    }

    th.id = e.name
    th.classList.add("-" + hashName(e.state))
    th.classList.add("-" + hashName(e.metal))

    let svgHolder = document.createElement("div")
    let svg1 = document.createElement("svg")
    let svg2 = document.createElement("svg")
    let svg3 = document.createElement("svg")
    svgHolder.append(svg1)
    svgHolder.append(svg2)
    svgHolder.append(svg3)

    if (e.state == "gas") {
        svg1.outerHTML = '<svg width="5" height="5" class="elementMarker"><circle cx="2.5" cy="2.5" r="2.5" class="gasMarker"/></svg>';
    } else if (e.state == 'liquid') {
        svg1.outerHTML = '<svg width="5" height="5" class="elementMarker"><circle cx="2.5" cy="2.5" r="2.5" class="liquidMarker"/></svg>';
    } else if (e.state == 'solid') {
        svg1.outerHTML = '<svg width="5" height="5" class="elementMarker"><circle cx="2.5" cy="2.5" r="2.5" class="solidMarker"/></svg>';
    }

    if (e.classList.includes("synthetic")) {
        svg2.outerHTML = '<svg width="5" height="5" class="elementMarker"><circle cx="2.5" cy="2.5" r="2.5" class="syntheticMarker"/></svg>';
    }

    if (e.classList.includes("radioactive")) {
        svg3.outerHTML = '<svg width="5" height="5" class="elementMarker"><circle cx="2.5" cy="2.5" r="2.5" class="radioactiveMarker"/></svg>';
    }

    symbol.innerText = capName(e.symbol)
    symbol.classList.add("elementSymbol")

    name.innerText = capName(e.name)
    name.classList.add("elementName")

    if (typeof e.atomicMass == "string") {
        atomicMass.innerText = e.atomicMass
    } else {
        atomicMass.innerText = e.atomicMass.toFixed(3)
    }
    atomicMass.classList.add("elementAtomicMass")

    atomicNumber.innerText = e.atomicNumber
    atomicNumber.classList.add("elementAtomicNumber")

    topBar.classList.add("elementTopBar")

    topBar.append(svgHolder)
    topBar.prepend(atomicNumber)

    th.append(topBar)
    th.append(symbol)
    th.append(name)
    th.append(atomicMass)

    function createLine() {
        if (document.getElementById("periodicTableTable").getElementsByTagName("tr").length < e.tablePos.y + 1) {
            document.getElementById("periodicTableTable").append(document.createElement("tr"))
            for (let j = 0; j < 18; j++) {
                let elems = document.getElementById("periodicTableTable").getElementsByTagName("tr")
                document.getElementById("periodicTableTable").getElementsByTagName("tr")[elems.length - 1].append(document.createElement("th"))
            }
            createLine()
        }
    }

    createLine()

    document.getElementById("periodicTableTable").getElementsByTagName("tr")[e.tablePos.y].getElementsByTagName("th")[e.tablePos.x].replaceWith(th)
}

run()

// let switches = document.getElementsByClassName("toggleSwitch")

// for (let i = 0; i < switches.length; i++) {
//     switches[0].addEventListener("click", function () {
//         console.log("click")
//         if (this.classList.contains("active")) {
//             this.classList.remove("active");
//             this.querySelector("input[type=checkbox]").checked = false;
//         } else {
//             this.classList.add("active");
//             this.querySelector("input[type=checkbox]").checked = true;
//         }
//     })
// }