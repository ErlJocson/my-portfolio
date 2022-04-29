import Container from "./components/Container";
import Title from "./components/Title";
import styled from "styled-components";
import certificates from "./link/cert";
import { useState } from "react";
import Modal from "./components/Modal";

function Education() {
  const [modal, setModal] = useState(false);
  const [imageDir, setIMGDir] = useState("");

  const openModal = (imgDirectory) => {
    setModal(!modal);
    setIMGDir(imgDirectory);
  };

  return (
    <>
      {modal ? (
        <Modal
          image={imageDir}
          closeModalFunction={() => {
            setModal(!modal);
          }}
        />
      ) : (
        ""
      )}
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
          {certificates.map((certificate, id) => (
            <CertificateContainer
              key={id}
              onClick={() =>
                openModal(process.env.PUBLIC_URL + certificate.image)
              }
            >
              <h3>{certificate.courseTitle}</h3>
              <img src={process.env.PUBLIC_URL + certificate.image} alt="" />
              <p>{certificate.school}</p>
            </CertificateContainer>
          ))}
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
  padding: 10px;
  border-radius: 20px;
  background-color: white;
  transition: 300ms all ease;
  cursor: pointer;
  border: 1px solid rgb(213, 213, 213);
  &:hover {
    box-shadow: 0 2px 6px rgb(118, 118, 118);
  }

  span {
    color: gray;
  }

  @media screen and (max-width: 720px) {
    h3 {
      font-size: 15px;
    }

    p {
      font-size: 12px;
    }

    span {
      font-size: 12px;
    }
  }
`;

const CertificateContainer = styled(EducationContainer)`
  width: 300px;
  img {
    margin: 10px 0;
    height: 150px;
    width: 250px;
  }

  @media screen and (max-width: 720px) {
    width: 250px;
    img {
      height: 100px;
      width: 200px;
      margin: 5px 0;
    }
  }
`;
