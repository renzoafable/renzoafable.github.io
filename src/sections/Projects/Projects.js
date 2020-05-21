import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import classes from './Projects.module.css';
import Section from '../../components/UI/Section/Section';
import ProjectItem from '../../components/Projects/ProjectItem';

const Projects = () => {
  const [projects] = useState([
    {
      name: 'Flirtly',
      description: 'A web-based dating application similar to tinder.',
      repository: 'https://github.com/renzoafable/flirtly-client',
      stack: ['React', 'React-Bootstrap'],
    },
    {
      name: 'Personal Website v2',
      description:
        'The second version of my personal website. I migrated from using HTML, CSS and JavaScript to React.',
      repository: 'https://github.com/renzoafable/renzoafable.github.io',
      host: 'https://renzoafable.github.io/',
      stack: ['React', 'React-Bootstrap'],
    },
    {
      name: 'Personal Website v1',
      description: 'The first version of my personal website.',
      repository: 'https://github.com/renzoafable/renzoafable.github.io',
      stack: ['HTML', 'Bootstrap', 'Javascript'],
    },
    {
      name: 'Weather IO',
      description:
        'A weather forecast application that displays the weather forecast for a given location',
      repository: 'https://github.com/renzoafable/weather.io-client',
      host: 'https://renzoafable.github.io/weather.io-client/',
      stack: [
        'React',
        'React-Bootstrap',
        'Node',
        'Express',
        'OpenWeatherMap API',
        'Mapbox API',
      ],
    },
    {
      name: 'KDC',
      description:
        "A Windows desktop app for comparing live and recorded dancemovements using Microsoft's Kinect.",
      repository: 'https://github.com/renzoafable/KDC',
      stack: ['C#', 'WPF'],
    },
    {
      name: 'UPLB Testing Center IS',
      description:
        "An information system that will allow Healthcare Facilities to send testing requests online to UPLB's Testing Center for COVID-19.",
      stack: ['React', 'Ant Design', 'Express', 'Node', 'PostgreSQL'],
    },
  ]);

  return (
    <Section heading='Projects' id='projects' dimmed>
      <Container>
        <Row>
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default Projects;
