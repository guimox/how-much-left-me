import { calculateTimeLeft } from "../utils/date";

export function updateTimeRemaining(birthdate: string) {
    const timeLeft = calculateTimeLeft(birthdate);

    document.getElementById("yearsRemaining")!.textContent =
        timeLeft.totalYears.toLocaleString();
    document.getElementById("weeksRemaining")!.textContent =
        timeLeft.totalWeeks.toLocaleString();
    document.getElementById("daysRemaining")!.textContent =
        timeLeft.totalDays.toLocaleString();
    document.getElementById("hoursRemaining")!.textContent =
        timeLeft.totalHours.toLocaleString();
    document.getElementById("minutesRemaining")!.textContent =
        timeLeft.totalMinutes.toLocaleString();
    document.getElementById("secondsRemaining")!.textContent =
        timeLeft.totalSeconds.toLocaleString();
}