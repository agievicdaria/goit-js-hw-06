const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
    if (Number(inputRef.dataset.length) === inputRef.value.length) {
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid')
    }
})