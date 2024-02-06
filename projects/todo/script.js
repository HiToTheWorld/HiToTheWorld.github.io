document.querySelector('#input-bar #enter').onclick = () => {
  create(document.querySelector('#input-bar input').value)
  document.querySelector('#input-bar input').value = ''
}

let data = {}

function create(name, date) {
  const div = document.createElement('div');
  const text = document.createElement('textarea');
  const options = document.createElement('div');
  const close = document.createElement('button');
  const time = document.createElement('input');

  div.className = "item"
  text.className = "text"
  options.className = "options"
  close.className = "closeBTN"
  time.className = "timeBTN"
  
  window.onresize = () => {
    text.style.height = "";
    text.style.height = text.scrollHeight + "px"
    console.log(text.scrollHeight)
  }

  time.type = "date"

  const key = Math.random() * Math.pow(10, 20).toString()

  data[key] = {
    name, date
  }

  div.id = key

  text.spellcheck = false
  text.style.resize = "none"
  text.oninput = () => {
    text.style.height = "";
    text.style.height = text.scrollHeight + "px"

    data[key].name = text.value
    document.cookie = 'data=' + JSON.stringify(data)
  }

  time.onchange = () => {
    if (Math.floor((Date.parse(time.value)) / 8.64e7) <= Math.floor((new Date()) / 8.64e7) + 1) {
      time.style.backgroundColor = "#ffaf90"
    } else {
      time.style.backgroundColor = "#eaeaea"
    }

    data[key].date = time.value
    document.cookie = 'data=' + JSON.stringify(data)

    for (let i = 0; i < document.querySelectorAll('.item').length; i++) {
      document.querySelectorAll('.item')[i].style.order = Math.floor((Date.parse(data[document.querySelectorAll('.item')[i].id].date)) / 8.64e7) - (Math.floor((new Date()) / 8.64e7) + 1)
    }
  }

  text.value = name;
  text.type = "text";
  close.innerText = "X";

  if (!date)
    document.cookie = 'data=' + JSON.stringify(data)

  close.onclick = () => {
    div.remove()

    delete data[key]
    document.cookie = 'data=' + JSON.stringify(data)
  }

  options.append(time, close)
  div.append(text, options)

  document.querySelector('#list').append(div)

  text.style.height = "";
  text.style.height = text.scrollHeight + "px"

  if (date) {
    time.value = date

    if (Math.floor((Date.parse(time.value)) / 8.64e7) <= Math.floor((new Date()) / 8.64e7) + 1) {
      time.style.backgroundColor = "#ffaf90"
    } else {
      time.style.backgroundColor = "#eaeaea"
    }

    for (let i = 0; i < document.querySelectorAll('.item').length; i++) {
      document.querySelectorAll('.item')[i].style.order = Math.floor((Date.parse(data[document.querySelectorAll('.item')[i].id].date)) / 8.64e7) - Math.floor((new Date()) / 8.64e7)
    }
  }

  div.scrollIntoView(false)
}

window.onload = () => {
  document.cookie.split('; ').forEach(cookie => {
    if (cookie.startsWith("data=")) {
      const list = JSON.parse(cookie.split('=')[1])
      for (key in list) {
        create(list[key].name, list[key].date)
      }
    }
  })
}

document.getElementById('enter').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    create(document.querySelector('#input-bar input').value)
    document.querySelector('#input-bar input').value = ''
  }
});
