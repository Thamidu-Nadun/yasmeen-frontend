import React, {Fragment} from 'react';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Banner />
    </Fragment>
  );
};

export default Home;
