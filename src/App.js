import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Skills,
  Education,
  Project,
  Certificates,
} from "./components/Section.js";
import Navigation from "./components/Navigation";

function App() {
  return (
    <MainContainer>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route element={<Skills />} path="/my-portfolio" />
          <Route element={<Education />} path="/education" />
          <Route element={<Project />} path="/project" />
          <Route element={<Certificates />} path="/certificates" />
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
