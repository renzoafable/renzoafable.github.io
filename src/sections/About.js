import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IosPhonePortrait from 'react-ionicons/lib/IosPhonePortrait';
import IosTimerOutline from 'react-ionicons/lib/IosTimerOutline';
import IosPerson from 'react-ionicons/lib/IosPerson';
import IosJet from 'react-ionicons/lib/IosJet';

import Section from '../components/UI/Section/Section';
import Principle from '../components/About/Principle/Principle';
import Author from '../components/About/Author/Author';
import Tech from '../components/About/Tech/Tech';

const iconStyle = {
  color: '#0493b0',
  fontSize: '5rem',
};

const About = () => {
  const [about] = useState({
    principles: [
      {
        title: 'Responsive',
        description: 'My layouts work on any device.',
        icon: <IosPhonePortrait {...iconStyle} />,
      },
      {
        title: 'Fast',
        description: 'I develop websites with fast load times in mind.',
        icon: <IosTimerOutline {...iconStyle} />,
      },
      {
        title: 'User-friendly',
        description: 'I prefer creating easy to use UI/UX.',
        icon: <IosPerson {...iconStyle} />,
      },
      {
        title: 'Dynamic',
        description: 'I like making websites come to life.',
        icon: <IosJet {...iconStyle} />,
      },
    ],
    occupation: 'full-stack software engineer',
    company: 'Kalibrr',
    companyUrl: 'https://www.kalibrr.com/',
    companyLocation: 'Makati City, Philippines',
    description:
      'I have a serious passion for web development. I primarily use JavaScript but I am also more than willing to learning new things.',
    tech: [
      {
        label: 'languages',
        items: ['HTML', 'CSS', 'JavaScript/TypeScript', 'Python', 'C#'],
      },
      {
        label: 'front-end',
        items: [
          'Angular',
          'React',
          'Bootstrap',
          'Semantic UI',
          'Grommet',
          'Ant Design',
        ],
      },
      {
        label: 'back-end',
        items: ['Node+Express', 'Pyramid'],
      },
      {
        label: 'databases',
        items: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB'],
      },
      {
        label: 'design',
        items: ['Lightroom', 'Photoshop', 'Figma'],
      },
    ],
  });

  return (
    <Section heading='About' id='about' dimmed>
      <Row className='mb-5'>
        {about.principles.map((principle, index) => (
          <Principle
            key={index}
            icon={principle.icon}
            title={principle.title}
            description={principle.description}
          />
        ))}
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Author
            occupation={about.occupation}
            company={about.company}
            companyUrl={about.companyUrl}
            companyLocation={about.companyLocation}
            description={about.description}
          />
        </Col>
        <Col xs={12} lg={6}>
          <Tech tech={about.tech} />
        </Col>
      </Row>
    </Section>
  );
};

export default About;
