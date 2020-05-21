import React from 'react';

import classes from './ExperienceItem.module.css';

const ExperienceItem = (props) => {
  return (
    <div className='px-4 py-3 mb-3 border rounded shadow-sm'>
      <div className={classes.Header}>
        <a
          className='text-uppercase link'
          href={props.companyUrl}
          target='_blank'
          rel='noopener noreferrer'>
          {props.company}
        </a>
        <div>
          <p>{props.position}</p>
          <p>
            {props.start} - {props.present ? 'Present' : props.end}
          </p>
        </div>
      </div>
      <hr />
      <ul className={classes.Details}>
        {props.description.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
