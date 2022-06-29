import './App.css';
import React from 'react'
import MainNav from './components/MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'react-bootstrap'
import { Col, Row, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <body>
        <Container fluid className='Container'>
          <Col className="Header">
            Header
          </Col>
          <Row>
            <Col xs={12} md={8}>
              <h1 className='Tittle'>Projetos</h1>
            </Col>
            <Col xs={6} md={4}>
              <input type="search" name="" id="main-search"/>
            </Col>
          </Row>
        </Container>
        <Button variant="dark">Dark</Button>{' '}
      </body>
      
    </div>
  );
}

export default App;
