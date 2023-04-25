function Booking() {
  let bookingObj = {}

  const sendBooking = (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      bookingObj[str] = val
    }

    if (e.target.booking.value.length > 20) {
      setValue('body', e.target.booking.value)
      console.log('Booking sent!')
      console.log(bookingObj)
    } else console.log('Booking request too short!')
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
        </div>
      </div>
    </>
  )
}

export default Booking
