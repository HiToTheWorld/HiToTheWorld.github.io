let imageInput = document.getElementById("imageInput")
let imageDisplay = document.getElementById("imageDisplay")
let file = imageInput.value;

const globalX = 300
const globalY = 300

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
  clear()

  let image = new Image(globalX, globalY)
  image.src = file
  let canvas = document.createElement("canvas")
  let ctx = canvas.getContext('2d')
  ctx.drawImage(image, 0, 0, globalX, globalY);

  canvas.width = image.width
  canvas.height = image.height

  let outcanvas = document.getElementById("outCanvas")
  let outctx = outcanvas.getContext('2d')

  outctx.fillStyle = document.getElementById("borderColor").value;
  outctx.strokeStyle = document.getElementById("borderColor").value;

  function getAllData() {
    let data = ctx.getImageData(0, 0, globalX, globalY).data
    return data
  }

  let data = Array.from(getAllData())
  // let pxData = []
  // let lineData = []

  document.getElementById("borderProgress").max = globalX * globalY

  let isNewLinePx = true
  let lastpx = null

  let line = 0

  function newLin() {
    isNewLinePx = true
    let pixel = 0

    function newPix() {
      let px = data.splice(0, 4)
      if (lastpx != null) {
        console.log(lastpx)
        if (lastpx[3] != 0 && px[3] == 0) {
          outctx.fillRect(pixel, line, 1, 1)
        } else if (lastpx[3] == 0 && px[3] != 0) {
          if (isNewLinePx == false) {
            outctx.fillRect(pixel, line, 1, 1)
          }
        }
      }

      lastpx = px
      isNewLinePx = false

      pixel += 1
      inProg(1)
      if (pixel < globalX) {
        window.setTimeout(newPix, 0.0001)
      }
    }
    newPix()

    if (line < globalY) {
      window.setTimeout(newLin, 0.0001)
    } else {
      clear()
      log("Projection complete")
    }
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
