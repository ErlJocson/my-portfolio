import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer id="header">
      <img
        src={process.env.PUBLIC_URL + "/profile.jpeg"}
        alt=""
        height="400px"
      />
      <div>
        <h1>ERL JERRALD JOCSON</h1>
        <p>
          I graduated in college on September 16, 2022 from{" "}
          <em>Laguna State Polytechnic University</em>, where i developed
          problem solving and analytical thinking skills.
        </p>
        <p>
          I have experience in developing websites using Python and JavaScript
          which are deployed in the internet using Github pages and Heroku.
        </p>
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  img {
    box-shadow: var(--dark-shadow);
    border-radius: 10px;
  }
  div {
    width: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      text-align: center;
    }
    p {
      font-size: 13px;
      margin: 10px;
    }
  }
  display: flex;
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

  @media screen and (max-width: 800px) {
    flex-direction: column;
    img {
      height: 200px;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    div {
      width: 300px;
    }
  }
`;
