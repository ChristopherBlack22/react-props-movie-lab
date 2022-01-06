import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((dataSet) => <MovieCard title={dataSet.title} IMDBRating={dataSet.IMDBRating} genres={dataSet.genres} poster={dataSet.poster} />);
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
