import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css' ;

const Header = () => {
    return (
<nav>
<Navbar bg="primary" data-bs-theme="dark">
    <Container>
        <div><Navbar.Brand className='fs-3' href="" >Career-Hub</Navbar.Brand></div>
        <div><Nav className="me-auto">
            <Nav.Link > <Link to='/'> Home </Link> </Nav.Link>
            <Nav.Link>  <Link to='stats'> Statistics </Link> </Nav.Link>
            <Nav.Link > <Link to='appliedjob'> Applied Job </Link> </Nav.Link>
            <Nav.Link > <Link to='blog'> Blog </Link> </Nav.Link>
        </Nav></div>

        <div>
            <button className='btn btn-success'> Start Applying </button>
        </div>
    </Container>
</Navbar>
</nav>
    );
};

export default Header;