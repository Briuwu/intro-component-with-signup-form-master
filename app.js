const form = document.getElementById('form')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('pass')

const messageError = [
  'First name cannot be empty',
  'Last name cannot be empty',
  'Email address cannot be empty',
  'Password cannot be empty',
  'This is not a valid email address'
]

const formChecker = () => {
  const fNameValue = firstName.value.trim()
  const lNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if (fNameValue === ''){
    addError(firstName, messageError[0])
  } else {
    removeError(firstName)
  }

  if (lNameValue === ''){
    addError(lastName, messageError[1])
  } else {
    removeError(lastName)
  }

  if (emailValue === ''){
    addError(email, messageError[2])
  } else if (!isEmail(emailValue)){
    addError(email, messageError[4])
  } else {
    removeError(email)
  }

  if (passwordValue === ''){
    addError(password, messageError[3])
  } else {
    removeError(password)
  }
}

const addError = (input, message) => {
  const formControl = input.parentElement
  const errorMsg = formControl.querySelector('.try__form--error')

  formControl.className = 'form-control active'
  errorMsg.textContent = message
}

const removeError = (input) => {
  const formControl = input.parentElement
  const errorMsg = formControl.querySelector('.try__form--error')

  formControl.className = 'form-control'
  errorMsg.textContent = ''
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  formChecker()
})


const isEmail = (email) => {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
}