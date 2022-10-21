function start() {
    let answer = document.getElementById("patternInput").value;
    document.getElementById("patternData").innerText = answer
    let patterns = []
    if (answer != '' && answer != null && !(answer.match("☒"))) {
      let firstPattern

      let lastArtAnswer = answer

      let nextInstance

      for (let i = 1; i < 100; i++) {
        let thing = answer.match(new RegExp('.{1,' + i + '}', 'g'));
        if (thing.length == 1 || thing.length == 0) {
          break
        }

        let base = thing[0]
        let isPattern = true
        for (let j = 1; j < thing.length - 1; j++) {
          if (thing[j] != base) {
            isPattern = false
          }
        }
        let last = thing[thing.length - 1]
        if (!(base.startsWith(last))) {
          isPattern = false
        }

        if (isPattern == true) {
          if (!(firstPattern)) {
            firstPattern = base
          }

          if (base.charAt(0) == answer.charAt(answer.length - 1)) {
            nextInstance = base.substring(1, base.length) + base.charAt(0)
          }
          patterns.push(base)
        }
      }

      if (firstPattern) {
        if (answer.length % firstPattern.length != 0) {
          for (let i = 1; i < answer.length % firstPattern.length; i++) {
            lastArtAnswer += "☒"
          }
        }
        // console.log(lastArtAnswer)

        for (let rotate = 1; rotate < firstPattern.length; rotate++) {
          let artificialAnswer = lastArtAnswer.substring(1, lastArtAnswer.length) + lastArtAnswer.charAt(0)

          lastArtAnswer = artificialAnswer

          // console.log(artificialAnswer)
          let thing = artificialAnswer.match(new RegExp('.{1,' + firstPattern.length + '}', 'g'));
          if (thing.length == 1 || thing.length == 0) {
            break
          }

          let base = thing[0]
          let isPattern = true
          for (let j = 1; j < thing.length - 1; j++) {
            for (let k = 0; k < thing[j].length; k++) {
              if (thing[j].charAt(k) != base.charAt(k) && thing[j].charAt(k) != "☒") {
                isPattern = false
                console.log("false: " + thing[j] + " " + thing[k].charAt(k))
              }
            }
          }
          // let last = thing[thing.length - 1]
          // if (!(base.startsWith(last))) {
          //   isPattern = false
          // }

          if (isPattern == true) {
            if (!(firstPattern)) {
              firstPattern = base
            }

            if (base.charAt(0) == answer.charAt(answer.length - 1)) {
              nextInstance = base.substring(1, base.length) + base.charAt(0)
            }
            patterns.push(base)
          }
        }
      }

      if (patterns.length == 0) {
        patterns = "none"
        firstPattern = null
        nextInstance = null
      }

      document.getElementById("patternsInData").innerText = patterns
      document.getElementById("firstPattern").innerText = firstPattern
      document.getElementById("nextPattern").innerText = nextInstance

    } else {
        document.getElementById("patternsInData").innerText = "none";
        document.getElementById("firstPattern").innerText = null;
        document.getElementById("nextPattern").innerText = null;
        document.getElementById("patternErrors").innerText = "AI could not proccess the input. Error code: 001";
    }
}

document.getElementById("btnSubmit").addEventListener("click", start)
window.addEventListener("keydown", function (e) { if (e.key == "Enter") { start() } })