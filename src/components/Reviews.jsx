import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment/moment'

function Reviews(props) {
  let [rating, setRating] = useState(0)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews()
  }, [])

  const getReviews = async () => {
    let response = await axios.get('http://localhost:4000/reviews', {
      params: { house: props.houseid },
    })
    setReviews(response.data)
  }

  const sendForm = async (e) => {
    e.preventDefault()
    let review = {}

    const setValue = (str, val) => {
      review[str] = val
    }

    !rating ? null : setValue('rating', rating)

    !e.target.description.value
      ? null
      : setValue('description', e.target.description.value)
    setValue('house', props.houseid)

    await axios.post('http://localhost:4000/reviews', review)
    getReviews()
  }

  return (
    <>
      <h5>Leave a review</h5>
      <form onSubmit={(e) => sendForm(e)}>
        <div className="floatingTextarea">
          <textarea
            name="description"
            type="text"
            rows="5"
            className="form-control"
            placeholder="Review"
          ></textarea>
        </div>
        <div className="d-block mb-3">
          <button
            type="submit"
            className="btn-success rounded-2 d-block mt-3 p-1 w-50"
          >
            <h5 className="mx-3">Submit</h5>
          </button>
        </div>
      </form>
      <div className="d-flex align-items-baseline my-3">
        <div className="border border-1 rounded-2 p-2">
          <button onClick={() => setRating(1)}>
            <i
              name="rating"
              className="fa-solid fa-thumbs-up fs-4 me-2 text-success"
            ></i>
          </button>
        </div>
        <div className="border border-1 rounded-2 p-2">
          <button onClick={() => setRating(-1)}>
            <i
              name="rating"
              className="fa-solid fa-thumbs-down fs-4 me-2 text-danger"
            ></i>
          </button>
        </div>
      </div>

      {/* <!-- REVIEWS SECTION --> */}

      {reviews &&
        reviews.map((review, i) => (
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
                <span className="text-secondary">
                  {moment(review.date).format('MMMM Do YYYY, h:mm')}
                </span>
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
