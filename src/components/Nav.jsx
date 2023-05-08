import { Link } from 'react-router-dom'
import '../styles/Nav.css'
import axios from 'axios'

export default function Nav() {
  const logout = async (e) => {
    let response = await axios.get('http://localhost:4000/logout')
    console.log(response.data)
  }
  return (
    <>
      <div className="container pb-2">
        <nav className="navbar navbar-light">
          <div className="col-1">
            <Link to="/">
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
                  <div
                    className="col d-inline position-relative"
                    id="avatar-div"
                  >
                    <img
                      id="nav-avatar"
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      className="rounded-circle d-inline w-50 m-0 position-absolute nav-avatar"
                    />
                    <span className="d-inline-flex text-end px-3">Mikael</span>
                  </div>
                </button>
              </Link>
              <Link to="/login">
                <button
                  onClick={(e) => logout(e)}
                  className="btn btn-outline-success px-4"
                  type="submit"
                >
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
