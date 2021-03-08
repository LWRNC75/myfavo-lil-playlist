import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <>
      <Navbar className='bg-light justify-content-between'>
        <Navbar.Brand href='#home'>MYFAVO LIL | PLAYLIST</Navbar.Brand>
        <Nav className='justify-content-end' activeKey='/'>
          <Nav.Item>
            <Link to='/'>Playlist</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/about'>About</Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
