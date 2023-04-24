function Profile() {
  let currentUser = {
    name: 'Mikael',
    email: 'mikael.frykman@gmail.com',
    avatar: 'coolpic.com/photo',
  }

  let houseListings = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      location: 'Koh Samui',
      rooms: '4',
      price: '350',
      description:
        'Stylish, tropical, luxurious, airy and absolute stunning view over the bay of Chaweng Beach, this villa combines form and function, enjoying magnificent views of Samuis small islands and the sea beyond.',
    },
  ]

  const updateProfile = (e) => {
    e.preventDefault()
    const setValue = (str, val) => {
      currentUser[str] = val
    }
    setValue('name', e.target.name.value)
    setValue('email', e.target.email.value)
    setValue('avatar', e.target.avatar.value)
    console.log(currentUser)
  }

  return (
    // <!-- PROFILE/LISTINGS START -->
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        {/* <!-- PROFILE --> */}
        <div className="col mb-3">
          <h1>Profile</h1>
          <hr />
          <form onSubmit={(e) => updateProfile(e)}>
            <label>Name</label>
            <input
              type="text"
              className="form-control mb-3 w-100"
              defaultValue={currentUser.name}
              name="name"
            />
            <label>Email</label>
            <input
              type="email"
              className="form-control mb-3 w-100"
              defaultValue={currentUser.email}
              name="email"
            />
            <label>Profile Picture</label>
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              className="rounded-circle d-block pt-3 pb-3"
            />
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                https://
              </span>
              <input
                type="text"
                className="form-control"
                name="avatar"
                id="basic-url"
                aria-describedby="basic-addon3"
                defaultValue={currentUser.avatar}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
          </form>
        </div>

        {/* <!-- LISTINGS --> */}
        <div className="col">
          <h1>My Listings</h1>
          <hr />
          <button type="button" className="btn btn-success">
            List a House
          </button>
          <div className="border rounded-3 mt-5 p-4">
            {/* <!-- NO LISTED HOUSES MESSAGE --> */}

            {!houseListings.length && (
              <h5 className="text-secondary">
                You don't have any houses listed.
              </h5>
            )}
            {houseListings.length > 0 &&
              houseListings.map((house, i) => (
                <div className="card mb-3" key={i}>
                  <div className="row g-0">
                    <div className="col-4">
                      <img
                        src={house.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>

                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{house.title}</h5>
                        <div className="mb-3">
                          <small className="text-muted">
                            {house.rooms} rooms - {house.price}€/night
                          </small>
                        </div>

                        <p className="card-text">{house.description}</p>
                        <div>
                          <button className="btn btn-outline-secondary">
                            Edit
                          </button>
                          <button className="btn btn-outline-success">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* <!-- LISTED HOUSES CARDS --> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
