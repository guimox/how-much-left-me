import { LIFE_EXPECTANCY, MONTHS_IN_YEAR } from "./constants";

export function parseDate(dateString: string) {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
}

export function calculateAge(birthdate: string) {
    const today = new Date();
    const birth = parseDate(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

export function calculateLifePercentage(age: number) {
    return (age / LIFE_EXPECTANCY) * 100;
}

export function calculateMonthsPassed(birthdate: string) {
    const today = new Date();
    const birth = parseDate(birthdate);
    const yearsPassed = today.getFullYear() - birth.getFullYear();
    const monthsPassedInCurrentYear = today.getMonth() - birth.getMonth();

    return yearsPassed * MONTHS_IN_YEAR + monthsPassedInCurrentYear;
}

export function calculateTimeLeft(birthdate: string) {
    const now = new Date();
    const birth = parseDate(birthdate);
    const deathDate = new Date(birth.getTime());
    deathDate.setFullYear(birth.getFullYear() + LIFE_EXPECTANCY);

    const totalMs = deathDate.getTime() - now.getTime();

    if (totalMs < 0) {
        return {
            totalYears: 0,
            totalWeeks: 0,
            totalDays: 0,
            totalHours: 0,
            totalMinutes: 0,
            totalSeconds: 0,
        };
    }

    const totalSeconds = Math.floor(totalMs / 1000);
    const totalMinutes = Math.floor(totalMs / (1000 * 60));
    const totalHours = Math.floor(totalMs / (1000 * 60 * 60));
    const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 7));
    const totalYears = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 365.25));

    return {
        totalYears,
        totalWeeks,
        totalDays,
        totalHours,
        totalMinutes,
        totalSeconds,
    };
}

