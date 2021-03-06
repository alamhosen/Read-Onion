import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'

const Header = () => {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container >
                    <Navbar.Brand as={Link} to="/">
                        <img style={{height:'30px'}} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='login'>Login</Nav.Link>
                            <Nav.Link style={{width:'120px'}} className='btn btn-danger rounded-pill text-white' as={Link} to='signup'>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;