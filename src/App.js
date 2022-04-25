import styled from "styled-components";
import Navigation from "./components/Navigation";
import {
  About,
  Certification,
  Education,
  Project,
} from "./components/sections.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<About />} path="/jerds" />
          <Route element={<Education />} path="/education" />
          <Route element={<Certification />} path="/certification" />
          <Route element={<Project />} path="/project" />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: aliceblue;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
