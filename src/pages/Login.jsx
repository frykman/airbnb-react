import { Link } from 'react-router-dom'

function Login() {
  return (
    <div id="background">
      <div className="d-flex justify-content-center p-5 mt-5 w-auto">
        <form className="bg-light p-5 justify-content-center rounded-3 w-25">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
          "
            className="mx-auto w-25 d-block mb-3"
          />
          <label>Email</label>
          <input type="email" className="form-control mb-3 w-100" />
          <label>Password</label>
          <input type="password" className="form-control mb-3" />
          <button type="submit" className="d-block mb-3 btn btn-success">
            Login
          </button>
          <span>New to Airbnb?</span>
          <Link to="/" className="px-2 link-success text-decoration-none">
            Signup
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
