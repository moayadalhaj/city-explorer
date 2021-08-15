import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class WeatherDay extends Component {
  render() {
    return (
      <>
        {this.props.locationName && (
          <div>
            <h4 className="p-2 bg-dark text-white d-flex justify-content-center">Weather information for {this.props.locationName}</h4>
            {this.props.weatherData.map((element, index) => {
              return (<div key={index}>
                <Card border="primary" className="mb-2" style={{ height: '100px' }}>
                  <Card.Header>Date: {element.date}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Descreption: {element.description}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>);
            })}
          </div>
        )
        }
      </>
    )
  }
}

export default WeatherDay;