import React from 'react';

import classes from './TechWrapper.module.scss';

const TechWrapper = (props) => {
  return (
    <div className={classes.tech_wrapper}>
      <div className={classes.tech_wrapper__label}>{props.label}</div>
      <div className={classes.tech_wrapper__content}>
        {props.items.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default TechWrapper;
