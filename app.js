const form = document.querySelector(".form-add-user");

let userName = document.querySelector(".user-name");
userName.addEventListener("input", function () {
  let value = this.value;
  let validation = true;
  let regExp = /^[A-Z]+$/gi;
  if (!value.match(regExp)) {
    errorMessage(
      userName,
      "Введите корректное имя: используйте буквы латинского алфавита"
    );
    validation = false;
  } else successMessage(userName);
  console.log(validation);
});

let userPhone = document.querySelector(".user-phone");
userPhone.addEventListener("input", function () {
  let value = this.value;
  let validation = true;
  let regExp = /\+380\d{9}$/g;
  if (!value.match(regExp)) {
    errorMessage(userPhone, "Введите корректный номер телефона: +380*********");
    validation = false;
  } else successMessage(userPhone);
  console.log(validation);
});

let userEmail = document.querySelector(".user-email");
userEmail.addEventListener("input", function () {
  let value = this.value;
  let validation = true;
  let regExp = /^[A-Z0-9._%+-]+@[A-Z]+.[A-Z]{2,4}$/gi;
  if (!value.match(regExp)) {
    errorMessage(
      userEmail,
      "Введите корректный имейл: например, magic@ukr.net"
    );
    validation = false;
  } else successMessage(userEmail);
  console.log(validation);
});

let userCard = document.querySelector(".user-card");
userCard.addEventListener("input", function () {
  let value = this.value;
  let validation = true;
  let regExp = /^\d{16}$/g;
  if (!value.match(regExp)) {
    errorMessage(
      userCard,
      "Введите корректный номер карточки из 16 цифр: ****************"
    );
    validation = false;
  } else successMessage(userCard);
  console.log(validation);
});

//Функция: сообщение об ошибке
function errorMessage(field, text) {
  let errorWarning = document.createElement("p");
  errorWarning.classList.add("error");
  errorWarning.innerHTML = text;
  if (!field.nextElementSibling) {
    field.after(errorWarning);
  }
}

//Функция: успешное введение данных
function successMessage(field) {
  if (field.nextElementSibling) {
    field.nextElementSibling.remove();
  }
}

//Функция обработчик отправки формы - ИСПРАВЛЕННАЯ
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let errorMess = document.querySelector(".error");
  if (errorMess) {
    alert("Заполните форму правильными значениями");
    return;
  }
  this.submit();
});
