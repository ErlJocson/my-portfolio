import styled from "styled-components";

function Title(props) {
  return <MyTitle>{props.children}</MyTitle>;
}

export default Title;

const MyTitle = styled.h1`
  letter-spacing: 6px;
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 720px) {
    font-size: 23px;
  }
`;
