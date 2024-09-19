import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container-fluid p-5 bg-info mt-5'>
        <Row>
          <Col>
            <h3>Information</h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, vero. Qui, suscipit, reprehenderit possimus quos quisquam cum, quibusdam numquam maxime magnam tempora aliquid saepe recusandae illo soluta exercitationem fugit veritatis.</p>
          </Col>
          <Col>
            <h3>Links</h3>
            <div className='d-flex flex-column'>
              <Link to={'/'}>LANDING</Link>
              <Link to={'/dash'}>HOME</Link>
              <Link to={'/his'}>WATCH hISTORY</Link>
            </div>
          </Col>
          <Col>
            <h3>Contact Us</h3>
            <p className='my-4'>mediapalyer2024@gmail.com</p>
            <textarea name="" className='form-control' id=""></textarea>
            <button className='btn btn-success mt-2'>Send</button>
          </Col>
        </Row>
        <h4 className='text-center'>Mediaplayer &copy; all rights reserved</h4>
      </div>
    </>
  )
}

export default Footer
