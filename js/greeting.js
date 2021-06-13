const USER_LS = "currentUser";
const SHOWING_CN = "showing";

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const saveName = (text) => {
  localStorage.setItem(USER_LS, text);
};

const paintGreeting = (text) => {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}!`;
}

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

const askForName = () => {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  console.log(currentUser);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

const initGretting = () => {
  loadName();
}

initGretting();
