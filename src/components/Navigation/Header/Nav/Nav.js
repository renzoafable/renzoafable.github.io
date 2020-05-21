import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IosMenu from 'react-ionicons/lib/IosMenu';

import classes from './Nav.module.css';
import Logo from '../../../../assets/logo-white.png';

const Navigation = () => {
  return (
    <Navbar expand='lg' bg='dark' sticky='top' className={classes.Navbar}>
      <Container>
        <Navbar.Brand href='#'>
          <img src={Logo} alt='Logo' className={classes.Logo} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='header-nav' className={classes.Toggle}>
          <IosMenu color='#FFF' fontSize='2rem' />
        </Navbar.Toggle>
        <Navbar.Collapse id='header-nav'>
          <Nav className='text-center ml-auto'>
            <Nav.Item className={classes.LinkContainer}>
              <Nav.Link className={classes.Link} href='#about'>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.LinkContainer}>
              <Nav.Link className={classes.Link} href='#experience'>
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.LinkContainer}>
              <Nav.Link className={classes.Link} href='#projects'>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.ResumeContainer}>
              <Nav.Link
                className={classes.ResumeLink}
                href='https://drive.google.com/open?id=1WZ6lKbF-i-nskIAJvke_WAXpmQjQMLPT'
                target='_blank'>
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
