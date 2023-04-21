function Profile() {
  return (
    // <!-- PROFILE/LISTINGS START -->
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2">
        {/* <!-- PROFILE --> */}
        <div class="col mb-3">
          <h1>Profile</h1>
          <hr />
          <form>
            <label>Name</label>
            <input type="text" class="form-control mb-3 w-100" />
            <label>Email</label>
            <input type="email" class="form-control mb-3 w-100" />
            <label>Profile Picture</label>
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              class="rounded-circle d-block pt-3 pb-3"
            />
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
            <button type="button" class="btn btn-success">
              Save Changes
            </button>
          </form>
        </div>

        {/* <!-- LISTINGS --> */}
        <div class="col">
          <h1>My Listings</h1>
          <hr />
          <button type="button" class="btn btn-success">
            List a House
          </button>
          <div class="border rounded-3 mt-5 p-4">
            {/* <!-- NO LISTED HOUSES MESSAGE --> */}

            {/* <!-- <h5 class="text-secondary">You don't have any houses listed.</h5> --> */}

            {/* <!-- LISTED HOUSES CARDS --> */}

            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
              "
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>

                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Luxury Villa in Chaweng</h5>
                    <div class="mb-3">
                      <small class="text-muted">4 rooms - 350€/night</small>
                    </div>

                    <p class="card-text">
                      Stylish, tropical, luxurious, airy and absolute stunning
                      view over the bay of Chaweng Beach, this villa combines
                      form and function, enjoying magnificent views of Samui's
                      small islands and the sea beyond.
                    </p>
                    <div>
                      <button class="btn btn-outline-secondary">Edit</button>
                      <button class="btn btn-outline-success">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
