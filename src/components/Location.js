import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Location extends Component {
  render() {
    return (this.props.locationName && <div>
      <Card className="m-5" style={{ maxWidth: '350px' }}>
        <Card.Header className="mx-auto">Location Details</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Location Name: {this.props.locationName}</ListGroup.Item>
          <ListGroup.Item>Latitude: {this.props.latitude}</ListGroup.Item>
          <ListGroup.Item>Longitude: {this.props.longitude}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div >
    )
  }
}

export default Location;
