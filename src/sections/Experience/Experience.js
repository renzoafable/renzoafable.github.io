import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import Section from '../../components/UI/Section/Section';
import ExperienceItem from '../../components/Experience/ExperienceItem';

const Experience = () => {
  const [experiences] = useState([
    {
      company: 'Kalibrr',
      companyUrl: 'https://www.kalibrr.com/',
      position: 'Associate Software Engineer',
      start: 'August 2019',
      end: '',
      present: true,
      description: [
        'Works with the Enterprise team to develop and deliver new features in an Agile environment.',
        "Created the demo account for the Sales Team's product demonstrations.",
        'Implemented the new design of the Net Promoter Score survey of the platform.',
        'Assumes the role of Scrum Master on a rotational basis.',
      ],
      stack: ['Angular', 'Pyramid', 'Sass', 'PostgreSQL', 'Kubernetes'],
    },
    {
      company: 'Saperium',
      companyUrl: 'http://www.saperium.com/',
      position: 'Software Engineering Intern',
      start: 'June 2018',
      end: 'July 2018',
      present: false,
      description: [
        "Developed an in-house web application using the company's tech stack and coding practices.",
        'Participated in daily retrospective meetings as part of the software development process.',
      ],
      stack: [
        'Angular',
        'Express',
        'Node',
        'MySQL',
        'Bootstrap',
        'Jasmine',
        'Socket IO',
      ],
    },
  ]);

  return (
    <Section heading='Experience' id='experience'>
      <Container>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </Container>
    </Section>
  );
};

export default Experience;
