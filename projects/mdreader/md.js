let mds = document.getElementsByClassName("md")

//runs through every MD element
for (let mden = 0; mden < mds.length; mden++) {
    let mde = mds[mden]
    let mdtext = mde.innerHTML.split("\n")
    let textHolder
    let addElem
    mde.innerHTML = ""
    let currentList = null

    //runs through every MD line
    for (let mdln = 0; mdln < mdtext.length; mdln++) {
        let mdl = mdtext[mdln].trim()
        let mdlcs = mdl.split("")
        let numofhashes = 0

        //TAGS
        //runs through every MD line character
        for (let mdlcn = 0; mdlcn < mdlcs.length; mdlcn++) {
            if (mdlcs[mdlcn] == "#") {
                numofhashes += 1
            } else {
                break
            }
        }

        mdl = mdl.substr(numofhashes, mdlcs.length)
        mdlcs = mdl.split("")

        if (numofhashes > 6) {
            numofhashes = 6
        }

        let line
        if (numofhashes > 0) {
            line = document.createElement("h" + numofhashes)
        } else {
            line = document.createElement("p")
        }
        textHolder = line
        addElem = line

        //LISTS
        let li = null
        //unordered
        if (mdlcs[0] == "-" && mdlcs[1] == " ") {
            li = document.createElement("li")
            textHolder = li
            if (currentList && currentList.tagName != "UL") {
                mde.append(currentList)
                currentList = null
            }
            if (!currentList || currentList.tagName != "UL") {
                currentList = document.createElement("ul")
                console.log(currentList.tagName)
            }
            currentList.append(li)
            mdl = mdl.substr(2, mdlcs.length)
            mdlcs = mdl.split("")
        } else if (!isNaN(mdlcs[0]) && mdlcs[1] == ".") {
            li = document.createElement("li")
            textHolder = li
            if (currentList && currentList.tagName != "OL") {
                mde.append(currentList)
                currentList = null
            }
            if (!currentList || currentList.tagName != "OL") {
                currentList = document.createElement("ol")
            }
            currentList.append(li)
            mdl = mdl.substr(3, mdlcs.length)
            mdlcs = mdl.split("")
        } else {
            if (currentList) {
                mde.append(currentList)
            }
            currentList = null
        }

        //ITALICS
        if (mdlcs[0] == "_" && mdlcs[mdlcs.length - 1] == "_") {
            let i = document.createElement("i")
            textHolder = i
            mdl = mdl.substr(1, mdlcs.length - 2)
            mdlcs = mdl.split("")
            if (li) {
                li.append(i)
            } else {
                line.append(i)
            }
        }

        textHolder.innerText = mdl;
        // console.log(mdl)
        if (addElem) {
            mde.append(addElem)
        }
    }
}