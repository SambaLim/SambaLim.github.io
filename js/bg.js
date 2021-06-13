const IMG_NUMBER = 3;
const body = document.querySelector("body");

const genRandom = () => Math.floor(Math.random() * IMG_NUMBER);

const paintImage = (imgNumber) => {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpeg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

const initBg = () => {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

initBg();
