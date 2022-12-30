let imageInput = document.getElementById("imageInput")
let imageDisplay = document.getElementById("imageDisplay")
let file = imageInput.value;

let buildStopped = false

let globalX = 900, globalY = 900

imageInput.addEventListener("change", function() {
  file = URL.createObjectURL(imageInput.files[0]);
  imageDisplay.src = file
})



let x = 1
let y = 1

let bgcolor = "white"
let textcolor = "black"

function bgswitch() {
  if (bgcolor == "white") {
    bgcolor = "#212121"
    textcolor = "white"
  } else {
    bgcolor = "white"
    textcolor = "black"
  }
  document.body.style.backgroundColor = bgcolor
  document.body.style.color = textcolor
}

function log(msg) {
  let vconsole = document.getElementById("out")
  let msgText = document.createElement("pre")
  msgText.innerText = msg
  vconsole.append(msgText)
  console.log(msg)
}

function clear() {
  let vconsole = document.getElementById("out")
  while (vconsole.firstChild)
    vconsole.removeChild(vconsole.firstChild)
  console.clear()
}

let prog = 0

function inProg(num) {
  prog += num
  document.getElementById("borderProgress").value = prog
}

function onSub() {
  document.getElementById("stopBuild").disabled = false
  document.getElementById("clearBuild").disabled = false
  document.getElementById("imageInput").disabled = true
  document.getElementById("borderWidth").disabled = true
  document.getElementById("borderColor").disabled = true
  document.getElementById("imageRes").disabled = true
  document.getElementById("imageResLabel").disabled = true
  document.getElementById("start").disabled = true
  clear()

  globalX, globalY = document.getElementById("imageRes").value

  let image = new Image(globalX, globalY)
  image.src = file
  let canvas = document.createElement("canvas")
  let ctx = canvas.getContext('2d')

  canvas.width = globalX
  canvas.height = globalY
  ctx.drawImage(image, 0, 0, globalX, globalY);

  let outcanvas = document.getElementById("outCanvas")
  let outctx = outcanvas.getContext('2d')

  outcanvas.width = globalX
  outcanvas.height = globalY

  outctx.fillStyle = document.getElementById("borderColor").value;
  outctx.strokeStyle = document.getElementById("borderColor").value;
  let borderwidth = document.getElementById("borderWidth").value;

  if (document.getElementById("showImageOnOut").checked == true) {
    outctx.drawImage(image, 0, 0, globalX, globalY);
  }

  function getAllData() {
    let data = ctx.getImageData(0, 0, globalX, globalY).data
    return data
  }

  let data = Array.from(getAllData())

  document.getElementById("borderProgress").max = data.length / 4

  let isNewLinePx = true
  let lastpx = null

  let line = 0

  let cLine = []
  let lastLine = null

  function newLin() {
    isNewLinePx = true
    let pixel = 1
    lastLine = cLine
    cLine = []

    function newPix() {
      let px = data.splice(0, 4)
      let pxloc = pixel - 1
      if (lastpx != null && lastLine.length != 0) {
        if (lastpx[3] != 0 && px[3] == 0) {
          outctx.fillRect(pxloc - (borderwidth / 2), line - (borderwidth / 2), 1 + (borderwidth / 2), 1 + (borderwidth / 2))
        } else if (lastpx[3] == 0 && px[3] != 0) {
          if (isNewLinePx == false) {
            outctx.fillRect(pxloc - 1 - (borderwidth / 2), line - (borderwidth / 2), 1 + (borderwidth / 2), 1 + (borderwidth / 2))
          }
        } else if (lastLine[pxloc][3] != 0 && px[3] == 0) {
          outctx.fillRect(pxloc - (borderwidth / 2), line - (borderwidth / 2), 1 + (borderwidth / 2), 1 + (borderwidth / 2))
        } else if (lastLine[pxloc][3] == 0 && px[3] != 0) {
          outctx.fillRect(pxloc - (borderwidth / 2), line - 1 - (borderwidth / 2), 1 + (borderwidth / 2), 1 + (borderwidth / 2))
        }
      }

      lastpx = px
      isNewLinePx = false

      cLine.push(px)

      pixel += 1
      inProg(1)

      if (pixel <= globalX && buildStopped == false) {
        window.setTimeout(newPix, 0.0001)
      } else {
      	line += 1
        if (line <= globalY && buildStopped == false) {
          window.setTimeout(newLin, 0.0001)
        } else {
          clear()
          log("Projection complete")
          document.getElementById("stopBuild").disabled = true
        }
      }
    }
    newPix()
  }

  // function sortLines() {
  //   lineData.push(pxData.splice(0, 4))
  //   if (pxData.length > 0) {
  //     inProg(1)
  //     window.setTimeout(sortLines, 0.000001)
  //   } else {
  //     log("All lines sorted")
  //     log("Starting Projection")
  //     onSort = false
  //     prog = 0
  //     newLin()
  //   }
  // }

  // function sortPixels() {
  //   pxData.push(data.splice(0, 4))
  //   if (data.length > 0) {
  //     inProg(1)
  //     window.setTimeout(sortPixels, 0.000001)
  //   } else {
  //     log("All pixels sorted.")
  //     sortLines()
  //   }
  // }

  log("Starting Projection")
  newLin()

  /*   while (data.length > 0)
    console.log(data.length)
    inProg(1)
  pxData.push(data.splice(0, 4)); */

  /*   while (pxData.length > 0)
      inProg(1)
    lineData.push(pxData.splice(0, globalX)); */
}
