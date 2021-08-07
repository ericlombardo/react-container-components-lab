import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_NYT_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(`${URL}`)
    .then(resp => resp.json())
    .then(reviews => this.assignReviews(reviews))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movies Start Here</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  assignReviews = (reviews) => {
    this.setState({
      reviews: reviews.results
    })
  }
}