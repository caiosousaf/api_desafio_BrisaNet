import './App.css';
import React from 'react'
import ProjectCard from './components/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'react-bootstrap'
import { Col, Row, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid className='Container'>
        <Row>
          <Col xs={1} md={1} className="Header">
            Header
          </Col>
          <Col md={{ span: 9, offset: 1 }}>
            <Row>
              <Col>
                <h1 className='Tittle'>Projetos</h1>
              </Col>
              <Col md={{ span: 3, offset: 3 }}>
                <input type="search" name="" id="main-search"/>
              </Col>
            </Row>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
