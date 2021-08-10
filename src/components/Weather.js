import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <>
        {this.props.latitude && (
          <div>
            <h3>Weather information</h3>
            {this.props.weatherData.map((element, index) => {
              return (
                <div key={index} className="bg-secondary">
                  <p className="bg-primary text-white p-2 rounded">Descreption: {element.description}</p>
                  <p className="bg-dark text-white p-2 rounded">Date: {element.date}</p>
                </div>
              );
            })}
          </div>
        )
        }
      </>
    )
  }
}

export default Weather;