const valid = (
  name: string,
  email: string,
  password: string,
  cf_password: string
) => {
  if (!name || !email || !password) return 'Пожалуйста, заполните все поля'

  if (!validateEmail(email)) return 'Неверный адрес электронной почты'

  if (password.length < 6) return 'Пароль должен быть не менее 6 символов'

  if (password !== cf_password) return 'Пароли не совпадают'
}

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

export default valid
