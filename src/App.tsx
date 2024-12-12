import React from 'react';
import DigitalCard from './components/DigitalCard';

function App() {
  const cardData = {
    name: "Carlos I. Otero E. ",
    title: "Técnico en Informática",
    subtitle: "Desarrollor de Software",
    description: "Apasionado por el desarrollo de software con experiencia en crear soluciones innovadoras y eficientes. Especializado en tecnologías web modernas y comprometido con el aprendizaje continuo.",
    skills: [
      { name: "Front-end" },
      { name: "Backend" },
      { name: "DB" }
    ],
    socialLinks: {
      email: "carlosivanoteroespinosa@gmail.com",
      phone: "https://wa.me/63608997",
      github: "https://github.com/CarlosOtero2/ProyectoIT",
      linkedin: "https://www.linkedin.com/feed/"
    },
    avatar: "/img/Carlos-Otero-Desarrollador-Sotware.jpg"
  };

  return (
    <DigitalCard {...cardData} />
  );
}

export default App;