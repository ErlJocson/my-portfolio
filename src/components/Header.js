import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer id="header">
      <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" />
      <div>
        <h1>ERL JERRALD JOCSON</h1>
        <p>
          I graduated from Laguna State Polytechnic University on September 16,
          2022, where I built a strong foundation in problem-solving and
          analytical thinking.
        </p>
        <p>
          Since then, I've applied these skills in real-world
          settings—leveraging data analytics, automation, and statistical
          modeling to drive business excellence, optimize operations, and
          support data-driven decision-making at scale.
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
    height: 600px;
    margin-right: 50px;
  }
  div {
    width: 500px;
    text-align: center;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    p {
      font-size: 15px;
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
