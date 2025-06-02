document.getElementById('yesBtn').addEventListener('click', function() {
  const response = document.getElementById('response');
  response.innerHTML = 'Yay! You like me! 💖';
  response.classList.remove('animate__shakeX');
  response.classList.add('animate__animated', 'animate__bounceIn');
});

document.getElementById('noBtn').addEventListener('click', function() {
  const response = document.getElementById('response');
  response.innerHTML = 'Oh no! You don\'t like me! 😢';
  response.classList.remove('animate__bounceIn');
  response.classList.add('animate__animated', 'animate__shakeX');
});
