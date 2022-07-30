import Container from "./section-components/Container";
import styled from "styled-components";
import { useState } from "react";

function Education() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Container>
      <EducationContainer onClick={() => setShowDetails(!showDetails)}>
        <div className="header">
          <h3>Laguna State Polytechnic University</h3>
        </div>
        <div className="contents">
          <p>Bachelor of Science in Mathematics</p>
          <span>2018-2022</span>
        </div>
        {showDetails ? (
          <div className="other-details">
            <ul>
              <li>
                <strong>Thesis title:</strong> A Survival Analysis of Dropout in
                the Academic Year of 2020-2021 using Cox Proportional Hazard
                Regression
              </li>
              <li>
                <strong>Relevant courseworks:</strong>
                <ul>
                  <li>Fundamentals of Computing I (grade: 2.25)</li>
                  <li>Fundamentals of Computing II (grade: 1.50)</li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </EducationContainer>
      <EducationContainer>
        <div className="header">
          <h3>Magdalena Integrated National High School</h3>
        </div>
        <div className="contents">
          <p>Information Communication Technology</p>
          <span>2016-2018</span>
        </div>
      </EducationContainer>
    </Container>
  );
}

export default Education;

const EducationContainer = styled.div`
  box-shadow: var(--dark-shadow);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  cursor: pointer;
  background: var(--background-color);
  color: white;
  &:hover {
    background-color: white;
  }

  .other-details {
    margin-top: 10px;
    ul {
      margin-left: 30px;
    }
  }

  .contents {
    span {
      color: gray;
    }
  }
`;