import { MONTHS_IN_YEAR, LIFE_EXPECTANCY } from "../utils/constants";

export function updateHeatmap(birthdate: Date) {
    const heatmap = document.getElementById("heatmap");
    if (!heatmap) return;
    heatmap.innerHTML = "";

    const yearIndicators = document.createElement("div");
    yearIndicators.className = "flex items-center justify-between w-full max-w-md mb-2";
    heatmap.appendChild(yearIndicators);

    const scrollContainer = document.createElement("div");
    scrollContainer.className = "w-full pb-4";

    const heatmapContent = document.createElement("div");
    heatmapContent.className = "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-1 min-w-fit mx-auto";

    const currentDate = new Date();
    const monthsPassed = (currentDate.getFullYear() - birthdate.getFullYear()) * MONTHS_IN_YEAR + currentDate.getMonth();

    for (let year = 0; year < LIFE_EXPECTANCY; year++) {
        const yearBlock = document.createElement("div");
        yearBlock.className = "flex flex-col gap-3 p-1 min-w-24 items-center justify-center dark:bg-gray-800 rounded";

        const yearNumber = document.createElement("div");
        yearNumber.className = "text-xs text-gray-400 text-center";
        yearNumber.textContent = (year + 1).toString();
        yearBlock.appendChild(yearNumber);

        const monthsGrid = document.createElement("div");
        monthsGrid.className = "grid grid-cols-2 gap-1";

        for (let month = 0; month < MONTHS_IN_YEAR; month++) {
            const dot = document.createElement("div");
            dot.className = `w-4 h-4 rounded-sm ${year * MONTHS_IN_YEAR + month <= monthsPassed
                ? "bg-blue-500 dark:bg-blue-400"
                : "bg-gray-200 dark:bg-gray-700"
                }`;
            monthsGrid.appendChild(dot);
        }

        yearBlock.appendChild(monthsGrid);
        heatmapContent.appendChild(yearBlock);
    }

    scrollContainer.appendChild(heatmapContent);
    heatmap.appendChild(scrollContainer);
}
