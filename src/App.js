import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Location from './components/Location';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      latitude: "",
      longitude: "",
      error: false,
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (!e.target.locationName.value) {
      this.setState({
        error: true
      })
      console.log(this.props.error);
    } else {
      const locationName = e.target.locationName.value;
      let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${locationName}&format=json`;
      axios.get(url).then(res => {
        let data = res.data[0];
        this.setState({
          locationName: data.display_name,
          latitude: data.lat,
          longitude: data.lon,
          error: false
        })
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <Form onSubmit={(e) => { this.submitHandler(e) }} className="m-5 rounded" style={{ maxWidth: "350px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Location Name</Form.Label>
              <Form.Control type="text" name="locationName" placeholder="Enter Location Name" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
        </div>
        <Location locationName={this.state.locationName} latitude={this.state.latitude} longitude={this.state.longitude} error={this.state.error} />
      </div>
    )
  }
}

export default App;
