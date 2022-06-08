import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p className='mb-1'>&copy; Designed & Developed By:</p>
            <p className='mb-1'> Vansh Maheshwari</p>

            <p className='mt-2'>
              <a
                href='https://www.linkedin.com/in/vansh-maheshwari-0985531a2/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ textDecoration: 'none' }}
              >
                <i className='fab fa-linkedin fa-lg px-2'></i>
              </a>
              <a href='mailto:vansh.maheshwari30@gmail.com'>
                <i className='far fa-envelope fa-lg px-2'></i>
              </a>
              <a
                href='https://github.com/vanshmaheshwari30'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github fa-lg px-2 '></i>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
