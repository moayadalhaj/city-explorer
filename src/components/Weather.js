import React, { Component } from 'react';
import WeatherDay from './WeatherDay';

class Weather extends Component {
  render() {
    return (
      <div>
        <WeatherDay locationName={this.props.locationName} weatherData={this.props.weatherData} />
      </div>
    )
  }
}

export default Weather;
