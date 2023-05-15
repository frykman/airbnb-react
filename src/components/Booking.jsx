import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../api.js'

function Booking(props) {
  //States
  const [booked, setBooked] = useState(false)
  const [currentUser, setCurrentUser] = useState(0)
  const [reviews, setReviews] = useState([])
  const [ratingTotal, setRatingTotal] = useState(0)

  //Data
  let bookingObj = {}

  //Methods
  const getCurrentUser = async () => {
    let user = await axios.get(`${API_URL}/profile`)
    setCurrentUser(user.data)
  }

  const getBookings = async () => {
    let response = await axios.get(`${API_URL}/bookings`, {
      params: { house: props.houseid },
    })
    response.data.message == 'booked' ? setBooked(true) : null
  }

  const getReviews = async () => {
    let response = await axios.get(`${API_URL}/reviews`, {
      params: { house: props.houseid },
    })
    setReviews(response.data.reviews)
    setRatingTotal(response.data.totalRating)
  }

  const sendBooking = async (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      bookingObj[str] = val
    }

    if (e.target.booking.value.length > 20) {
      setValue('description', e.target.booking.value)
      setValue('house', props.houseid)
      await axios.post(`${API_URL}/bookings`, bookingObj)
    }
    getBookings()
    console.log(ratingTotal)
  }

  //Hooks

  useEffect(() => {
    getCurrentUser()
    getBookings()
    getReviews()
  }, [])

  return (
    <>
      <div className="col">
        <div className="container">
          <h4 className="mb-3">$350/night</h4>
          <div className="mb-2">
            {ratingTotal > 0 && (
              <i className="fa-solid fa-thumbs-up fs-4 me-2 text-success d-inline"></i>
            )}
            {ratingTotal < 0 && (
              <i className="fa-solid fa-thumbs-down fs-4 me-2 text-danger d-inline"></i>
            )}
            <h6 className="d-inline">{reviews.length} Reviews</h6>
          </div>
          {booked == true && <h5>You have placed a booking for this house</h5>}

          {booked == false && currentUser.name && (
            <form onSubmit={(e) => sendBooking(e)}>
              <div className="">
                <textarea
                  name="booking"
                  type="text"
                  className="form-control"
                  rows="9"
                  placeholder="Make a booking request"
                ></textarea>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="btn-success rounded-2 d-block p-1 w-100"
                >
                  <span className="mx-3">Send Booking Request</span>
                </button>
              </div>
            </form>
          )}
          {!currentUser.name && (
            <span className="text-danger">
              Log in to make a booking request.
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default Booking
