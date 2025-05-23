import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer id="header">
      <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" />
      <div>
        <h1>ERL JERRALD JOCSON</h1>
        <hr />
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
    border-radius: 10px;
    background-color: rgba(15, 11, 11, 0.9);
    padding: 20px;
    h1 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    p {
      font-size: 15px;
      margin: 10px;
    }

    hr {
      background-color: #0db3e6;
      height: 3px;
      border: none;
      width: 80%;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  height: 80vh;
  background-image: url(${process.env.PUBLIC_URL + "/images/coffee.jpg"});
  background-size: cover;
  background-position: center;
  border-bottom: 6px solid #0db3e6;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    img {
      height: 200px;
      border-radius: 10px;
      margin-bottom: 20px;
      margin-right: 0;
    }

    div {
      margin-left: 0;
      width: 300px;
      p {
        font-size: 12px;
      }
    }
  }
`;
