import { Link } from 'react-router-dom'
import '../styles/Nav.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { API_URL } from '../api.js'

export default function Nav() {
  // States
  const [currentUser, setCurrentUser] = useState(0)

  // Methods
  const getCurrentUser = async () => {
    let user = await axios.get(`${API_URL}/profile`)
    setCurrentUser(user.data)
  }

  const logout = async (e) => {
    let response = await axios.get(`${API_URL}/logout`)
    console.log(response.data)
  }

  // Hooks
  useEffect(() => {
    getCurrentUser()
  }, [])

  // JSX
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
                className="d-flex img-fluid"
                width="100px"
              />
            </Link>
          </div>
          {/* <!-- LOGIN/LOGOUT SECTION --> */}
          {/* <!-- LOGGED OUT --> */}
          {!currentUser.name && (
            <Link to="/login">
              <button className="btn btn-outline-success" type="submit">
                Login
              </button>
            </Link>
          )}
          {/* <!-- LOGGED IN --> */}
          {currentUser.name && (
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
                      {currentUser.avatar && (
                        <img
                          id="nav-avatar"
                          src={currentUser.avatar}
                          className="rounded-circle d-inline w-50 m-0 position-absolute nav-avatar"
                        />
                      )}
                      {!currentUser.avatar && (
                        <img
                          id="nav-avatar"
                          src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                          className="rounded-circle d-inline w-50 m-0 position-absolute nav-avatar"
                        />
                      )}
                      <span className="d-inline-flex text-end px-3">
                        {currentUser.name}
                      </span>
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
          )}
        </nav>
      </div>
    </>
  )
}
