import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><b>VESIT</b></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home" >Home</Nav.Link>
            <Nav.Link as={Link} to="/Academics" >Academics</Nav.Link>
            <Nav.Link as={Link} to="/Contact" >Contact Us</Nav.Link>

        
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;