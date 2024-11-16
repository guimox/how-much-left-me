export function initializeBirthdateInput() {
    const birthdateInput = document.getElementById("birthdate") as HTMLInputElement;
    if (!birthdateInput) return;

    birthdateInput.addEventListener("input", (event) => {
        const target = event.target as HTMLInputElement;
        let value = target.value.replace(/\D/g, "");

        if (value.length > 8) {
            value = value.slice(0, 8);
        }

        if (value.length > 4) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
        } else if (value.length > 2) {
            value = `${value.slice(0, 2)}/${value.slice(2)}`;
        }

        target.value = value;
    });
}