const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value) {
        return alert('Please, fill in all the fields');
    };

    console.log({email: email.value, password: password.value});
    form.reset();
};
