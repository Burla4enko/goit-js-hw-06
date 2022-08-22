const bodyRef = document.querySelector('body');
const colorSpanRef = document.querySelector('.color');
const changeBtnRef = document.querySelector('.change-color');

changeBtnRef.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  let colorNow = getRandomHexColor();
  bodyRef.style.backgroundColor = `${colorNow}`;
  // console.log(colorNow);
  colorSpanRef.textContent = colorNow;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

