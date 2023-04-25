import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Signup() {
  let [emailToValidate, setEmailToValidate] = useState('')

  useEffect(() => {
    if (validEmail(emailToValidate)) {
      validatedEmail = emailToValidate
      console.log('Valid email :-)')
    } else console.log('Not valid email!')
  }, [emailToValidate])

  let userObj = {}

  let validatedEmail = ''

  const validEmail = (str) => {
    if (!str.includes('@') && !str.includes('.')) return false
    if (!str.split('@')[0].length) return false
    if (!str.split('@')[1].includes('.')) return false
    if (str.split('@')[1].split('.')[1].length < 2) return false
    if (!str.split('@')[1].split('.')[0]) return false
    return true
  }

  const signupForm = (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      userObj[str] = val
    }

    !e.target.name.value
      ? console.log('Enter name!')
      : setValue('name', e.target.name.value)

    setValue('avatar', e.target.avatar.value)
    setValue('email', validatedEmail)

    e.target.password.value < 8 // Make password validation
      ? console.log('Password must be over 8 characters')
      : setValue('password', e.target.password.value)

    console.log(userObj)
  }

  return (
    <div className="d-flex justify-content-center p-5 mt-5 w-auto" id="">
      <form
        onSubmit={(e) => signupForm(e)}
        className="bg-light p-5 justify-content-center rounded-3 w-25"
      >
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
          "
          className="mx-auto d-block mb-3"
          width="100px"
        />
        <label>Your Full Name</label>
        <input name="name" type="text" className="form-control mb-3 w-100" />
        <label>Profile Picture</label>
        <input name="avatar" type="text" className="form-control mb-3 w-100" />
        <label>Email</label>
        <input
          onKeyUp={(e) => setEmailToValidate(e.target.value)}
          name="email"
          type="email"
          className="form-control mb-3 w-100"
        />
        <label>Password</label>
        <input name="password" type="password" className="form-control mb-3" />
        <button type="submit" className="d-block mb-3 btn btn-success">
          Signup
        </button>
        <span>Already have an account?</span>
        <Link to="/login" className="px-2 link-success text-decoration-none">
          Login
        </Link>
      </form>
    </div>
  )
}

export default Signup
