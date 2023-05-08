import axios from 'axios'
import { useEffect, useState } from 'react'

function Booking(props) {
  const [booked, setBooked] = useState(false)

  useEffect(() => {
    getBookings()
  }, [])

  let bookingObj = {}

  const getBookings = async () => {
    let response = await axios.get('http://localhost:4000/bookings', {
      params: { house: props.houseid },
    })
    response.data.message == 'booked' ? setBooked(true) : null
  }

  const sendBooking = async (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      bookingObj[str] = val
    }

    if (e.target.booking.value.length > 20) {
      //author and date is handled by api
      setValue('description', e.target.booking.value)
      setValue('house', props.houseid)
      await axios.post('http://localhost:4000/bookings', bookingObj)
    }
    getBookings()
  }

  return (
    <>
      <div className="col">
        <div className="container">
          <h4 className="mb-3">$350/night</h4>
          <div className="mb-2">
            <i className="fa-solid fa-thumbs-up fs-4 me-2 text-success d-inline"></i>
            <h6 className="d-inline">0 Reviews</h6>
          </div>
          {booked == true && <h5>You have placed a booking for this house</h5>}

          {booked == false && (
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
        </div>
      </div>
    </>
  )
}

export default Booking
