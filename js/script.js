const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.sign-up-link');
const loginLink = document.querySelector('.login-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.toggle('show-sign-up');
});

const form = document.getElementById('form');
const usnInput = document.getElementById('usn');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // validasi username
  if (usnInput.value === '') {
    alert('Username is required');
    usnInput.focus();
    return false;
  } else if (!/^[a-zA-Z0-9]+$/.test(usnInput.value)) {
    alert('Username must contain only letters and numbers without any space');
    usnInput.focus();
    return false;
  }

  // validasi email
  if (emailInput.value === '') {
    alert('Email is required');
    emailInput.focus();
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    alert('Email is invalid');
    emailInput.focus();
    return false;
  }

  // validasi password
  if (passInput.value === '') {
    alert('Password is required');
    passInput.focus();
    return false;
  } else if (passInput.value.length < 8) {
    alert('Password must be at least 8 characters long');
    passInput.focus();
    return false;
  } else if (!/^(?=.*[A-Z])(?=.*[0-9]).*$/.test(passInput.value)) {
    alert('Password must contain at least one uppercase letter and one number');
    passInput.focus();
    return false;
  }

  // jika semua validasi berhasil, submit form
  form.submit();
});
