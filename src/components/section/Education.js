import React from "react";
import styled from "styled-components";
import Certificates from "./Certificates";

function Education() {
  return (
    <MyContainer id="education">
      <Title>Background Education</Title>
      <EducationContainer>
        <div className="header">
          <h3>Laguna State Polytechnic University</h3>
        </div>
        <div className="contents">
          <p>Bachelor of Science in Mathematics</p>
          <span>2018-2022</span>
        </div>
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

  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;
  margin: auto;
  margin-bottom: 10px;
  width: 60%;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
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

  @media screen and (max-width: 700px) {
    min-width: 250px;
    .header {
      h3 {
        font-size: 14px;
      }
    }

    .contents {
      font-size: 12.5px;
    }
  }
`;

const Title = styled.h3`
  margin: 30px 0 18px 0;
  color: white;
  text-transform: uppercase;
`;
