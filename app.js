let header = document.querySelector('h1')
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')
let body = document.querySelector('body')

function decrease() {
    header.innerText--  
}

function changecolor1() {
    body.style.backgroundColor = 'yellow'
}

dec.addEventListener('click', decrease)
dec.addEventListener('click', changecolor1)



function reset() {
    header.innerText = 0   
}

function changecolor2() {
    body.style.backgroundColor = 'red'
}

res.addEventListener('click', reset)
res.addEventListener('click', changecolor2)



function increase() {
    header.innerText++    
}

function changecolor3() {
    body.style.backgroundColor = 'green'
}

inc.addEventListener('click', increase)
inc.addEventListener('click', changecolor3)