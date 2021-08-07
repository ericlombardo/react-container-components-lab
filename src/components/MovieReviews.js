// stateless function
import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map(review => CreateReview(review))}
    </div>
  )
}

const CreateReview = ({ // checked solution to see this seperation of concerns from MovieReviews Component
  display_title,
  mpaa_rating,
  summary_short,
  multimedia
}) => {
  return (
    <div key={display_title} className="review">
      <img src={multimedia.src} alt=""></img>
      <h1>{display_title}</h1>
      <p>{mpaa_rating}</p>
      <p>{summary_short}</p>
    </div>
  )
}

MovieReviews.defaultProps = []

export default MovieReviews