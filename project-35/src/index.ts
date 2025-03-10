import "./style.css";

const imgs = document.querySelector(".image-container") as HTMLElement;
const leftButton = document.querySelector("#left") as HTMLElement;
const rightButton = document.querySelector("#right") as HTMLElement;
const allImages = document.querySelectorAll("#imgs img") as NodeList;

let interval = setInterval(run, 2000);
let index = 0;

function run() {
    index++;
    changeImage();
}

function changeImage() {
    if (index > allImages.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = allImages.length - 1;
    }

    if (imgs) {
        imgs.style.transform = `translateX(${-index * 500}px)`;
    }
}


function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightButton.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval()
})

leftButton.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval()
})