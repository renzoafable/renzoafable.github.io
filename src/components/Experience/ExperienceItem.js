import React from 'react';

import classes from './ExperienceItem.module.scss';

const ExperienceItem = (props) => {
  return (
    <div
      className={`px-4 py-3 mb-3 border rounded shadow-sm ${classes.experience}`}>
      <div className={classes.experience__header}>
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
      <ul className={classes.experience__details}>
        {props.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li>
          <em>Tech stack</em>: {props.stack.join(', ')}
        </li>
      </ul>
    </div>
  );
};

export default ExperienceItem;
