import React from 'react';

import classes from './Tech.module.scss';
import TechWrapper from './TechWrapper/TechWrapper';

const Tech = (props) => {
  return (
    <div className={classes.tech}>
      {props.tech.map((item, index) => (
        <TechWrapper key={index} label={item.label} items={item.items} />
      ))}
    </div>
  );
};

export default Tech;
