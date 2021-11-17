console.log('JavaScript code has loaded!')
let yourName = "Matthew Burrows" // HINT: Replace this with your own name!
document.getElementById('credit').textContent = `Created by ${yourName}`
// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let GBADDbutton = document.getElementById("add-gb")
let CCADDbutton = document.getElementById("add-cc")
let SugarADDbutton = document.getElementById("add-sugar")
let GBMINUSbutton = document.getElementById("minus-gb")
let CCMINUSbutton = document.getElementById("minus-cc")
let SugarMINUSbutton = document.getElementById("minus-sugar")

//ADD Buttons
GBADDbutton.addEventListener('click', function(){
    gb = gb + 1
    document.querySelector('#qty-gb').textContent = gb
    cookietotal()
})
CCADDbutton.addEventListener('click', function(){
    cc = cc + 1
    document.querySelector('#qty-cc').textContent = cc
    cookietotal()
})
SugarADDbutton.addEventListener('click', function(){
    sugar = sugar + 1
    document.querySelector('#qty-sugar').textContent = sugar
    cookietotal()
})
//MINUS Buttons
GBMINUSbutton.addEventListener('click', function(){
    gb = gb - 1
    document.querySelector('#qty-gb').textContent = gb
    cookietotal()
    if (gb < 0){document.querySelector('#qty-gb').textContent = "ERROR"}
})
CCMINUSbutton.addEventListener('click', function(){
    cc = cc - 1
    document.querySelector('#qty-cc').textContent = cc
    cookietotal()
    if (cc < 0){document.querySelector('#qty-cc').textContent = "ERROR"}
})
SugarMINUSbutton.addEventListener('click', function(){
    sugar = sugar - 1
    document.querySelector('#qty-sugar').textContent = sugar
    cookietotal()
    if (sugar < 0){document.querySelector('#qty-sugar').textContent = "ERROR"}
})
//TOTAL 
function cookietotal(){
    total = gb + cc + sugar
    console.log(total)
    document.querySelector('#qty-total').textContent = total
    if (total < 0){document.querySelector('#qty-total').textContent = "ERROR"}
}
cookietotal()

//OuterFunctionExperiment


//The +1 and –1 buttons are clickable for each cookie. This means that clicking them executes code and produces a noticable result of some kind. There are six buttons total.
//The +1 button for each cookie adds one to the appropriate cookie count.
//The –1 button for each cookie subtracts one from the appropriate cookie count.
//The table updates the appropriate table cell for the specific cookie when each cookie's +1 or -1 button is clicked.
//The table updates the total cell in the table footer that tallies all the cookies.