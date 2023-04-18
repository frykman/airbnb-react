function House() {
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
  let reviews = [
    {
      date: '02 Jan 2022 - 1:01',
      description:
        'This place is fantastic! The views are breathtaking and its just a short walk to all the shops. My family and I had an amazing experience.',
      rating: 1,
      author: {
        name: 'Peter Lewis',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      },
    },
    {
      date: '03 Jan 2023 - 1:01',
      description:
        'This place is SHIT! The views are horrible and its a looong walk to all the shops. My family and I had an very bad experience.',
      rating: -1,
      author: {
        name: 'Lewis Peter',
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      },
    },
  ]

  return (
    <>
      <div className="container">
        <div className="container p-0 border border-1 mb-3">
          <div className="row row-cols-1 row-cols-sm-2 p-0">
            <div className="col">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
            "
                className="img-fluid rounded-3"
                alt="Focus image"
              />
            </div>
            <div className="col">
              {/* <!-- THUMBNAIL GRID --> */}
              <div className="row row-cols-3">
                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>
                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>
                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>

                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>
                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>
                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>

                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>
                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>
                <div className="col my-1">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png
                  "
                    className="img-thumbnail p-0"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- HOUSE IMAGE GRID END --> */}

        {/* <!-- HOUSE INFO GRID START --> */}
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>{house.title}</h1>
              <span>
                {house.location} - {house.rooms} Rooms
              </span>
              <p>{house.description}</p>

              {/* <!-- REVIEW TEXTAREA --> */}
              <h5>Leave a review</h5>
              <form>
                <div className="floatingTextarea">
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Review"
                  ></textarea>
                </div>
                <div className="d-flex align-items-baseline my-3">
                  <div className="border border-1 rounded-2 p-2">
                    <i className="fa-solid fa-thumbs-up fs-4 me-2 text-success"></i>
                  </div>
                  <div className="border border-1 rounded-2 p-2">
                    <i className="fa-solid fa-thumbs-down fs-4 me-2 text-danger"></i>
                  </div>
                </div>
                <div className="d-block mb-3">
                  <button
                    type="submit"
                    className="btn-success rounded-2 d-block p-1 w-50"
                  >
                    <h5 className="mx-3">Submit</h5>
                  </button>
                </div>
              </form>

              {/* <!-- REVIEWS SECTION --> */}

              {reviews.map((review, i) => (
                <div className="border border-1 rounded-2 p-3 mb-3" key={i}>
                  <div className="row">
                    <div className="col-1">
                      <div className="d-inline w-50">
                        <img
                          src={review.author.avatar}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="col-10 position-relative">
                      <div className="position-absolute top-0 end-0">
                        <i className="fa-solid fa-thumbs-up fs-4 me-2 text-success"></i>
                      </div>
                      <span className="text-secondary">{review.date}</span>
                      <h5>{review.author.name}</h5>
                      <p>{review.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <!-- INFO/REVIEW COLUMN END --> */}

            {/* <!-- BOOKING REQUEST COLUMN --> */}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default House
