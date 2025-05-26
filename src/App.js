import React from "react";
import styled from "styled-components";
import Header from "./components/Header.js";
import { Skills, Education, Project } from "./components/Section.js";
import ParticleComponent from "./components/section/Particles.js";
import MyTimeline from "./components/section/Timeline.js";

function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <Skills />
        <Project />
        <Education />
        <MyTimeline />
      </MainContainer>
      <ParticleComponent />
    </>
  );
}

export default App;

const MainContainer = styled.div`
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
