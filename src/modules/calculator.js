"use strict";

import { animate } from "./helpers";

const calculator = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  const calc = () => {
    let calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    let calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      console.log(calcCountValue);
      totalValue = parseInt(
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
      );
      console.log(totalValue);
    } else {
      totalValue = 0;
    }

    let counter = total.textContent;

    setInterval(() => {
      animate({
        duration: 3000,
        timing(timeFraction) {
          return Math.pow(timeFraction, 5);
        },
        draw(progress) {
          if (counter < totalValue) {
            counter++;
            total.textContent = counter;
          } else if (counter > totalValue) {
            counter--;
            total.textContent = counter;
          }
        },
      });
    }, 20);
  };

  calcBlock.addEventListener("change", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      calc();
    }
  });
};

export default calculator;
