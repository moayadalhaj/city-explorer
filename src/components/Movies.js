import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Movies extends Component {
  render() {
    return (
      <>
        {this.props.locationName && this.props.moviesData.map((element, index) => {
          if (element.image_url === 'https://image.tmdb.org/t/p/w500null') {
            element.image_url = 'https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-splash-ink-high-end-two-color-film-festival-film-and-television-image_220288.jpg';
          }
          return (<div key={index}>
            <Card className="m-2" style={{ minWidth: '275px' }}>
              <Card.Img variant="top" src={element.image_url} alt={element.title} style={{ height: '180px' }} />
              <Card.Body style={{ height: '275px' }}>
                <Card.Title style={{ height: '65px' }}>{element.title}</Card.Title>
                <Card.Text style={{ height: '115px', fontSize: '16px', overflow: 'hidden' }}>{element.overview}</Card.Text>
                <Card.Text style={{ height: '10px' }} variant="primary">Rate: {element.average_votes} ⭐</Card.Text>
                <Card.Text variant="primary" calassName="ms-5">Released on: {element.released_on}</Card.Text>
              </Card.Body>
            </Card>
          </div>)
        })
        }
      </>
    )
  }
}

export default Movies
