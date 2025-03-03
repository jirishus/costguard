import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';

const App = () => {
  return (
    <div className="p-5">
      <Header />
      <Hero />
    </div>
  );
};

export default App;