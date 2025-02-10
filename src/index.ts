import "./style.css";

const imageContainers = document.querySelectorAll<HTMLDivElement>('.image-container');

imageContainers.forEach((container) => {
    container.addEventListener('click', () => {
        if (container.classList.contains('active')) {
            container.classList.remove('active');
            const imageTitle = container.querySelector('h3');
            if (imageTitle) imageTitle.classList.remove('active');
        } else {
            imageContainers.forEach((c) => {
                c.classList.remove('active');
                const imageTitle = c.querySelector('h3');
                if (imageTitle) imageTitle.classList.remove('active');
            });
            container.classList.add('active');
            const imageTitle = container.querySelector('h3');
            if (imageTitle) imageTitle.classList.add('active');
        }
    });
});