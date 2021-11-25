import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HeaderBottom from '../HeaderBottom';

function Home() {
  return (
    <>
      <HeroSection />
      <HeaderBottom />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
