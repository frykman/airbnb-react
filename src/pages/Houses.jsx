function Houses() {
  let houses = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 350,
      location: 'Koh Samui',
      rooms: 4,
      reviews: 3,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2002/house_02_01.png',
      title: 'Private Villa Lotus 1',
      price: 150,
      location: 'Koh Phangan',
      rooms: 3,
      reviews: 1,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2003/house_03_01.png',
      title: 'Seminyak KuDeTa Beach',
      price: 120,
      location: 'Bali',
      rooms: 3,
      reviews: 2,
      score: -1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2004/house_04_01.png',
      title: '5 Bed Villa Canggu',
      price: 250,
      location: 'Bali',
      rooms: 5,
      reviews: 1,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2005/house_05_01.png',
      title: 'Archie Village House',
      price: 80,
      location: 'Koh Phangan',
      rooms: 2,
      reviews: 1,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2006/house_06_01.png',
      title: 'Luxury 6 Beds Villa',
      price: 150,
      location: 'Koh Phangan',
      rooms: 6,
      reviews: 0,
      score: 1,
    },
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2007/house_07_01.png',
      title: 'Narivana Koh Phangan',
      price: 100,
      location: 'Koh Phangan',
      rooms: 4,
      reviews: 0,
      score: 1,
    },
  ]

  return (
    <>
      <div className="bg-light">
        <form className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 pt-3">
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <select
                  className="form-select form-select-md"
                  aria-label=".form-select-md example"
                >
                  <option selected>Any Location</option>
                  <option value="1">Koh Phangan</option>
                  <option value="2">Koh Samui</option>
                  <option value="3">Bali</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-house"></i>
                </span>
                <select
                  className="form-select form-select-md"
                  aria-label=".form-select-md example"
                >
                  <option selected>Any rooms</option>
                  <option value="1">1 room</option>
                  <option value="2">2 rooms</option>
                  <option value="3">3 rooms</option>
                  <option value="3">4 rooms</option>
                  <option value="3">5 rooms</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-euro-sign"></i>
                </span>
                <input
                  type="number"
                  className="form-control form-control-md"
                  placeholder="350$"
                />
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-sort"></i>
                </span>
                <select className="form-control form-select-md">
                  <option selected>Price (low to high)</option>
                  <option value="1">Price (high to low)</option>
                </select>
              </div>
            </div>
            <div className="col">
              <input
                className="form-control form-control-md mb-3"
                type="text"
                placeholder="House name..."
              />
            </div>
            <div className="col">
              <button className="form-control form-select-md btn-success">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container pt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
          <div className="col card">
            <a href="house.html" className="stretched-link">
              <img
                src={houses[0].image}
                className="card-img-top"
                alt="House 1"
              />
            </a>
            <div className="card-body">
              <span className="card-text">
                {houses[0].location} - {houses[0].rooms} Rooms
              </span>
              <h5 className="card-title">{houses[0].title}</h5>
              <span className="card-text text-start">
                {houses[0].reviews} Reviews
              </span>
              <span className="card-text text-end">
                ${houses[0].price}/night
              </span>
            </div>
          </div>
          <div className="col card">
            <a href="house.html" className="stretched-link">
              <img
                src={houses[1].image}
                className="card-img-top"
                alt="House 1"
              />
            </a>
            <div className="card-body">
              <span className="card-text">
                {houses[1].location} - {houses[1].rooms} Rooms
              </span>
              <h5 className="card-title">{houses[1].title}</h5>
              <span className="card-text text-start">
                {houses[1].reviews} Reviews
              </span>
              <span className="card-text text-end">
                ${houses[1].price}/night
              </span>
            </div>
          </div>
          <div className="col card">
            <a href="house.html" className="stretched-link">
              <img
                src={houses[2].image}
                className="card-img-top"
                alt="House 1"
              />
            </a>
            <div className="card-body">
              <span className="card-text">
                {houses[2].location} - {houses[2].rooms} Rooms
              </span>
              <h5 className="card-title">{houses[2].title}</h5>
              <span className="card-text text-start">
                {houses[2].reviews} Reviews
              </span>
              <span className="card-text text-end">
                ${houses[2].price}/night
              </span>
            </div>
          </div>
          <div className="col card">
            <a href="house.html" className="stretched-link">
              <img
                src={houses[3].image}
                className="card-img-top"
                alt="House 1"
              />
            </a>
            <div className="card-body">
              <span className="card-text">
                {houses[3].location} - {houses[3].rooms} Rooms
              </span>
              <h5 className="card-title">{houses[3].title}</h5>
              <span className="card-text text-start">
                {houses[3].reviews} Reviews
              </span>
              <span className="card-text text-end">
                ${houses[3].price}/night
              </span>
            </div>
          </div>
          <div className="col card">
            <a href="house.html" className="stretched-link">
              <img
                src={houses[4].image}
                className="card-img-top"
                alt="House 1"
              />
            </a>
            <div className="card-body">
              <span className="card-text">
                {houses[4].location} - {houses[4].rooms} Rooms
              </span>
              <h5 className="card-title">{houses[4].title}</h5>
              <span className="card-text text-start">
                {houses[4].reviews} Reviews
              </span>
              <span className="card-text text-end">
                ${houses[4].price}/night
              </span>
            </div>
          </div>
          <div className="col card">
            <a href="house.html" className="stretched-link">
              <img
                src={houses[5].image}
                className="card-img-top"
                alt="House 1"
              />
            </a>
            <div className="card-body">
              <span className="card-text">
                {houses[5].location} - {houses[5].rooms} Rooms
              </span>
              <h5 className="card-title">{houses[5].title}</h5>
              <span className="card-text text-start">
                {houses[5].reviews} Reviews
              </span>
              <span className="card-text text-end">
                ${houses[5].price}/night
              </span>
            </div>
          </div>
          <div className="col card">
            <a href="house.html" className="stretched-link">
              <img
                src={houses[6].image}
                className="card-img-top"
                alt="House 1"
              />
            </a>
            <div className="card-body">
              <span className="card-text">
                {houses[6].location} - {houses[6].rooms} Rooms
              </span>
              <h5 className="card-title">{houses[6].title}</h5>
              <span className="card-text text-start">
                {houses[6].reviews} Reviews
              </span>
              <span className="card-text text-end">
                ${houses[6].price}/night
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Houses
