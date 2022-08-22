const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length;
inputRef.addEventListener('blur', () => {
    if (inputRef.value.length < inputLength || inputRef.value.length > inputLength) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
        return;        
    }

        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        return;
});