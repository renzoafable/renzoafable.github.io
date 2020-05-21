import React from 'react';

import classes from './TechWrapper.module.css';

const TechWrapper = (props) => {
  return (
    <div className={classes.TechWrapper}>
      <div className={classes.TechLabel}>{props.label}</div>
      <div className={classes.TechContent}>
        {props.items.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default TechWrapper;
