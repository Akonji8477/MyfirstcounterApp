// Getting the html tag with their id respectively 
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

// declare a variable count 
let count = 0

function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    let countstr = count + "_"
    saveEl.textContent += countstr
}