import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
function Header() {
  return (
    <HeaderContainer id="header">
      <div>
        <Fade bottom>
          <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" />
          <p>
            <h1>ERL JERRALD JOCSON</h1>I graduated from college on September 16,
            2022 in <em>Laguna State Polytechnic University</em>, where i
            developed problem solving and analytical thinking skills.
          </p>
        </Fade>
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  div {
    width: 800px;
    text-align: center;
    display: flex;
    align-items: center;
    img {
      height: 400px;
      box-shadow: var(--dark-shadow);
      border-radius: 10px;
      margin: 10px;
    }
    p {
      h1 {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        margin: 10px;
        text-align: center;
      }
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f0b0b;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 5%,
    rgba(57, 82, 88, 1) 40%,
    rgba(15, 8, 51, 1) 100%
  );
  color: white;
  overflow: hidden;
  height: 100vh;
  padding: 20px;

  @media screen and (max-width: 800px) {
    & {
      h1 {
        font-size: 25px;
      }
    }
  }
`;
