function logout() {
  window.location.href = 'index.html';
}

function sendAlert() {
  alert('Emergency alert sent (offline demo)');
  console.log('Alert triggered at', new Date().toISOString());
}
