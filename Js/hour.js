const dateNumber = document.getElementById("dateNumber");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const dateText = document.getElementById("dateText");

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString("es", {day: "2-digit"});
    dateMonth.textContent = date.toLocaleString("es", {month: "short"});
    dateYear.textContent = date.toLocaleString("es", {year: "numeric"});
    dateText.textContent = date.toLocaleString("es", {weekday: "long"});
}

setDate();