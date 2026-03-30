import styled from "styled-components";
import Header from "./components/Header.js";
import {
  Skills,
  ParticleComponent,
  MyTimeline,
  Awards
} from "./components/Section.js";


function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <Awards />
        <Skills />
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
