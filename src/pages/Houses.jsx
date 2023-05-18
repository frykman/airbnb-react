import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../api.js'
import loadinganimation from '../img/my-loader.svg'

function Houses() {
  let [houses, setHouses] = useState([])

  const [loading, setLoading] = useState(true)

  const sendForm = async (e) => {
    e.preventDefault()

    let searchQueryObj = {}
    const setValue = (str, val) => {
      searchQueryObj[str] = val
    }
    !e.target.rooms.value ? null : setValue('rooms', e.target.rooms.value)
    !e.target.price.value ? null : setValue('price', e.target.price.value)
    !e.target.location.value
      ? null
      : setValue('location', e.target.location.value)
    setValue('pricesort', e.target.pricesort.value)
    !e.target.title.value ? null : setValue('title', e.target.title.value)

    let response = await axios.get(`${API_URL}/houses`, {
      params: searchQueryObj,
    })
    setLoading(false)

    console.log(searchQueryObj)
    setHouses(response.data)
  }

  useEffect(() => {
    const getHouses = async () => {
      let response = await axios.get(`${API_URL}/houses`, {
        params: {
          rooms: '0',
          pricesort: 'ascending',
        },
      })
      setLoading(false)
      setHouses(response.data)
    }
    getHouses()
  }, [])

  return (
    <>
      {/* HOUSES SEARCH FORM */}
      <div className="bg-light">
        <form onSubmit={(e) => sendForm(e)} className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 pt-3">
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <input
                  name="location"
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Location"
                />
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-house"></i>
                </span>
                <select
                  name="rooms"
                  className="form-select form-select-md"
                  aria-label=".form-select-md example"
                  defaultValue={0}
                >
                  <option value="0">Any rooms</option>
                  <option value="1">1 room</option>
                  <option value="2">2 rooms</option>
                  <option value="3">3 rooms</option>
                  <option value="4">4 rooms</option>
                  <option value="5">5 rooms</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-euro-sign"></i>
                </span>
                <input
                  name="price"
                  type="number"
                  className="form-control form-control-md"
                  placeholder="350$"
                />
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-sort"></i>
                </span>
                <select
                  className="form-control form-select-md"
                  name="pricesort"
                  defaultValue={1}
                >
                  <option value="ascending">Price (low to high)</option>
                  <option value="descending">Price (high to low)</option>
                </select>
              </div>
            </div>
            <div className="col">
              <input
                name="title"
                className="form-control form-control-md mb-3"
                type="text"
                placeholder="House title..."
              />
            </div>
            <div className="col">
              <button
                type="submit"
                className="form-control form-select-md btn-success"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* HOUSES CARDS */}

      <div className="container pt-5">
        {loading && (
          <div className="m-5 p-5 loading">
            <img src={loadinganimation} alt="loading" />
          </div>
        )}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
          {!houses && (
            <div>
              <h4>No results</h4>
            </div>
          )}

          {houses &&
            houses.map((house, i) => (
              <div className="col card px-0" key={i}>
                <div className="d-flex fill px-0">
                  <Link to={`/house/${house._id}`} className="stretched-link">
                    <img
                      src={house.photos[0]}
                      className="card-img-top img-fluid object-fit-cover h-100"
                      alt="House"
                    />
                  </Link>
                </div>
                <div className="card-body">
                  <span className="card-text">
                    {house.location} - {house.rooms} Rooms
                  </span>
                  <h5 className="card-title">{house.title}</h5>
                  <div className="row">
                    <div className="col text-start">
                      <span className="card-text">{house.reviews} Reviews</span>
                    </div>
                    <div className="col text-end">
                      <span className="card-text">${house.price}/night</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Houses
