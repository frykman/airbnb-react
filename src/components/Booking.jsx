function Booking() {
  return (
    <>
      <div className="col">
        <div className="container">
          <h4 className="mb-3">$350/night</h4>
          <div className="mb-2">
            <i className="fa-solid fa-thumbs-up fs-4 me-2 text-success d-inline"></i>
            <h6 className="d-inline">0 Reviews</h6>
          </div>
          <form>
            <div className="">
              <textarea
                className="form-control"
                rows="9"
                placeholder="Make a booking request"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Booking
