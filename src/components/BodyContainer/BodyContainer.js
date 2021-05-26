import React from 'react';
import MediaBtn from '../MediaBtn/MediaBtn';
import Parallax from '../Parallax/Parallax';
import Header from '../Header/Header';
import About from '../About/About';
import Container from '../Container/Container';
import Container2 from '../Container2/Container2';
import Container3 from '../Container3/Container3';
import Container4 from '../Container4/Container4';
import Footer from '../Footer/Footer';

import { Link, useLocation } from 'react-router-dom';

export default function BodyContainer() {
  return (
    <div>
      <Parallax />
      <Header />
      <About />
      <Container />
      <Container2 />
      <Container3 />
      <Container4 />
      <Footer />
    </div>
  )
}
