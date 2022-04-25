import styled from "styled-components";

function Title(props) {
  return <MyTitle>{props.children}</MyTitle>;
}

export default Title;

const MyTitle = styled.h1`
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`;
