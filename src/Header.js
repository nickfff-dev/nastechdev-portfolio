import React from "react";
import {
  Navbar,
  Nav,
  
  Container,
  
} from "react-bootstrap";



class Header extends React.Component{
    render(){
      return (
          <Container >
          <Navbar
            collapseOnSelect
            expand="md"
          bg="none"
          variant="dark"
            className="mt-3"
            
        >
            <Container>
            <Navbar.Brand href="/">Nas_Tech</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="text-white" >
                
                 Home
    
               
              </Nav.Link>
              <Nav.Link  className="text-white" href="#portfolio" eventKey={2}>
            Portfolio
              </Nav.Link>
              <Nav.Link  className="text-white" href="#contact" eventKey={2}>
            Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
            </Container>
          </Navbar>
          </Container>
            
        )
    }
}

export default Header;
