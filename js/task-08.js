const formRef = document.querySelector('.login-form');
const emailRef = document.querySelector('[name="email"]');
const passwordRef = document.querySelector('[name="password"]');

formRef.addEventListener('submit', (e) => {
    e.preventDefault();

    if(emailRef.value.length === 0 || passwordRef.value.length === 0) {
        alert('Всі поля повинні бути заповнені!')
    } else {
        const userEmailAndPassword = {
            email: formRef.elements[0].value,
            password: formRef.elements[1].value,
        }
        console.log(userEmailAndPassword);
        formRef.reset();
    }
})

