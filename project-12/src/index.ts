import "./style.css";

const buttons = document.querySelectorAll(".faq-toggle")

buttons.forEach(button => {
    button.addEventListener("click", () => {
       const parent = button.closest(".faq")?.classList.toggle("active")
    })
})