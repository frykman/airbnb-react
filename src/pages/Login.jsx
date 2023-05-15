import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../api.js'

axios.defaults.withCredentials = true

function Login() {
  const navigate = useNavigate()
  let [emailToValidate, setEmailToValidate] = useState('')

  const [userExist, setUserExists] = useState(true)

  useEffect(() => {
    if (validEmail(emailToValidate)) {
      validatedEmail = emailToValidate
      console.log('Valid email :-)')
    } else console.log('Not valid email!')
  }, [emailToValidate])

  useEffect(() => {}, [])

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

  const loginForm = async (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      userObj[str] = val
    }
    setValue('email', validatedEmail)
    setValue('password', e.target.password.value)

    let response = await axios.post(`${API_URL}/login`, userObj)
    console.log(response.data)
    if (response.data.message === 'Login success') {
      navigate('/')
    } else {
      setUserExists(false)
    }
  }

  return (
    <div>
      <div className="container justify-content-center p-5 mt-5 w-md-25 w-75">
        <div>
          <form
            onSubmit={(e) => loginForm(e)}
            className="bg-light p-5 rounded-3 "
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
            <input
              name="password"
              type="password"
              className="form-control mb-3"
            />
            <button type="submit" className="d-block mb-3 btn btn-success">
              Login
            </button>

            <span>New to Airbnb?</span>
            <Link
              to="/signup"
              className="px-2 link-success text-decoration-none"
            >
              Signup
            </Link>
          </form>
          {userExist == false && (
            <div className="my-5 mx-auto justify-content-center d-flex align-items-center">
              <h5 className="text-danger">User does not exist</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
