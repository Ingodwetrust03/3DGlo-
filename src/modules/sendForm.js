"use strict";

const sendForm = ({ formId = [], someElem = [] }) => {
  let formElements;
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";

  const validate = (list) => {
    let success = true;

    list.forEach((el) => {
      if (!el.value) {
        el.setAttribute("placeholder", "Заполните поля");
        el.style.border = "1px solid red";

        success = false;
      } else if (el.getAttribute("name") === "user_phone") {
        if (!/^[\d\+]+$/.test(el.value) && el.value !== "") {
          el.value = "";
          el.setAttribute("placeholder", "Используйте цифры и знак +");
          el.style.border = "1px solid red";

          success = false;
        } else {
          el.style.border = "";
          el.value = "";
          el.setAttribute("placeholder", "Номер телефона");

          success = true;
        }
      } else if (el.getAttribute("name") === "user_message") {
        if (/[^а-я d\\.\,\!\-\_\;\"\'\?]/gi.test(el.value) && el.value !== "") {
          el.value = "";
          el.setAttribute(
            "placeholder",
            "Используйте кириллицу, знаки препинания и пробелы"
          );
          el.style.border = "1px solid red";
          success = false;
        } else {
          el.style.border = "";
          el.value = "";
          success = true;
        }
      } else if (el.getAttribute("name") === "user_name") {
        if (/[^а-я d\\.\,\!\-\_\;\"\'\?]/gi.test(el.value) && el.value !== "") {
          el.value = "";
          el.setAttribute("placeholder", "Используйте кириллицу и пробелы");
          el.style.border = "1px solid red";
          success = false;
        } else {
          el.style.border = "";
          success = true;
        }
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = (form) => {
    console.log(form);
    formElements = form.querySelectorAll("input");

    const formData = new FormData(form);

    const formBody = {};

    statusBlock.textContent = loadText;
    statusBlock.style.color = "#fff";
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === input) {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны");
    }
  };

  try {
    formId.forEach((id) => {
      const form = document.getElementById(id);
      console.log(form, id);
      formElements = form.querySelectorAll("input");

      if (!form) {
        throw new Error("Верните форму");
      }
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm(form);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
