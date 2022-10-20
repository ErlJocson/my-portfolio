import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

const openCertificate = (path) => {
  window.open(path);
};

function Certificates() {
  return (
    <>
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
      <CertificateContainer>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1a_yBwWtaRjOxELoQco93N2b41IKyQjzH/view?usp=sharing"
              );
            }}
          >
            <h3>Analytics, Modelling, and Data Science</h3>
            <p>Laguna State Polytechnic University</p>
            <span>August 2021</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1adkK7mdvvtmflDZGiJEMxDsmejxRCIA-/view?usp=sharing"
              );
            }}
          >
            <h3>Introduction to Data Analysis</h3>
            <p>New Era University</p>
            <span>September 2021</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1VJN_LkpT-dgz3iDZm9plGjGQiQxvn4iC/view?usp=sharing"
              );
            }}
          >
            <h3>Data Analytics with Excel for beginners</h3>
            <p>refocus</p>
            <span> -- </span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1FLLIHnh5C8gJ4jdFKlWZBuZkuoVaT7oX/view?usp=sharing"
              );
            }}
          >
            <h3>How to Start Data Analystics with Python and SQL</h3>
            <p>refocus</p>
            <span> -- </span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/1oSQojMldXOSwhIAqo6W3fZJew7atU9ra/view?usp=sharing"
              );
            }}
          >
            <h3>Oral and Visual Presentation of Research</h3>
            <p>University of the Philippines</p>
            <span>May 2022</span>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className="certificate-details"
            onClick={() => {
              openCertificate(
                "https://drive.google.com/file/d/11p8qLLHwxvqeN0gYWqUky_1AliAfeMP3/view?usp=sharing"
              );
            }}
          >
            <h3>Writing the Manuscript and Getting Published</h3>
            <p>University of the Philippines</p>
            <span>May 2022</span>
          </div>
        </Fade>
      </CertificateContainer>
    </>
  );
}

export default Certificates;

const CertificateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .certificate-details {
    box-shadow: var(--great-shadow);
    border-radius: 10px;
    padding: 10px;
    min-width: 100px;
    background-color: white;
    text-align: center;
    margin: 15px;
    cursor: pointer;
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }

    span {
      font-size: 12px;
    }
  }
  .certificate-details:hover {
    background-color: gray;
  }
`;
