import Listings from '../components/Listings'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../api.js'

function Profile() {
  useEffect(() => {
    const getProfile = async () => {
      let response = await axios.get(`${API_URL}/profile`)
      setUser(response.data)
    }
    getProfile()
  }, [])

  const [user, setUser] = useState({})

  const updateProfile = async (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      user[str] = val
    }
    setValue('name', e.target.name.value)
    setValue('email', e.target.email.value)
    setValue('avatar', e.target.avatar.value)
    await axios.patch(`${API_URL}/profile`, user)
  }

  return (
    // <!-- PROFILE/LISTINGS START -->
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        {/* <!-- PROFILE --> */}
        <div className="col mb-3">
          <h1>Profile</h1>
          <hr />
          <form onSubmit={(e) => updateProfile(e)}>
            <label>Name</label>
            <input
              type="text"
              className="form-control mb-3 w-100"
              defaultValue={user.name}
              name="name"
            />
            <label>Email</label>
            <input
              type="email"
              className="form-control mb-3 w-100"
              defaultValue={user.email}
              name="email"
            />
            <label>Profile Picture</label>
            <img
              src={user.avatar}
              className="rounded-circle d-block pt-3 pb-3"
            />
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                https://
              </span>
              <input
                type="text"
                className="form-control"
                name="avatar"
                id="basic-url"
                aria-describedby="basic-addon3"
                defaultValue={user.avatar}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
          </form>
        </div>

        {/* <!-- LISTINGS --> */}
        <div className="col">
          <Listings />
        </div>
      </div>
    </div>
  )
}

export default Profile
