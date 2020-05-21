import React from 'react';
import Container from 'react-bootstrap/Container';

import classes from './Section.module.css';

const Section = (props) => {
  const style = {
    backgroundColor: props.dimmed ? '#f7f7f7' : null,
  };

  return (
    <section id={props.id} className={classes.Section} style={style}>
      <h2 className={classes.Heading}>{props.heading}</h2>
      <Container>{props.children}</Container>
    </section>
  );
};

export default Section;
