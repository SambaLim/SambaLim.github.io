const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const padZero = (num) => num < 10 ? `0${num}` : num;

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return [padZero(hours), padZero(minutes), padZero(seconds)];
}

const setClockTime = () => {
  const [ hours, minutes, seconds ] = getTime();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

const initClock = () => {
  setClockTime();
  setInterval(setClockTime, 1000);
}

initClock();
