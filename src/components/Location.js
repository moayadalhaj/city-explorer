import React, { Component } from 'react';
import { Card, Alert } from 'react-bootstrap';

class Location extends Component {
  render() {
    return (<>
      {
        this.props.error && (<Alert variant="danger" className="ms-5" style={{ width: '300px' }}>
          <Alert.Heading>Error</Alert.Heading>
          <p>Unable to geocode</p>
        </Alert>)
      }

      {this.props.locationName && (<Card className="mx-auto" style={{ width: '700px', height: '400px' }}>
        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&center=${this.props.latitude},${this.props.longitude}&zoom=16&size=700x400&markers=icon:large-red-cutout|${this.props.latitude},${this.props.longitude}`} alt="map" />
        <Card.Body className="bg-dark">
          <Card.Title className="text-white mb-2">{this.props.locationName}</Card.Title>
          <Card.Text className="bg-primary text-white p-2 rounded" style={{ width: "200px" }}>Latitude: {this.props.latitude}</Card.Text>
          <Card.Text className="bg-primary text-white p-2 rounded" style={{ width: "200px" }}>Longitude: {this.props.longitude}</Card.Text>
        </Card.Body>
      </Card>)}
    </>
    )
  }
}

export default Location;
