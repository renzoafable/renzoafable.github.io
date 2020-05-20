import React from 'react';
import Col from 'react-bootstrap/Col';

import classes from './Principle.module.css';

const Principle = (props) => {
  return (
    <Col xs={6} xl={3} className={`px-lg-4 ${classes.Principle}`}>
      {props.icon}
      <>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </>
    </Col>
  );
};

export default Principle;
