const email = document.getElementById("email");
const mailError = document.getElementById("mailError");

email.addEventListener("input", function (event) {
  if (!email.validity.typeMismatch) {
    mailError.setAttribute("class", "hidden");
  } else {
    mailError.setAttribute("class", "");
    mailError.innerText = "Make sure to enter a valid email address";
  }
});

const country = document.getElementById("country");
const countryError = document.getElementById("countryError");

country.addEventListener("input", function (event) {
  if (!country.validity.patternMismatch) {
    countryError.setAttribute("class", "hidden");
  } else {
    countryError.setAttribute("class", "");
    countryError.innerText =
      "Enter the two-letter abbreviation of your country, eg SE, US, UK, GE";
  }
});

const zip = document.getElementById("zipcode");
const zipError = document.getElementById("zipError");

zip.addEventListener("input", function (event) {
  if (!zip.validity.patternMismatch) {
    zipError.setAttribute("class", "hidden");
  } else {
    zipError.setAttribute("class", "");
    zipError.innerText = "Make sure your zip code follows the xxx-xx format";
  }
});

const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

password.addEventListener("input", function (event) {
  if (!password.validity.patternMismatch) {
    passwordError.setAttribute("class", "hidden");
    console.log("hi");
  } else {
    passwordError.setAttribute("class", "");
    passwordError.innerText =
      "Your password must have one digit, one uppercase and lower chase character, and one special character";
    if (password.value.length < 8) {
      passwordError.innerText =
        "Your password must be at least 8 characters long";
    } else if (password.value.length > 32) {
      passwordError.innerText =
        "Your password cannot be longer than 32 characters";
    }
  }
});

const confirmation = document.getElementById("confirmation");
const confirmationError = document.getElementById("confirmationError");

confirmation.addEventListener("input", function (event) {
  if (confirmation.value == password.value) {
    confirmationError.setAttribute("class", "hidden");
  } else {
    confirmationError.innerHTML = "Enter the same password as above";
    confirmationError.setAttribute("class", "");
  }
});
