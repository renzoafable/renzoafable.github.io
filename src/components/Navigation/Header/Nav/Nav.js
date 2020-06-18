import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IosMenu from 'react-ionicons/lib/IosMenu';

import classes from './Nav.module.scss';
import logo from '../../../../assets/images/logo-white.png';

const Navigation = () => {
  const sections = ['about', 'experience', 'projects'];

  return (
    <Navbar
      collapseOnSelect={true}
      expand='lg'
      bg='dark'
      sticky='top'
      className={classes.navbar}>
      <Container>
        <Navbar.Brand href='#'>
          <img src={logo} alt='Logo' className={classes.navbar__logo} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls='header-nav'
          className={classes.navbar__toggle}>
          <IosMenu color='#FFF' fontSize='2rem' />
        </Navbar.Toggle>
        <Navbar.Collapse id='header-nav'>
          <Nav className='text-center ml-auto'>
            {sections.map((section, index) => (
              <Nav.Item key={index} className={classes.navbar__link_container}>
                <Nav.Link className={classes.navbar__link} href={`#${section}`}>
                  {section}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className={classes.navbar__resume_container}>
              <Nav.Link
                className={classes.resume__link}
                href='https://drive.google.com/open?id=1n42h8WQX9ym_NTMP-U_3qBfneH6v6snE'
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
