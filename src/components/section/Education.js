import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import Certificates from "./Certificates";

function Education() {
  return (
    <MyContainer>
      <Fade bottom>
        <EducationContainer>
          <div className="header">
            <h3>Laguna State Polytechnic University</h3>
          </div>
          <div className="contents">
            <p>Bachelor of Science in Mathematics</p>
            <span>2018-2022</span>
          </div>
        </EducationContainer>
      </Fade>
      <Certificates />
    </MyContainer>
  );
}

export default Education;

const MyContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: solid white 1px;
`;

const EducationContainer = styled.div`
  padding: 10px;
  margin: 20px 0;
  cursor: pointer;
  background: white;
  text-align: center;
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
