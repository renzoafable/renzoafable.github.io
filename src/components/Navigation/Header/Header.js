import React from 'react';
import Container from 'react-bootstrap/Container';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__text_box}>
          <h1>
            Hello, I'm <span className={classes.name}>Renzo Afable</span>.
            <br />
            <span className={classes.occupation}>
              I'm a full-stack software engineer.
            </span>
          </h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;
