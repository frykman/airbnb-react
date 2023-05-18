import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Reviews from '../components/Reviews'
import Booking from '../components/Booking'
import axios from 'axios'
import { API_URL } from '../api.js'

function House() {
  const { id } = useParams()
  const [house, setHouse] = useState({})
  const [selectedPhoto, setSelectedPhoto] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const getHouse = async () => {
      let response = await axios.get(`${API_URL}/houses/${id}`)
      setHouse(response.data)
      setSelectedPhoto(response.data.photos[0])
    }
    getHouse()
  }, [])

  return (
    <div className="container">
      {/* HOUSE IMAGE GRID START */}
      <div classname="">
        <button
          onClick={(e) => {
            navigate(-1)
          }}
          className="btn btn-success m-3"
        >
          Back
        </button>
      </div>
      <div className="container pt-3">
        <div className="container p-0 border border-1 pb-3">
          <div className="row row-cols-1 row-cols-sm-2 p-0">
            <div className="col">
              <img
                src={selectedPhoto}
                className="img-fluid rounded-3"
                alt="Focus image"
              />
            </div>
            <div className="col">
              {/* <!-- THUMBNAIL GRID --> */}
              <div className="row row-cols-3">
                {Array.isArray(house.photos) &&
                  house.photos.map((photo, i) => (
                    <div className="col my-1" key={i}>
                      <img
                        src={photo}
                        onClick={() => setSelectedPhoto(photo)}
                        className="img-thumbnail p-0"
                        alt="..."
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- HOUSE IMAGE GRID END --> */}

        {/* <!-- HOUSE INFO GRID START --> */}
        <div className="container">
          <div className="row mt-3">
            <div className="col-8">
              <h1>{house.name}</h1>
              <span>
                {house.location} - {house.rooms} Rooms
              </span>
              <p>{house.description}</p>

              {/* <!-- REVIEW TEXTAREA --> */}
              <Reviews houseid={id} />
            </div>
            {/* <!-- INFO/REVIEW COLUMN END --> */}

            {/* <!-- BOOKING REQUEST COLUMN --> */}
            <Booking houseid={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default House
