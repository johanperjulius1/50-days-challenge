import "./style.css";

const imageContainers = document.querySelectorAll<HTMLDivElement>('.image');

imageContainers.forEach((container) => {
    container.addEventListener('click', () => {
 

        if (container.classList.contains('active')) {
            container.classList.remove('active');
        } else {
            imageContainers.forEach((c) => c.classList.remove('active'));
            container.classList.add('active');
        }
    });
});