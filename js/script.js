const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const errorMessage = "Sorry, invalid format here";

console.log(form, nameInput, emailInput, messageInput);

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form__group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form__group success";
}

function isValidEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

nameInput.addEventListener("input", function () {

  const name = nameInput.value;
  if (!/^[a-zA-Z ]+$/.test(name)) {

    showError(nameInput, errorMessage);
  } else {

    showSuccess(nameInput);
  }
});

emailInput.addEventListener("input", function () {

  const email = emailInput.value;
  if (!isValidEmail(email)) {

    showError(emailInput, errorMessage);
  } else {
    showSuccess(emailInput);
  }
});

messageInput.addEventListener("input", function () {
  const message = messageInput.value;

  if (message === "") {
    showError(messageInput, `${getFieldName(messageInput)} is required`);
  } else {
    showSuccess(messageInput);
  }
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    if (!href.startsWith("#")) {
      window.open(href);
    }
  });
});
