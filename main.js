const form = document.querySelector('.signup-form')
const emailInput = document.getElementById('email')
const alert = document.querySelector('.alert')
const subscribeButton = document.querySelector('.btn-subscribe')



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
  } else {
    emailInput.style.outline = ''
    alert.style.display = 'none'
    subscribeButton.style.backgroundColor = '#f94144'
  }
  return isValid
}
function handleInput() {
  setEmailValidationStatus()
}

function handleSubmit(e) {
  e.preventDefault(e)

  // implement a check form email then show success popup component
  emailInput.value = ''
  subscribeButton.style.backgroundColor = ''
}
emailInput.addEventListener('input', handleInput)
form.addEventListener('submit', handleSubmit)