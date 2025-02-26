import "./style.css";

const search = document.querySelector(".search") as HTMLElement
const input = document.querySelector(".input") as HTMLElement
const button = document.querySelector(".btn") as HTMLElement;

button.addEventListener('click', function() { 
    search.classList.toggle('active')
    input.focus()
 });

