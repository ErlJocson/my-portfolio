import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { Skills, Education, Project, Contact } from "./components/Section.js";
import Navbar from "./components/section/section-components/Navbar";

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Header />
      <Skills />
      <Education />
      <Project />
      {/* <Contact /> */}
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
