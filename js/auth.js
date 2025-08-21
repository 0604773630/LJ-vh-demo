function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if(email && password) {
    message.style.color = '#00ff00';
    message.innerText = 'Login successful (offline demo)';
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  } else {
    message.style.color = '#ff0000';
    message.innerText = 'Enter valid email/password';
  }
}

function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if(email && password) {
    message.style.color = '#00ff00';
    message.innerText = 'Signup successful (offline demo)';
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  } else {
    message.style.color = '#ff0000';
    message.innerText = 'Enter valid email/password';
  }
}
