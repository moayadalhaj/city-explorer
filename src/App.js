import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import Location from './components/Location';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
// import dotenv from "dotenv";
// dotenv.config();
const accessToken = process.env.REACT_APP_LOCATION_IQ_TOKEN;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      latitude: "",
      longitude: "",
      error: false,
      weatherData: [],
      locationError: false
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (!e.target.locationName.value) {
      this.setState({
        error: true
      })
    } else {
      const locationName = e.target.locationName.value;
      let url = `https://eu1.locationiq.com/v1/search.php?key=${accessToken}&q=${locationName}&format=json`;
      axios.get(url).then(res => {
        let data = res.data[0];
        this.setState({
          locationName: data.display_name,
          latitude: data.lat,
          longitude: data.lon,
          error: false
        })
      });
      let citiesArray = ['paris', 'seattle', 'amman'];
      if (!citiesArray.includes(locationName.toLowerCase())) {
        this.setState({
          locationError: true
        })
      }
      let url2 = `https://city-explorer-lab07-moayad.herokuapp.com/weather?searchQuery=${locationName}`;
      axios.get(url2).then(res => {
        let newWeatherData = res.data;
        this.setState({
          weatherData: newWeatherData,
          locationError: false
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
        <Container>
          <Row xs={1} md={2} lg={2} >
            <Col>
              <Location locationName={this.state.locationName} latitude={this.state.latitude} longitude={this.state.longitude} error={this.state.error} />
            </Col>
            <Col>
              <Weather locationName={this.state.locationName} weatherData={this.state.weatherData} locationError={this.state.locationError} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
