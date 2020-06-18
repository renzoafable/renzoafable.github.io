import React from 'react';

import classes from './Author.module.scss';
import AuthorImage from '../../../assets/images/author-image.jpg';

const Author = (props) => {
  return (
    <div className={classes.author}>
      <figure className={classes.author__figure}>
        <img
          src={AuthorImage}
          alt='Author'
          className={`figure-img img-fluid ${classes.author__figure__img}`}
        />
        <figcaption
          className={`figure-caption text-center ${classes.author__figure__caption}`}>
          <h3>Who am I?</h3>
          <p>
            Hi! I am a {props.occupation} for{' '}
            <a className='link ext-link' href={props.companyUrl}>
              {props.company}
            </a>{' '}
            in {props.companyLocation}. {props.description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Author;
