import "./style.css";

const circles = document.querySelectorAll(".circle")
let currentStep = 1

// Define button elements outside the function to avoid repeated DOM queries
const prevButton = document.getElementById('prevButton') as HTMLButtonElement;
const nextButton = document.getElementById('nextButton') as HTMLButtonElement;

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
    }

    // Update button states
    updateButtonStates();
}

// Call this function whenever currentStep changes
switch (currentStep) {
    case 1:
    case 2:
    case 3:
    case 4:
        updateActiveCircles();
        break;
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


document.getElementById('prevButton')?.addEventListener('click', updateStep);
document.getElementById('nextButton')?.addEventListener('click', updateStep);