import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Pages/Home/Hero/Hero';

const App = () => {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
