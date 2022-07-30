import React from "react";
import Container from "./section-components/Container";
import styled from "styled-components";
import { Fade } from "react-reveal";

const openCertificate = (path) => {
  window.open(path);
};

function Certificates() {
  return (
    <Container>
      <CertificateContainer>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() =>
              openCertificate(
                "https://drive.google.com/file/d/1wU2WkOgujhnZJQxcjks9u4U6dpZ0xMb9/view?usp=sharing"
              )
            }
          >
            <h3>Python Data Structures</h3>
            <p>Sololearn</p>
            <span>November 2021</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1DUnB7TPiwmueaCbVIyrR7oPBMzexHgAJ/view?usp=sharing"
              );
            }}
          >
            <h3>CSS Course</h3>
            <p>Sololearn</p>
            <span>November 2021</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1cz0Ai2Wzv4nXhcikDwnbWlwIiG5wj0mw/view?usp=sharing"
              );
            }}
          >
            <h3>GIT Training</h3>
            <p>Simplilearn</p>
            <span>March 2022</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1xlJIJ8cnOUzQAtTdppAhokAXi0BJ099D/view?usp=sharing"
              );
            }}
          >
            <h3>HTML Course</h3>
            <p>Sololearn</p>
            <span>November 2021</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1j500EqQrfpfqyWX1L-Iwz08Qk3VcJ_kb/view?usp=sharing"
              );
            }}
          >
            <h3>HTML Workshop</h3>
            <p>GeeksforGeeks</p>
          </div>
          <Fade bottom></Fade>

          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1R1AZx9v2P1tU1a-HynpvYOnUCR4X3rRp/view?usp=sharing"
              );
            }}
          >
            <h3>JavaScript for Beginners</h3>
            <p>Simplilearn</p>
            <span>March 2022</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1WS5OrNdrDZgke1Cq_tAeLH535lBjHIza/view?usp=sharing"
              );
            }}
          >
            <h3>Introduction to Python</h3>
            <p>Datacamp</p>
            <span>September 2021</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1WOJJ0AGWoC3425lPKZ4pDNTCbFR4BWy3/view?usp=sharing"
              );
            }}
          >
            <h3>Introduction to SQL</h3>
            <p>Datacamp</p>
            <span>September 2021</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1C97LQQlTRchnMN1dkS115zu1xcOLCz1D/view?usp=sharing"
              );
            }}
          >
            <h3>Introduction to SQL</h3>
            <p>Simplilearn</p>
            <span>March 2022</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1HN4wQsyw8O0ofGidJrLQ6PC11lnXD1z-/view?usp=sharing"
              );
            }}
          >
            <h3>jQuery Course</h3>
            <p>Sololearn</p>
            <span>March 2022</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1ntE9AXjCfRRx8e0oj4YW5hp77Rh2rnPS/view?usp=sharing"
              );
            }}
          >
            <h3>React + Redux</h3>
            <p>Sololearn</p>
            <span>Novermber 2021</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1QOzaESyU4zVzuBCKiJexuRxrXia8eFhR/view?usp=sharing"
              );
            }}
          >
            <h3>Web Development Fundamentals</h3>
            <p>Sololearn</p>
            <span>March 2022</span>
          </div>
        </Fade>
      </CertificateContainer>
    </Container>
  );
}

export default Certificates;

const CertificateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  .certificate-details {
    padding: 20px;
    min-width: 300px;
    background: var(--background-color);
    color: white;
    box-shadow: var(--dark-shadow);
    border-radius: 10px;
    text-align: center;
    margin: 10px;
    &:hover {
      background-color: white;
      cursor: pointer;
    }
  }
`;
