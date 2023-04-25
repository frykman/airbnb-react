import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import Booking from '../components/Booking'

function House() {
  const { id } = useParams()

  //will be used with axios to get house with id from database (let house = axios.get bla bla) and setHouse(house) as state variable, then populate.
  // house/${id} in template literal

  let house = {
    title: 'Luxury Villa in Chaweng',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores blanditiis error, quia ex eos neque odit pariatur ducimus non nam deleniti. Odio, quasi. Accusamus similique commodi natus molestias a maxime!',
    price: 350,
    booking: false,
    location: 'Koh Samui',
    rooms: 4,
    rating: 1,
    photos: [],
    host: {
      name: 'Bob',
      avatar:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png',
    },
  }

  let photos = [
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png',
  ]

  const [selectedPhoto, setSelectedPhoto] = useState(photos[0])

  return (
    <>
      {/* HOUSE IMAGE GRID START */}
      <div className="container pt-3">
        <div className="container p-0 border border-1 pb-3">
          <div className="row row-cols-1 row-cols-sm-2 p-0">
            <div className="col">
              <img
                src={selectedPhoto}
                className="img-fluid rounded-3"
                alt="Focus image"
              />
            </div>
            <div className="col">
              {/* <!-- THUMBNAIL GRID --> */}
              <div className="row row-cols-3">
                {photos.map((photo, i) => (
                  <div className="col my-1" key={i}>
                    <img
                      src={photo}
                      onClick={() => setSelectedPhoto(photo)}
                      className="img-thumbnail p-0"
                      alt="..."
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- HOUSE IMAGE GRID END --> */}

        {/* <!-- HOUSE INFO GRID START --> */}
        <div className="container">
          <div className="row mt-3">
            <div className="col-8">
              <h1>{house.title}</h1>
              <span>
                {house.location} - {house.rooms} Rooms
              </span>
              <p>{house.description}</p>

              {/* <!-- REVIEW TEXTAREA --> */}
              <Reviews />
            </div>
            {/* <!-- INFO/REVIEW COLUMN END --> */}

            {/* <!-- BOOKING REQUEST COLUMN --> */}
            <Booking />
          </div>
        </div>
      </div>
    </>
  )
}

export default House
