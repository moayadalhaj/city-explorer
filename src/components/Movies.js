import React, { Component } from 'react';
import Movie from './Movie';

export class Movies extends Component {
  render() {
    return (
      <Movie locationName={this.props.locationName} moviesData={this.props.moviesData} />
    )
  }
}

export default Movies
