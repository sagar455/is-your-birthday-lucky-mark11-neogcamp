const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#result");

checkButton.addEventListener("click", function getValues() {
    var bDate = birthDate.value;
    bDate = bDate.replaceAll("-", "");

    let sum = 0;

    if (bDate && luckyNumber.value) {
        for (let i = 0; i < bDate.length; i++) {
            sum = sum + Number(bDate.charAt(i));
        }

        message.style.display = "none";
        if (sum % luckyNumber.value === 0) {
            message.style.display = "block";
            message.innerText = "Yay! Your birthday is lucky! 🥳";
        } else {
            message.style.display = "block";
            message.innerText = " Your birthday is not lucky 😕 , but your year is 😉 ";
        }
    } else {
        message.innerText = "Please enter both the fields."
    }
});