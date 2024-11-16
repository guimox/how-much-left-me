export function updateDisplay(age: number, percentage: number) {
    const progressBar = document.getElementById("progressBar");
    const percentageDisplay = document.getElementById("percentage");
    const yearsLived = document.getElementById("yearsLived");

    if (!progressBar || !yearsLived || !percentageDisplay) return;

    progressBar.setAttribute("style", `width: ${Math.min(percentage, 100)}%`);
    percentageDisplay.textContent = `${percentage.toFixed(1)}% completed`;
    yearsLived.textContent = `Age: ${age} years`;

    progressBar.className = "h-full rounded-md transition-all duration-500 ease-out";

    if (percentage > 75) {
        progressBar.classList.add("bg-red-600");
    } else if (percentage > 50) {
        progressBar.classList.add("bg-yellow-500");
    } else {
        progressBar.classList.add("bg-blue-600");
    }
}