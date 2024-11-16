import { initializeBirthdateInput } from "../logic/birthdate";
import { updateHeatmap } from "../logic/heatmap";
import { updateDisplay } from "../logic/life";
import { updateTimeRemaining } from "../logic/time";
import { calculateAge, calculateLifePercentage, calculateMonthsPassed, parseDate } from "../utils/date";

let timeUpdateInterval: number | undefined;

function initializeLifeCalculator() {
    const birthdateInput = document.getElementById("birthdate") as HTMLInputElement;
    if (!birthdateInput) {
        console.error("Birthdate input not found");
        return;
    }

    const today = new Date().toISOString().split("T")[0];
    birthdateInput.max = today;

    initializeBirthdateInput();

    birthdateInput.addEventListener("change", (e) => {
        const contentWrapper = document.getElementById("contentWrapper");
        const target = e.target as HTMLInputElement;
        const birthdate = target.value;

        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthdate)) {
            alert("Please enter the date in dd/mm/yyyy format.");
            return;
        }

        if (!birthdate) return;

        const age = calculateAge(birthdate);
        const percentage = calculateLifePercentage(age);
        const monthsPassed = calculateMonthsPassed(birthdate);

        if (contentWrapper) contentWrapper.classList.remove("hidden");

        updateDisplay(age, percentage);
        updateHeatmap(parseDate(birthdate));

        if (timeUpdateInterval) {
            clearInterval(timeUpdateInterval);
        }

        updateTimeRemaining(birthdate);
        timeUpdateInterval = window.setInterval(() => {
            updateTimeRemaining(birthdate);
        }, 1000);
    });
}

document.addEventListener("DOMContentLoaded", initializeLifeCalculator);