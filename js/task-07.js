const inputRangeRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

spanTextRef.style.fontSize = `${inputRangeRef.value}px`;

inputRangeRef.addEventListener('input', () => { 
    spanTextRef.style.fontSize = `${inputRangeRef.value}px`;
});

