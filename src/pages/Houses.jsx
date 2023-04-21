import { Link } from 'react-router-dom'

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

  const sendForm = (e) => {
    e.preventDefault()
    let searchQueryObj = {}
    const setValue = (str, val) => {
      searchQueryObj[str] = val
    }
    setValue('location', e.target.location.value)
    setValue('rooms', e.target.rooms.value)
    setValue('maxprice', e.target.maxprice.value)
    setValue('location', e.target.location.value)
    setValue('pricesort', e.target.pricesort.value)
    setValue('housename', e.target.housename.value)
    console.log(searchQueryObj)
  }

  return (
    <>
      {/* HOUSES SEARCH FORM */}
      <div className="bg-light">
        <form onSubmit={(e) => sendForm(e)} className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 pt-3">
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <select
                  name="location"
                  className="form-select form-select-md"
                  aria-label=".form-select-md example"
                  defaultValue={0}
                >
                  <option value="0">Any Location</option>
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
                  name="rooms"
                  className="form-select form-select-md"
                  aria-label=".form-select-md example"
                  defaultValue={0}
                >
                  <option value="0">Any rooms</option>
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
                  name="maxprice"
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
                <select
                  className="form-control form-select-md"
                  name="pricesort"
                  defaultValue={1}
                >
                  <option value="1">Price (low to high)</option>
                  <option value="2">Price (high to low)</option>
                </select>
              </div>
            </div>
            <div className="col">
              <input
                name="housename"
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

      {/* HOUSES CARDS */}

      <div className="container pt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
          {/* TEMPLATE START */}
          {houses.map((house, i) => (
            <div className="col card" key={i}>
              <Link to="/house" className="stretched-link">
                <img src={house.image} className="card-img-top" alt="House 1" />
              </Link>
              <div className="card-body">
                <span className="card-text">
                  {house.location} - {house.rooms} Rooms
                </span>
                <h5 className="card-title">{house.title}</h5>
                <span className="card-text text-start">
                  {house.reviews} Reviews
                </span>
                <span className="card-text text-end">${house.price}/night</span>
              </div>
            </div>
          ))}
          {/* TEMPLATE END */}
        </div>
      </div>
    </>
  )
}

export default Houses
