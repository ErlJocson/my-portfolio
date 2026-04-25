import styled from "styled-components";
import {
  ParticleComponent,
  NavigationBar,
  Projects,
  ContactMe,
} from "./components/Section.js";
import Home from "./components/Home.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MainContainer>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainContainer>
      <ParticleComponent />
    </>
  );
}

export default App;

const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;
