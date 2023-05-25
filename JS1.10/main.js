const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  if (passwordInput.value.length < 8) {
    event.preventDefault();
    alert('Пароль должен состоять минимум из 8 символов!');
  }
});
