//Task 1
let form = document.getElementById("bookingform");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let message = document.getElementById("formMessage");

    if (name !== "" && email !== "") {

        message.textContent = "Thank you for visiting, " + name +
            "! We will contact you at " + email + ".";
    }

});
// Task 2
let rows = document.querySelectorAll(".menuRow");
rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#f5d6b3";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });

});
// Task 3
let themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
//Task 4
let menuItems = document.querySelectorAll(".menuItem");
let total = document.getElementById("total");

let priceTotal = 0;

menuItems.forEach(function(item) {

    item.addEventListener("change", function() {

        if (item.checked) {
            priceTotal = priceTotal + Number(item.value);
        } 
        else {
            priceTotal = priceTotal - Number(item.value);
        }

        total.textContent = "Total: $" + priceTotal;
    });

});
//Task 5
let birthYearInput = document.getElementById("birth-year");
let discountMessage = document.getElementById("discountMessage");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let birthYear = parseInt(birthYearInput.value);
    let age = 2026 - birthYear;

    if (age >= 18 && age <= 25) {

        discountMessage.textContent = "You are " + age +
            " years old and qualify for a student discount.";

    }
    else if (age >= 60) {

        discountMessage.textContent = "You are " + age +
            " years old and qualify for a senior discount.";

    }
    else {

        discountMessage.textContent = "You are " + age +
            " years old and do not qualify for a discount.";
    }

});
//Task 6
let readMoreBtn = document.getElementById("readMoreBtn");
let extraText = document.getElementById("extraText");

readMoreBtn.addEventListener("click", function() {

    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    }
    else {
        extraText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }

});
//Task 7
let allButton = document.getElementById("allButton");
let drinksButton = document.getElementById("drinksButton");
let pastriesButton = document.getElementById("pastriesButton");

let menuRows = document.querySelectorAll(".menuRow");

allButton.addEventListener("click", function() {

    menuRows.forEach(function(row) {
        row.style.display = "";
    });

});

drinksButton.addEventListener("click", function() {

    menuRows.forEach(function(row) {

        if (row.cells[1].textContent === "Drinks") {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }

    });

});

pastriesButton.addEventListener("click", function() {

    menuRows.forEach(function(row) {

        if (row.cells[1].textContent === "Pastries") {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }

    });

});
// Task 8

let statusBanner = document.getElementById("statusBanner");

let currentHour = new Date().getHours();

if (currentHour >= 11) {
    statusBanner.textContent = "We are Open!";
    statusBanner.style.color = "#f5d6b3";
}
else {
    statusBanner.textContent = "Closed - Open at 11 AM";
    statusBanner.style.color = "#d8c1ad";
}
// Task 9
let specialNotes = document.getElementById("special-notes");
let characterCount = document.getElementById("characterCount");

specialNotes.addEventListener("input", function() {

    let remaining = 100 - specialNotes.value.length;

    characterCount.textContent = remaining + " characters remaining";

});