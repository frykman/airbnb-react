function HouseEdit() {
  return (
    <>
      {/* <!-- EDIT HOUSE LISTING --> */}
      <div className="container">
        <form>
          <h1>Edit House</h1>

          <div className="mb-3">
            <h5>Short Title</h5>
            <input type="text" className="form-control" />
          </div>

          <div className="floatingTextarea mb-3">
            <h5>Description</h5>
            <textarea rows="8" className="form-control"></textarea>
          </div>

          <div className="mb-3">
            <h5>Number of Rooms</h5>
            <input type="number" className="form-control mb-3" />
          </div>

          <div className="mb-3">
            <h5>Location</h5>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="mb-3">
            <h5>Price (per night)</h5>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                €
              </span>
              <input type="number" className="form-control" />
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
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>

          <div className="input-group mb-3">
            <input
              className="btn btn-success btn-lg"
              type="submit"
              value="Save Changes"
            />
          </div>

          <div className="input-group mb-3">
            <input
              className="btn btn-danger btn-lg"
              type="submit"
              value="Delete"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default HouseEdit
