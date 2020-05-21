import React from 'react';

import Header from './components/Navigation/Header/Header';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Footer from './components/Navigation/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <>
        <About />
        <Experience />
        <Projects />
      </>
      <Footer />
    </>
  );
}

export default App;
