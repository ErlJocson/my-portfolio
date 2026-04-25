import styled from "styled-components";
import {
  Skills,
  ParticleComponent,
  MyTimeline,
  Awards,
  Header,
} from "./components/Section.js";

function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <Awards />
        <Skills />
        <MyTimeline />
        {/* <ContactMe /> */}
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
