import Container from "./section-components/Container";
import styled from "styled-components";

function Certificates() {
  return (
    <Container>
      <CertificateContainer>
        <div className="certificate-details">
          <h3>Python Data Structures</h3>
          <p>Sololearn</p>
          <span>November 2021</span>
        </div>
        <div className="certificate-details">
          <h3>CSS Course</h3>
          <p>Sololearn</p>
          <span>November 2021</span>
        </div>
        <div className="certificate-details">
          <h3>GIT Training</h3>
          <p>Simplilearn</p>
          <span>March 2022</span>
        </div>
        <div className="certificate-details">
          <h3>HTML Course</h3>
          <p>Sololearn</p>
          <span>November 2021</span>
        </div>
        <div className="certificate-details">
          <h3>HTML Workshop</h3>
          <p>GeeksforGeeks</p>
        </div>
        <div className="certificate-details">
          <h3>Introduction to JavaScript</h3>
          <p>Simplilearn</p>
          <span>March 2022</span>
        </div>
        <div className="certificate-details">
          <h3>Introduction to Python</h3>
          <p>Datacamp</p>
          <span>September 2021</span>
        </div>
        <div className="certificate-details">
          <h3>Introduction to SQL</h3>
          <p>Datacamp</p>
          <span>September 2021</span>
        </div>
        <div className="certificate-details">
          <h3>Introduction to SQL</h3>
          <p>Datacamp</p>
          <span>March 2022</span>
        </div>
        <div className="certificate-details">
          <h3>jQuery Course</h3>
          <p>Sololearn</p>
          <span>March 2022</span>
        </div>
        <div className="certificate-details">
          <h3>React + Redux</h3>
          <p>Sololearn</p>
          <span>Novermber 2021</span>
        </div>
        <div className="certificate-details">
          <h3>Web Development Fundamentals</h3>
          <p>Sololearn</p>
          <span>March 2022</span>
        </div>
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
    box-shadow: var(--dark-shadow);
    border-radius: 10px;
    text-align: center;
    margin: 20px;
    &:hover {
      background-color: white;
      cursor: pointer;
    }
  }
`;
