"use strict";

const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let getCountedTime;

  const countTime = () => {
    const deadlineMiliseconds = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeToDeadline = deadlineMiliseconds - dateNow;

    let getSeconds = Math.floor((timeToDeadline / 1000) % 60);
    let getMinutes = Math.floor((timeToDeadline / 1000 / 60) % 60);
    let getHours = Math.floor(timeToDeadline / 1000 / 60 / 60);

    return {
      hours: getHours,
      minutes: getMinutes,
      seconds: getSeconds,
      remainedSeconds: timeToDeadline,
    };
  };

  getCountedTime = countTime();

  let timerAnimation = () => {
    getCountedTime = countTime();
    let getCountedSeconds = getCountedTime.seconds;
    let getCountedMinutes = getCountedTime.minutes;
    let getCountedHours = getCountedTime.hours;

    const addZero = (num) => {
      if (num <= 9) {
        num = "0" + num;
      }
      return num;
    };

    timerHours.textContent = addZero(getCountedHours);
    timerMinutes.textContent = addZero(getCountedMinutes);
    timerSeconds.textContent = addZero(getCountedSeconds);
  };

  if (getCountedTime.remainedSeconds < 0) {
    clearInterval(timerAnimation);
    timerHours.textContent = "00";
    timerMinutes.textContent = "00";
    timerSeconds.textContent = "00";
  } else {
    setInterval(timerAnimation, 1000);
  }
};

export default timer;
