// import axios from 'axios'

function HouseCreate() {
  let newListing = {}

  const sendForm = (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      newListing[str] = val
    }
    !e.target.title.value
      ? console.log('You need a title')
      : setValue('title', e.target.title.value)

    !e.target.description.value
      ? console.log('You need a description')
      : setValue('description', e.target.description.value)

    setValue('rooms', Number(e.target.rooms.value))
    !e.target.location.value
      ? console.log('You need to set a location')
      : setValue('location', e.target.location.value)

    !e.target.price.value
      ? console.log('You need to set a price')
      : setValue('price', Number(e.target.price.value))

    !e.target.photo1.value
      ? console.log('You need at least 1 photo')
      : setValue('photo1', e.target.photo1.value)
    !e.target.photo2.value ? null : setValue('photo2', e.target.photo2.value)
    !e.target.photo3.value ? null : setValue('photo3', e.target.photo3.value)
    !e.target.photo4.value ? null : setValue('photo4', e.target.photo4.value)
    !e.target.photo5.value ? null : setValue('photo5', e.target.photo5.value)
    !e.target.photo6.value ? null : setValue('photo6', e.target.photo6.value)
    !e.target.photo7.value ? null : setValue('photo7', e.target.photo7.value)
    !e.target.photo8.value ? null : setValue('photo8', e.target.photo8.value)
    !e.target.photo9.value ? null : setValue('photo9', e.target.photo9.value)
    console.log(newListing)

    // axios.post('/user/listings', newListing).then(function (response) {
    //   console.log(response)}).catch(function (error) {
    //     console.log(error);
    //   }
    // )
  }

  return (
    <div className="container">
      <form onSubmit={(e) => sendForm(e)}>
        <h1>List House</h1>

        <div className="mb-3">
          <h5>Short Title</h5>
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
          <select
            name="location"
            className="form-select"
            id="inputGroupSelect01"
            defaultValue={0}
          >
            <option value="0">Choose...</option>
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
