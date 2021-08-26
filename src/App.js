import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;