import { Link } from 'react-router-dom'

function Listings() {
  let houseListings = [
    // {
    //   image:
    //     'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
    //   name: 'Luxury Villa in Chaweng',
    //   location: 'Koh Samui',
    //   rooms: '4',
    //   price: '350',
    //   description:
    //     'Stylish, tropical, luxurious, airy and absolute stunning view over the bay of Chaweng Beach, this villa combines form and function, enjoying magnificent views of Samuis small islands and the sea beyond.',
    // },
  ]

  return (
    <>
      <h1>My Listings</h1>
      <hr />
      <Link to="/housecreate">
        <button type="button" className="btn btn-success">
          List a House
        </button>
      </Link>
      <div className="border rounded-3 mt-5 p-4">
        {/* <!-- NO LISTED HOUSES MESSAGE --> */}

        {!houseListings.length && (
          <h5 className="text-secondary">You don't have any houses listed.</h5>
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
                    <h5 className="card-name">{house.name}</h5>
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
                      <button className="btn btn-outline-success">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* <!-- LISTED HOUSES CARDS --> */}
      </div>
    </>
  )
}

export default Listings
