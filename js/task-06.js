const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
    if (Number(inputRef.dataset.length) !== inputRef.value.length) {
        inputRef.classList.add('invalid');
    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
})