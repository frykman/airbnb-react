import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { API_URL } from '../api.js'

axios.defaults.withCredentials = true

function HouseCreate() {
  const [errorMessage, setErrorMessage] = useState('')

  let newListing = {}
  let photos = []
  const navigate = useNavigate()

  const sendForm = async (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      newListing[str] = val
    }
    !e.target.title.value
      ? setErrorMessage('You need a title.')
      : setValue('title', e.target.title.value)

    !e.target.description.value
      ? setErrorMessage('You need a description')
      : setValue('description', e.target.description.value)

    setValue('rooms', Number(e.target.rooms.value))
    !e.target.location.value
      ? setErrorMessage('You need to set a location')
      : setValue('location', e.target.location.value)

    !e.target.price.value
      ? setErrorMessage('You need to set a price')
      : setValue('price', Number(e.target.price.value))

    !e.target.photo1.value
      ? setErrorMessage('You need at least 1 photo')
      : photos.push(e.target.photo1.value)
    !e.target.photo2.value ? null : photos.push(e.target.photo2.value)
    !e.target.photo3.value ? null : photos.push(e.target.photo3.value)
    !e.target.photo4.value ? null : photos.push(e.target.photo4.value)
    !e.target.photo5.value ? null : photos.push(e.target.photo5.value)
    !e.target.photo6.value ? null : photos.push(e.target.photo6.value)
    !e.target.photo7.value ? null : photos.push(e.target.photo7.value)
    !e.target.photo8.value ? null : photos.push(e.target.photo8.value)
    !e.target.photo9.value ? null : photos.push(e.target.photo9.value)
    setValue('photos', photos)

    if (
      newListing.title &&
      newListing.description &&
      newListing.rooms &&
      newListing.location &&
      newListing.price &&
      newListing.photos[0]
    ) {
      let response = await axios.post(`${API_URL}/houses`, newListing)

      if (response.data.message && response.data.message == 'House listed!') {
        navigate('/profile')
      }
    } else {
      console.log('House not listed')
    }
  }

  return (
    <div className="container">
      <form onSubmit={(e) => sendForm(e)}>
        <h1>List House</h1>

        <div className="mb-3">
          <h5>Short title</h5>
          <input name="title" type="text" className="form-control" />
        </div>

        <div className="floatingTextarea mb-3">
          <h5>Description</h5>
          <textarea
            type="text"
            rows="8"
            className="form-control"
            name="description"
          ></textarea>
        </div>

        <div className="mb-3">
          <h5>Number of Rooms</h5>
          <input name="rooms" type="number" className="form-control mb-3" />
        </div>

        <div className="mb-3">
          <h5>Location</h5>
          <textarea
            type="text"
            rows="1"
            className="form-control"
            name="location"
          ></textarea>
        </div>

        <div className="mb-3">
          <h5>Price (per night)</h5>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              €
            </span>
            <input name="price" type="number" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <h5>Add Photos (up to 9)</h5>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo1"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo2"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo3"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo4"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo5"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo6"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo7"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo8"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            name="photo9"
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>

        <div className="input-group mb-3">
          <button className="btn btn-success btn-lg" type="submit">
            <h5>Post Listing</h5>
          </button>
        </div>
      </form>
    </div>
  )
}

export default HouseCreate
