import React from "react";
import styled from "styled-components";
import Certificates from "./Certificates";

function Education() {
  return (
    <MyContainer id="education">
      <Title>Credentials that Counts</Title>
      <hr />

      <Certificates />
    </MyContainer>
  );
}

export default Education;

const MyContainer = styled.div`
  border-bottom: 6px solid #0db3e6;
  min-height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;
  margin: auto;

  hr {
    background-color: rgb(245, 31, 113);
    height: 6px;
    border: none;
    width: 150px;
    margin: 10px 0;
  }
`;

const Title = styled.h1`
  margin: 30px 0 0;
  text-align: center;
  color: white;
  text-transform: uppercase;
`;
