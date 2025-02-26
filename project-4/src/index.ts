import "./style.css";

const inputField = document.querySelector(".search") as HTMLElement;
const inputContainer = document.querySelector(".input-container") as HTMLElement;

inputContainer.addEventListener('click', function() { 
    console.log("input icon was clicked")
    this.classList.toggle('active')
 });

inputField.addEventListener('click', function() { 
    console.log("input icon was clicked")
    this.classList.toggle('active')
 });