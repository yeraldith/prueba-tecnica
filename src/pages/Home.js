import React from 'react';
import Nav from "../components/nav.jsx";
import Carousel from '../components/carousel.jsx';
import SeccionNeumomed from "../components/seccionNeumomed.jsx";
import Servicios from "../components/servicios.jsx";
import Footer from "../components/footer.jsx";
import Bottom from "../components/bottom.jsx";

const Home=()=> {
  return (
    <>
      <header className="container">
        <Nav />
      </header>
      <main className="container--fluid">
        <Carousel />
        <SeccionNeumomed />
        <Servicios />
        <Bottom/>
      </main>
      <footer className="container--fluid">
      <Footer/>
      </footer>
    </>
  );
}

export default Home;
