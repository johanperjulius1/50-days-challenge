import "./style.css";

const circles = document.querySelectorAll(".circle")
const progressBar=document.getElementById("progress")

const prevButton = document.getElementById('prevButton') as HTMLButtonElement;
const nextButton = document.getElementById('nextButton') as HTMLButtonElement;

let currentStep = 1


// Function to update button states based on currentStep
function updateButtonStates() {
    prevButton.disabled = (currentStep === 1);
    nextButton.disabled = (currentStep === 4);
}

// Function to update active classes based on currentStep
function updateActiveCircles() {
    // Remove active class from all circles
    circles.forEach(circle => circle.classList.remove("active"));
    // Add active class for circles up to currentStep
    for (let i = 0; i < currentStep; i++) {
        circles[i].classList.add("active");
        if (progressBar) {
            // Set the width of the progressBar based on currentStep
            progressBar.style.width = `${(currentStep - 1) * 33.33}%`;
        }
    }

    // Update button states
    updateButtonStates();
}


function updateStep(e: MouseEvent) {
    // Check if the target is the next button and increment currentStep
    if ((e.target as HTMLElement).id === 'nextButton') {
        currentStep++;
    }
    // Check if the target is the prev button and decrement currentStep
    else if ((e.target as HTMLElement).id === 'prevButton') {
        currentStep--;
    }

    updateActiveCircles();
}

prevButton.addEventListener('click', updateStep);
nextButton.addEventListener('click', updateStep);