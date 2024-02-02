import React from "react";
import styled from "styled-components";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  max-width: 1300px !important;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1300px) {
    padding: 0 1.5rem;
  }
`

export default App