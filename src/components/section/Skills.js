import Container from "./section-components/Container";
import styled from "styled-components";
import { useState } from "react";

function Skills() {
  const [showProgrammingSkill, setShowProgrammingSkill] = useState(false);
  const [showToolsSkill, setShowToolsSkill] = useState(false);
  const [showSoftSkill, setShowSoftSkill] = useState(false);

  return (
    <Container>
      <SkillsContainer
        onClick={() => setShowProgrammingSkill(!showProgrammingSkill)}
      >
        <div className="skill-header">
          {showProgrammingSkill ? (
            <i class="fa-solid fa-minus"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
          <h3>Programming skills</h3>
        </div>
        {showProgrammingSkill ? (
          <div className="skill-container">
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>Django</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </SkillsContainer>
      <SkillsContainer onClick={() => setShowToolsSkill(!showToolsSkill)}>
        <div className="skill-header">
          {showToolsSkill ? (
            <i class="fa-solid fa-minus"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
          <h3>Tools and technologies</h3>
        </div>
        {showToolsSkill ? (
          <div className="skill-container">
            <ul>
              <li>Visual studio code</li>
              <li>Postman</li>
              <li>Windows</li>
              <li>Ubuntu</li>
              <li>GIT</li>
              <li>GitHub</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </SkillsContainer>
      <SkillsContainer onClick={() => setShowSoftSkill(!showSoftSkill)}>
        <div className="skill-header">
          {showSoftSkill ? (
            <i class="fa-solid fa-minus"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
          <h3>Soft skills</h3>
        </div>
        {showSoftSkill ? (
          <div className="skill-container">
            <ul>
              <li>Problem-solving</li>
              <li>Analytical thinking</li>
              <li>Teamwork</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </SkillsContainer>
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
    }
  }
`;
