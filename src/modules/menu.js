"use strict";

const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  const menuHandler = () => {
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches("li") && menu.classList.contains("active-menu")) {
      console.log(e.target);
      return true;
    } else if (e.target.closest("menu") || e.target.closest(".menu")) {
      menuHandler();
    } else if (
      !e.target.closest("menu") &&
      menu.classList.contains("active-menu")
    ) {
      menuHandler();
    }
  });
};

export default menu;
