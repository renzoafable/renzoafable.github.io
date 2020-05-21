import React from 'react';

import Header from './components/Navigation/Header/Header';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';

function App() {
  return (
    <>
      <Header />
      <>
        <About />
        <Experience />
      </>
    </>
  );
}

export default App;
