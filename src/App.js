import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { Skills, Education, Project } from "./components/Section.js";

function App() {
  return (
    <MainContainer>
      <Header />
      <Skills />
      <Education />
      <Project />
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
