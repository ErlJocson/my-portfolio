import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import Certificates from "./Certificates";

function Education() {
  return (
    <MyContainer>
      <Title>Background Education</Title>
      <EducationContainer>
        <Fade bottom>
          <div className="header">
            <h3>Laguna State Polytechnic University</h3>
          </div>
          <div className="contents">
            <p>Bachelor of Science in Mathematics</p>
            <span>2018-2022</span>
          </div>
        </Fade>
      </EducationContainer>
      <Title>Certificates</Title>
      <Certificates />
    </MyContainer>
  );
}

export default Education;

const MyContainer = styled.div`
  min-height: 100vh;
  display: flex;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const EducationContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  background: white;
  text-align: center;
  box-shadow: var(--great-shadow);
  border-radius: 10px;
  font-size: 15px;
  &:hover {
    background-color: white;
  }

  .contents {
    span {
      color: gray;
    }
  }
`;

const Title = styled.h3`
  margin: 30px 0 18px 0;
  color: white;
  text-transform: uppercase;
`;
