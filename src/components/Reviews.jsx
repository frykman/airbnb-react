function Reviews() {
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
    </>
  )
}

export default Reviews
