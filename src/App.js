import React from 'react';

import Header from './components/Navigation/Header/Header';
import Nav from './components/Navigation/Header/Nav/Nav';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './components/Navigation/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
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
