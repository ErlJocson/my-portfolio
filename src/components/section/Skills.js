import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import Container from "./section-components/Container";

function Skills() {
  const [showProgrammingSkill, setShowProgrammingSkill] = useState(false);
  const [showToolsSkill, setShowToolsSkill] = useState(false);
  const [showSoftSkill, setShowSoftSkill] = useState(false);

  const programmingSkills = [
    "Python",
    "Flask",
    "Django",
    "JavaScript",
    "React",
    "SQL",
    "HTML",
    "CSS",
  ];
  const tools = [
    "Visual studio code",
    "Postman",
    "Windows",
    "Ubuntu",
    "GIT",
    "GitHub",
  ];

  const softSkills = ["Problem-solving", "Analytical thinking", "Teamwork"];

  return (
    <Container>
      <Fade bottom>
        <SkillsContainer
          onClick={() => setShowProgrammingSkill(!showProgrammingSkill)}
        >
          <div className="skill-header gray-hover">
            {showProgrammingSkill ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}
            <h3>Programming skills</h3>
          </div>
          {showProgrammingSkill ? (
            <div className="skill-container">
              {programmingSkills.map((skills, id) => {
                return (
                  <Zoom key={id}>
                    <div>{skills}</div>
                  </Zoom>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </SkillsContainer>
      </Fade>
      <Fade bottom>
        <SkillsContainer onClick={() => setShowToolsSkill(!showToolsSkill)}>
          <div className="skill-header gray-hover">
            {showToolsSkill ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}
            <h3>Tools and technologies</h3>
          </div>
          {showToolsSkill ? (
            <div className="skill-container">
              {tools.map((skill, id) => {
                return (
                  <Zoom key={id}>
                    <div>{skill}</div>
                  </Zoom>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </SkillsContainer>
      </Fade>
      <Fade bottom>
        <SkillsContainer onClick={() => setShowSoftSkill(!showSoftSkill)}>
          <div className="skill-header gray-hover">
            {showSoftSkill ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}
            <h3>Soft skills</h3>
          </div>
          {showSoftSkill ? (
            <div className="skill-container">
              {softSkills.map((skill, id) => {
                return (
                  <Zoom key={id}>
                    <div>{skill}</div>
                  </Zoom>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </SkillsContainer>
      </Fade>
    </Container>
  );
}

export default Skills;

const SkillsContainer = styled.div`
  box-shadow: var(--dark-shadow);
  padding: 20px;
  /*  */
  border: 6px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to left,
    rgba(230, 131, 131, 1) 0%,
    rgba(255, 255, 255, 1) 46%,
    rgba(144, 195, 210, 1) 99%
  );
  /*  */
  margin: 20px 0;
  cursor: pointer;
  background: var(--background-color);
  color: white;

  .skill-container {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    div {
      padding: 15px;
      text-transform: uppercase;
      font-weight: bolder;
      box-shadow: 8px 0px #0db3e6, -8px 0px #0db3e6, 0px 8px #0db3e6,
        0px -8px #0db3e6, 0px 18px #2979ff, -8px 13px #2a6cda, 8px 13px #2a6cda;
      margin: 20px;
      text-align: center;
      background-color: aliceblue;
      border-radius: 10px;
      color: black;
    }
  }

  .skill-header {
    display: flex;
    align-items: center;

    i {
      margin-right: 6px;
      font-weight: bold;
    }
  }
`;
