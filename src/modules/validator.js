"use strict";

const validator = () => {
  const calcInputs = document.querySelectorAll(".calc-block input[type=text]");
  const emailInputs = document.querySelectorAll("form input[type=email]");

  calcInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/g, "");
    });
  });

  emailInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (
        /^(?!а\-я$)(?!А\-Я$)((.{0,1})?( [-]{0,1})?( @.+)?([.]{0,1})?(.{0,11})?)$/.test(
          e.target.value
        ) &&
        e.target.value !== ""
      ) {
        e.target.value = "";
        e.target.setAttribute(
          "placeholder",
          "Используйте латинницу и символы @ - _ . ! ~ *"
        );
        e.target.style.border = "1px solid red";
        e.target.classList.add("error");
      } else {
        e.target.style.border = "";
        e.target.classList.remove("error");
      }
      return e.target.value;
    });
  });
};

export default validator;
