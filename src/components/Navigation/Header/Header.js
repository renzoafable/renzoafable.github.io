import React from 'react';
import Container from 'react-bootstrap/Container';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.Header}>
      <Container>
        <div className={classes.HeaderTextBox}>
          <h1>
            Hello, I'm <span className={classes.Name}>Renzo Afable</span>.
            <br />
            <span className={classes.Occupation}>
              I'm a full-stack software engineer.
            </span>
          </h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;
