import React from 'react';

import Header from './components/Navigation/Header/Header';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <>
        <About />
        <Experience />
        <Projects />
      </>
    </>
  );
}

export default App;
