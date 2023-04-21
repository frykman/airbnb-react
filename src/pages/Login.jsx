function Login() {
  return (
    <div class="d-flex justify-content-center p-5 mt-5 w-auto">
      <form class="bg-light p-5 justify-content-center rounded-3 w-25">
        <img src="images/logo-airbnb.png" class="mx-auto w-25 d-block mb-3" />
        <label>Email</label>
        <input type="email" class="form-control mb-3 w-100" />
        <label>Password</label>
        <input type="password" class="form-control mb-3" />
        <button type="submit" class="d-block mb-3 btn btn-success">
          Login
        </button>
        <span>New to Airbnb?</span>
        <a href="signup.html" class="px-2 link-success text-decoration-none">
          Signup
        </a>
      </form>
    </div>
  )
}

export default Login
