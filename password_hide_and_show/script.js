const passwordField = document.getElementById('passwordField');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);

  if(type === 'text'){
    this.classList.remove('fa-eye-slash');
    this.classList.add('fa-eye');
  } else {
    this.classList.remove('fa-eye');
    this.classList.add('fa-eye-slash');
  }
});

  