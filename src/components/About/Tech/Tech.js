import React from 'react';

import classes from './Tech.module.css';
import TechWrapper from './TechWrapper/TechWrapper';

const Tech = (props) => {
  return (
    <div className={classes.Tech}>
      {props.tech.map((item) => (
        <TechWrapper label={item.label} items={item.items} />
      ))}
    </div>
  );
};

export default Tech;
