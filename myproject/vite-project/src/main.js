const btn = document.querySelector('.btn-talk');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-button');
const input = document.querySelector('.modal-input');
const modalbtn = document.querySelector('.modal-btn');
const secondBtn = document.querySelector('.btn-started');
const inputEmail = document.querySelector('.input-contact');
const contactBtn = document.querySelector('.btn-contact');
btn.addEventListener('click', (e) => {
  e.preventDefault;
  modal.style.display = 'block';
});
closeBtn.addEventListener('click', (e) => {
  e.preventDefault;
  modal.style.display = 'none';
});
modalbtn.addEventListener('click', (e) => {
  e.preventDefault;
  const inputValue = input.value;
  console.log(inputValue);
  input.value = '';
  localStorage.setItem('userPhone', inputValue);
  alert('Thank you! We will contact you soon.');
});
secondBtn.addEventListener('click', (e) => {
  e.preventDefault;
  modal.style.display = 'block';
});
contactBtn.addEventListener('click', (e) => {
  e.preventDefault;
  const emailValue = inputEmail.value;
  console.log(emailValue);
  inputEmail.value = '';
  localStorage.setItem('userEmail', emailValue);
  alert('Thank you for contacting us! We will get back to you soon.');
});
