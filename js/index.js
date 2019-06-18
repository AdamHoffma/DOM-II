// Your code goes here
let funbustag = document.querySelector('.logo-heading')
funbustag.addEventListener('mouseover', function(event) {
    event.target.style.color = "pink";
    setTimeout(function() {
        event.target.style.color = "purple"
        
    },1000)
})
/*
let sizing = document.querySelector('header img')
sizing.addEventListener('wheel', function zoom(event) {
    event.preventDefault()
    scale =+ event.detaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    sizing.style.transform = `scale(${scale})`;
})
let scale = 1
*/

let zoom = document.querySelector(".img-fluid")
zoom.addEventListener('wheel', function() {
    event.preventDefault()
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    zoom.style.transform = `scale(${scale})`
})
let scale = 1

let clickable = document.querySelector('header nav')
clickable.addEventListener('click', function(event) {
    event.target.style.color = "green"
})

let noMenu = document.querySelector('.intro h2')
    noMenu.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    })

let highlight = document.querySelector('.intro h2')
    highlight.addEventListener('select', function(event) {
        event.target.style.color = "violet"
        setTimeout(function() {
            event.target.style.color = ""
            
        },5000)
    })

let twoClick = document.querySelector('.footer')
    twoClick.addEventListener('dblclick', function(event) {
        twoClick.classList.toggle('large')
    })

let resizer = document.querySelector('#height')
    resizer.addEventListener('resize', function reportWindowSize(event) {
        resizer.textContent = window.innerHeight;
    })
window.onresize = reportWindowSize;

