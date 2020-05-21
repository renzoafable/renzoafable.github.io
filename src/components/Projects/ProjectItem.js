import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MdFolderOpen from 'react-ionicons/lib/MdFolderOpen';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import MdOpen from 'react-ionicons/lib/MdOpen';

import classes from './ProjectItem.module.css';
import withHref from './withHref/withHref';

const ProjectItem = (props) => {
  let links = [];

  if (props.repository) {
    links.push(withHref(LogoGithub, props.repository));
  }

  if (props.host) {
    links.push(withHref(MdOpen, props.host));
  }

  return (
    <Col xs={12} sm={6} lg={4} className='mb-4'>
      <Card className={classes.Item}>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>
            <div className='d-flex justify-content-between align-items-center pb-2'>
              <MdFolderOpen color='#5e5e5e' />
              {links.length ? (
                <div className={classes.Links}>
                  {links.map((link, index) =>
                    React.cloneElement(link, { key: index })
                  )}
                </div>
              ) : null}
            </div>
            <h3 className={classes.Title}>{props.name}</h3>
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>

          <Card.Footer className='bg-transparent mt-auto p-0'>
            {props.stack.map((item, index) => (
              <small key={index} className='d-inline-block text-muted mx-2'>
                {item}
              </small>
            ))}
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectItem;
