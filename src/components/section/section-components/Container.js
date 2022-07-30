import React from "react";
import styled from "styled-components";

function Container(props) {
  return <MyContainer>{props.children}</MyContainer>;
}

export default Container;

const MyContainer = styled.div`
  width: 90%;
  margin: auto;
`;
