import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import Container from "./section-components/Container";

function Skills() {
  const [showProgrammingSkill, setShowProgrammingSkill] = useState(false);
  const [showToolsSkill, setShowToolsSkill] = useState(false);
  const [showSoftSkill, setShowSoftSkill] = useState(false);

  return (
    <Container>
      <Fade bottom>
        <SkillsContainer
          onClick={() => setShowProgrammingSkill(!showProgrammingSkill)}
        >
          <div className="skill-header">
            {showProgrammingSkill ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}
            <h3>Programming skills</h3>
          </div>
          {showProgrammingSkill ? (
            <div className="skill-container">
              <ul>
                <Zoom>
                  <li>Python</li>
                  <li>Flask</li>
                  <li>Django</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>SQL</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </Zoom>
              </ul>
            </div>
          ) : (
            ""
          )}
        </SkillsContainer>
      </Fade>
      <Fade bottom>
        <SkillsContainer onClick={() => setShowToolsSkill(!showToolsSkill)}>
          <div className="skill-header">
            {showToolsSkill ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}
            <h3>Tools and technologies</h3>
          </div>
          {showToolsSkill ? (
            <div className="skill-container">
              <ul>
                <Zoom>
                  <li>Visual studio code</li>
                  <li>Postman</li>
                  <li>Windows</li>
                  <li>Ubuntu</li>
                  <li>GIT</li>
                  <li>GitHub</li>
                </Zoom>
              </ul>
            </div>
          ) : (
            ""
          )}
        </SkillsContainer>
      </Fade>
      <Fade bottom>
        <SkillsContainer onClick={() => setShowSoftSkill(!showSoftSkill)}>
          <div className="skill-header">
            {showSoftSkill ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}
            <h3>Soft skills</h3>
          </div>
          {showSoftSkill ? (
            <div className="skill-container">
              <ul>
                <Zoom>
                  <li>Problem-solving</li>
                  <li>Analytical thinking</li>
                  <li>Teamwork</li>
                </Zoom>
              </ul>
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
  border-radius: 10px;
  margin: 20px 0;
  cursor: pointer;
  background: var(--background-color);
  color: white;
  &:hover {
    background-color: white;
  }

  .skill-container {
    ul {
      margin-top: 10px;
      margin-left: 60px;
      li {
        margin: 4px 0;
      }
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
