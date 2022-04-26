import Container from "./components/Container";
import Title from "./components/Title";
import styled from "styled-components";

function Education() {
  return (
    <>
      <Container>
        <Title>Education</Title>
        <SomeContainer>
          <EducationContainer>
            <h3>Laguna State Polytechnic University</h3>
            <p>Bachelors of Science in Mathematics</p>
            <span>2018 - 2022</span>
          </EducationContainer>
          <EducationContainer>
            <h3>Magdalena Integrated National High School</h3>
            <p>Information Communation Technology</p>
            <span>2012 - 2018</span>
          </EducationContainer>
        </SomeContainer>
      </Container>
      <Container>
        <Title>Certification</Title>
        <SomeContainer>
          <CertificateContainer>
            <h3>Fundamentals</h3>
            <img src="" alt="" />
            <p>Sololearn</p>
          </CertificateContainer>
        </SomeContainer>
      </Container>
    </>
  );
}

export default Education;

const SomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const EducationContainer = styled.div`
  text-align: center;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  border: 1px solid rgb(213, 213, 213);
  &:hover {
    box-shadow: 0 2px 6px rgb(118, 118, 118);
  }
`;

const CertificateContainer = styled(EducationContainer)``;
