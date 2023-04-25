import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Login() {
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

  const loginForm = (e, str) => {
    e.preventDefault()
    const setValue = (str, val) => {
      userObj[str] = val
    }
    setValue('email', validatedEmail)
    setValue('password', e.target.password.value)

    console.log(userObj)
  }

  return (
    <div className="container justify-content-center p-5 mt-5 w-25">
      <form
        onSubmit={(e) => loginForm(e)}
        className="bg-light p-5 justify-content-center rounded-3 "
      >
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
          "
          className="mx-auto d-block mb-3"
          width="100px"
        />
        <label>Email</label>
        <input
          onKeyUp={(e) => setEmailToValidate(e.target.value)}
          name="email"
          type="email"
          className="form-control mb-3 w-100"
        />
        <label>Password</label>
        <input name="password" type="password" className="form-control mb-3" />
        {/* <Link to="/houses" className="px-2 link-success text-decoration-none"> */}
        <button type="submit" className="d-block mb-3 btn btn-success">
          Login
        </button>
        {/* </Link> */}

        <span>New to Airbnb?</span>
        <Link to="/signup" className="px-2 link-success text-decoration-none">
          Signup
        </Link>
      </form>
    </div>
  )
}

export default Login
