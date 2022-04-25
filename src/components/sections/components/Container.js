import styled from "styled-components";

function Container(props) {
  return <MyContainer>{props.children}</MyContainer>;
}

export default Container;

const MyContainer = styled.div`
  margin: 10px;
  padding: 10px 0;
  margin-left: 50px;
  min-height: 50vh;
`;
