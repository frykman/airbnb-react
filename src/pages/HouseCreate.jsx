function HouseCreate() {
  return (
    // <!-- LIST A HOUSE -->

    <div class="container">
      <form>
        <h1>List a House</h1>

        <div class="mb-3">
          <h5>Short Title</h5>
          <input type="text" class="form-control" />
        </div>

        <div class="floatingTextarea mb-3">
          <h5>Description</h5>
          <textarea rows="8" class="form-control"></textarea>
        </div>

        <div class="mb-3">
          <h5>Number of Rooms</h5>
          <input type="number" class="form-control mb-3" />
        </div>

        <div class="mb-3">
          <h5>Location</h5>
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="mb-3">
          <h5>Price (per night)</h5>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
              €
            </span>
            <input type="number" class="form-control" />
          </div>
        </div>

        <div class="mb-3">
          <h5>Add Photos (up to 9)</h5>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>

        <div class="input-group mb-3">
          <input class="btn btn-success btn-lg" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}
