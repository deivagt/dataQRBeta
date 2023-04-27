import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Mynavbar.css'

const Mynavbar = ({children}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <a href="/" className='home-link'>
        <figure className='navbar-logo'>
              <img src={require('../../img/logo.jpeg')} alt="" />
            </figure>
        </a>
        <a href="/" className='home-link'>
        <h1 className="navbar-title" >Altamira</h1>
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navbar-button" >
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            {children}
          </Nav>
          {/*<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca un jugador..."
              className="me-2 navbar-search-box"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;