import { Carousel } from './components/Carousel';
import React from 'react'
import { Navbar } from './components/Navbar';
import { Servicios } from './components/Servicios';
import { Clientes } from './components/Clientes';
import { Calidad } from './components/Calidad';
import { ProteccionDatos } from './components/ProteccionDatos';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Servicios /> 
      <Clientes />
      <Calidad />
      <ProteccionDatos />
      <Footer />
    </>
  )
};
