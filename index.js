let count = 0

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('para1')

function increment(){
    count = count + 1
    countEl.innerText= count
}

function save() {
    saveEl.textContent += " " + count + " - "
    countEl.textContent = 0
    count = 0
}