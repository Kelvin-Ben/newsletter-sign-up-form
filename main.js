const form = document.querySelector('.signup-form');
const emailInput = document.getElementById('email');
const alert = document.querySelector('.alert');
const subscribeButton = document.querySelector('.btn-subscribe');
const popup = document.querySelector('.popup-container')
const successText = document.querySelector('.confirmation-text');
const dismissButton = document.querySelector('.btn-dismiss')


const validateEmail = (email) => {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}
const setEmailValidationStatus = () => {
  const emailValue = emailInput.value;
  const isValid = validateEmail(emailValue);

  if (!isValid) {
    emailInput.style.border = 'none'
    emailInput.style.outline = '1px solid #f94144'
    alert.style.display = 'flex'
    subscribeButton.style.backgroundColor = '#000435'
  } else {
    emailInput.style.outline = ''
    alert.style.display = 'none'
    subscribeButton.style.background = 'linear-gradient(to bottom, #FF6500, #f94144)'
  }
  return isValid
}
function handleInput() {
  setEmailValidationStatus()
}
function closePopup() {
  popup.style.display = 'none'
}

function handleSubmit(e) {
  e.preventDefault(e)
  const emailValue = emailInput.value;

  if (!validateEmail(emailValue)) {
    alert.style.display = 'flex'
    emailInput.style.outline = '1px solid #f94144'
    popup.style.display = 'none'
    return
  }
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  successText.innerHTML = `A confirmation email has been sent to <span class="bold-email">${data.email}</span>. Please open it and click the button inside to confirm your subscription.`
  popup.style.display = 'flex'

  emailInput.value = ''
  subscribeButton.style.background = '#000435'
}
emailInput.addEventListener('input', handleInput)
dismissButton.addEventListener('click', closePopup)
form.addEventListener('submit', handleSubmit)