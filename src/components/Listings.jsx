import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../api.js'

function Listings() {
  useEffect(() => {
    const getListings = async () => {
      let response = await axios.get(`${API_URL}/listings`)
      setHouseListings(response.data)
      console.log(response.data)
    }
    getListings()
  }, [])

  const [houseListings, setHouseListings] = useState([])

  return (
    <>
      <h1>My Listings</h1>
      <hr />
      <Link to="/housecreate">
        <button type="button" className="btn btn-success">
          List a House
        </button>
      </Link>
      <div className="border rounded-3 mt-5 p-4">
        {/* <!-- NO LISTED HOUSES MESSAGE --> */}

        {!houseListings.length && (
          <h5 className="text-secondary">You don't have any houses listed.</h5>
        )}
        {Array.isArray(houseListings) &&
          houseListings.map((house, i) => (
            <div className="card mb-3" key={i}>
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={house.photos[0]}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>

                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-name">{house.name}</h5>
                    <div className="mb-3">
                      <small className="text-muted">
                        {house.rooms} rooms - {house.price}€/night
                      </small>
                    </div>

                    <p className="card-text">{house.title}</p>
                    <div>
                      <Link to="/houseedit">
                        <button className="btn btn-outline-secondary">
                          Edit
                        </button>
                      </Link>
                      <button className="btn btn-outline-success">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* <!-- LISTED HOUSES CARDS --> */}
      </div>
    </>
  )
}

export default Listings
