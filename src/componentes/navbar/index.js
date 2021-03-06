import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar
        variant='dark'
        expand='lg'
      >
        <Navbar.Brand href="/"><h3>DevHipster</h3></Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto text-center'>
            <Nav.Link
              href='/'
            >
              <h4>Cursos</h4>
            </Nav.Link>
            <Nav.Link
              href='/execicios'
            >
              <h4>Exercícios</h4>
            </Nav.Link>
            <Nav.Link
              href='/vagas'
            >
              <h4>Vagas</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;
