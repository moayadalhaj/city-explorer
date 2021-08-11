import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      citiesArray: ['paris', 'seattle', 'amman']
    }
  }
  render() {
    return (
      <>
        {this.props.locationError && (<Alert variant="danger" className="ms-5" style={{ width: '600px' }}>
          <Alert.Heading>Error</Alert.Heading>
          <p>This City not supported please choose Amman, Paris Or Seattle</p>
        </Alert>)}
        {this.state.citiesArray.includes(this.props.locationName.split(",")[0].toLowerCase()) && (
          <div>
            <h3>Weather information</h3>
            {this.props.weatherData.map((element, index) => {
              return (
                <div key={index} className="bg-secondary">
                  <p className="bg-primary text-white p-2 rounded">Descreption: {element.descreption}</p>
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