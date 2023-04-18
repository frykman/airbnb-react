function Nav() {
  return (
    <>
      <div class="container">
        <nav class="navbar navbar-light">
          <div class="col mb-3">
            <a class="navbar-brand" href="houses.html">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
            "
                alt=""
              />
            </a>
          </div>

          {/* <!-- LOGIN/LOGOUT SECTION --> */}

          {/* <!-- LOGIN --> */}

          {/* <!-- <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">Login</button>
          </form> --> */}

          {/* <!-- LOGOUT --> */}
          <form class="d-flex">
            <a href="profile.html">
              <button class="btn btn-outline-success me-2 px-0" type="submit">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  class="rounded-circle d-inline w-25 align"
                />
                Mikael
              </button>
            </a>
            <button class="btn btn-outline-success px-4" type="submit">
              Logout
            </button>
          </form>
        </nav>
      </div>
    </>
  )
}
