import React from 'react';
import Container from 'react-bootstrap/Container';

import classes from './Section.module.scss';

const Section = (props) => {
  const style = {
    backgroundColor: props.dimmed ? '#f7f7f7' : null,
  };

  return (
    <section id={props.id} className={classes.section} style={style}>
      <h2 className={classes.section__heading}>{props.heading}</h2>
      <Container>{props.children}</Container>
    </section>
  );
};

export default Section;
