import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_NYT_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  
  state = {
    reviews: [],
    searchTerm: ''
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form id="search-form" onSubmit={this.handleSearch}>
          <label htmlFor="search">Search: </label> 
          <input id="search" type="text" onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  assignReviews = (reviews) => {
    this.setState({
      reviews: reviews.results
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(reviews => this.assignReviews(reviews))
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
}