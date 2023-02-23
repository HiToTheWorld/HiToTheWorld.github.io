const audioCtx = new(window.AudioContext || window.webkitAudioContext)();

let octave = 1

const notes =  {
  "a": "A", //A
  "w": "A# or Bb", //A# Bb
  "s": "B", //B
  "d": "C", //C
  "r": "C# or Db", //C# Db
  "f": "D", //D
  "t": "D# or Eb", //D# Eb
  "g": "E", //E
  "h": "F", //F
  "u": "F# or Gb", //F# Gb
  "j": "G", //G
  "i": "G# or Ab", //G# Ab
  "k": "A", //A
  "o": "A# or Bb", //A# Bb
  "l": "B", //B
  ";": "C", //C
  "[": "C# or Db", //C# Db
  "'": "D", //D
  "]": "D# or Eb", //D# Eb
  "Enter": "E",
  "=": "High",
  "-": "Taser",
}

const keymap = {
  "a": 220, //A
  "w": 233.08, //A# Bb
  "s": 246.94, //B
  "d": 261.63, //C
  "r": 277.18, //C# Db
  "f": 293.665, //D
  "t": 311.13, //D# Eb
  "g": 329.628, //E
  "h": 349.228, //F
  "u": 369.99, //F# Gb
  "j": 391.995, //G
  "i": 415.30, //G# Ab
  "k": 440, //A
  "o": 466.16, //A# Bb
  "l": 493.883, //B
  ";": 523.25, //C
  "[": 554.37, //C# Db
  "'": 587.33, //D
  "]": 622.25, //D# Eb
  "Enter": 659.25,
  "=": 17500,
  "-": 25,
}

let osc = {}

window.addEventListener("keydown", function(e) {
  if (e.key == "1") {
  	octave = 0.5
    document.getElementById("octave").innerText = octave
  }
	if (e.key == "2") {
  	octave = 1
    document.getElementById("octave").innerText = octave
  }
  if (e.key == "3") {
  	octave = 2
    document.getElementById("octave").innerText = octave
  }
  if (e.key == "4") {
  	octave = 4
    document.getElementById("octave").innerText = octave
  }
  if (e.key == "5") {
  	octave = 8
    document.getElementById("octave").innerText = octave
  }
  
  if (keymap[e.key] && !osc[e.key]) {
    let o = audioCtx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(keymap[e.key] * octave, audioCtx.currentTime);
    o.connect(audioCtx.destination);
    o.start();
    osc[e.key] = o;
    
    let thing = document.createElement("p")
    thing.id = e.key
    thing.innerText = notes[e.key]
    document.getElementById("notes").append(thing)
  }
})

window.addEventListener("keyup", function(e) {
  if (osc[e.key]) {
    osc[e.key].stop();
    osc[e.key].disconnect();
    osc[e.key] = null;
    
    document.getElementById(e.key).remove()
  }
})
