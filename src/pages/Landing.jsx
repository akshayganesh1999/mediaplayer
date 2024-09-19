import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className="classname container-fluid p-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <h1>MediaPlayer</h1>
            <p style={{ textalign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, numquam necessitatibus. Eos nam exercitationem eaque non, adipisci quas dolorum natus reprehenderit eveniet necessitatibus, minima nostrum rerum saepe rem quasi tempore.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore incidunt, ducimus id quam quo velit blanditiis quis iste ex, obcaecati nesciunt vel ullam aliquid laudantium doloribus. Ipsam, quae fugiat.
            </p>
            <div className="d-grid">
              <Link to={'/dash'} className="btn btn-success">Let's Go</Link>
            </div>
          </Col>
          <Col>
            <img src="https://niceillustrations.com/wp-content/uploads/2020/12/Youtube-Studio-color-800px.png" className='img-fluid' alt="landing" />
          </Col>
        </Row>
      </div>
      <div className="container-fluid p-5 mt-3">
        <h4 className="text-center mb-3">Features</h4>
        <div className="row justify-content-around">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" />
            <Card.Body>
              <Card.Title>Simple Upload</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" />
            <Card.Body>
              <Card.Title>Watch Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/77098/screenshots/2485682/main-icons_2.gif" />
            <Card.Body>
              <Card.Title>Categorize</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className="conatiner-fluid p-5">
        <Row>
          <Col md={8}>
            <h3>Simple and Faster</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officia praesentium, dicta eum magnam blanditiis eligendi quis itaque excepturi odit laudantium? Omnis commodi sit, necessitatibus soluta earum pariatur voluptates culpa.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias consequuntur consectetur modi debitis hic eligendi nulla commodi ut tempore dolor in voluptas possimus, ratione sint nisi optio velit veniam vero!
            </p>
          </Col>
          <Col md={4}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/RVFAyFWO4go?si=uyk7JF7GEemM5P-7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing
