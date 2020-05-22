import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedin';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';

import classes from './Footer.module.css';

const Footer = () => {
  const [links] = useState([
    {
      link: 'https://github.com/renzoafable',
      icon: <LogoGithub color='#fff' fontSize='1.5rem' />,
    },
    {
      link: 'https://www.linkedin.com/in/renzoafable/',
      icon: <LogoLinkedIn color='#fff' fontSize='1.5rem' />,
    },
    {
      link: 'https://www.instagram.com/lorenzafbl/',
      icon: <LogoInstagram color='#fff' fontSize='1.5rem' />,
    },
  ]);

  return (
    <footer className='bg-dark p-4'>
      <Container>
        <div className={classes.Contact}>
          <div className={classes.Links}>
            {links.map((link, index) => (
              <div key={index} className={classes.LinkContainer}>
                <a href={link.link} target='_blank' rel='noopener noreferrer'>
                  {link.icon}
                </a>
              </div>
            ))}
          </div>
          <div className={classes.Addresses}>
            <p className='text-center text-muted mb-0'>
              Email: renzoafable@gmail.com
            </p>
            <p className='text-center text-muted mb-0'>
              Mobile: +(63) 917 877 4953
            </p>
          </div>
        </div>
        <p className='text-center text-muted text-uppercase mt-2 mt-sm-4 mb-0'>
          Renzo Afable &copy; <span className={classes.Date}>2020</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
