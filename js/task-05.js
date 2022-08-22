const inputRef = document.querySelector('#name-input');
const spanNameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    if (inputRef.value.length === 0) {
       return spanNameRef.textContent = 'Anonymous';
    }
    spanNameRef.textContent = inputRef.value;
});
