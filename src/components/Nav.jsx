import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-light">
          <div className="col-1">
            <Link to="/houses">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
            "
                alt=""
                className="d-flex"
                width="100px"
              />
            </Link>
          </div>
          {/* <!-- LOGIN/LOGOUT SECTION --> */}

          {/* <!-- LOGIN --> */}

          {/* <!-- <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">Login</button>
          </form> --> */}

          {/* <!-- LOGOUT --> */}
          <div className="col-2">
            <form className="d-flex">
              <Link to="/profile">
                <button
                  className="btn btn-outline-success me-2 px-0 mb-0"
                  type="submit"
                >
                  <div className="col d-inline">
                    <img
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      className="rounded-circle d-inline w-25 m-0"
                    />
                  </div>
                  Mikael
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-outline-success px-4" type="submit">
                  Logout
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </>
  )
}
