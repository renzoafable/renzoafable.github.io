import React from 'react';

import classes from './Author.module.css';
import AuthorImage from '../../../assets/author-image.jpg';

const Author = (props) => {
  return (
    <div className={classes.Author}>
      <figure className={classes.AuthorImage}>
        <img src={AuthorImage} alt='Author' className='figure-img img-fluid' />
        <figcaption className='figure-caption text-center'>
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
