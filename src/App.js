import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import Location from './components/Location';
import Weather from './components/Weather';
import Movies from './components/Movies';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      moviesData: [],
      message: ""
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
        axios.get(`https://city-explore-api-moayad.netlify.app/weather?lat=${data.lat}&lon=${data.lon}`).then(res => {
          let newWeatherData = res.data.data.slice(0, 6);
          this.setState({
            weatherData: newWeatherData,
            message: res.data.message
          })
        });
        axios.get(`https://city-explore-api-moayad.netlify.app/movies?query=${locationName}`).then(res => {
          this.setState({
            moviesData: res.data
          })
        });
      });
    }
  }
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
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
        <Container className="pb-3">
          {this.state.message && (<p className='alert alert-secondary text-center fs-4 rounded' style={{ maxWidth: '300px' }}>{this.state.message}</p>)}
          <Row xs={1} md={2} lg={2} >
            <Col>
              <Location locationName={this.state.locationName} latitude={this.state.latitude} longitude={this.state.longitude} error={this.state.error} />
            </Col>
            <Col>
              <Weather locationName={this.state.locationName} weatherData={this.state.weatherData} />
            </Col>
          </Row>
          {this.state.locationName && (
            <h4 className="p-3 bg-dark text-white d-flex justify-content-center">Suggestion Movies For You</h4>)}
          <Row xs={1} md={3} lg={4}>
            <Movies locationName={this.state.locationName} moviesData={this.state.moviesData} />
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default App;
