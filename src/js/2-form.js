const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};


const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  formData = savedData;
  emailInput.value = savedData.email || '';
  messageInput.value = savedData.message || '';
}


form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
