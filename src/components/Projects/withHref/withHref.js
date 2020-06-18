import React from 'react';

import classes from './withHref.module.scss';

const withHref = (WrappedIcon, href) => {
  return (
    <a
      href={href}
      target='_blank'
      className={classes.link}
      rel='noopener noreferrer'>
      <WrappedIcon color='#5e5e5e' />
    </a>
  );
};

export default withHref;
