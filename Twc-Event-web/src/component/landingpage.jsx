//import React from 'react';
import Hero from './twchero';
import About from './twc';
import Services from './services';
import Gallery from './twcgallery';
import Testimonial from './twctestimonial';
import Team from './team';
import Twc from './twcc';

export default function Home() {
  return (
    <div className="home-page">
      
      <Hero />

      {/* Other Sections */}
      <div className="content-sections">
        <Twc />
        <About />
        <Testimonial />
        <Services />
        <Gallery />  
        <Team />
        {/* Add more sections as needed */}
      </div>
    </div>
  );
}
