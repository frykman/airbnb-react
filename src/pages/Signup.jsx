import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div
      className="d-flex justify-content-center p-5 mt-5 w-auto"
      id="background"
    >
      <form className="bg-light p-5 justify-content-center rounded-3 w-25">
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
          "
          className="mx-auto w-25 d-block mb-3"
        />
        <label>Your Full Name</label>
        <input type="text" className="form-control mb-3 w-100" />
        <label>Profile Picture</label>
        <input type="text" className="form-control mb-3 w-100" />
        <label>Email</label>
        <input type="email" className="form-control mb-3 w-100" />
        <label>Password</label>
        <input type="password" className="form-control mb-3" />
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
