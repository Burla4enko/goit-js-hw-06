let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

const increaseValue = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;    
}

const decreaseValue = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;    
}

decrementBtnRef.addEventListener('click', decreaseValue);
incrementBtnRef.addEventListener('click', increaseValue);
