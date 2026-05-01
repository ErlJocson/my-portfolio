import styled from "styled-components";
import { projects } from "./details/ProjectContents";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <ProjectMainContainer>
        {projects.map((project, index) => (
          <ProjectContentsContainer
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectSubTitle>{project.subtitle}</ProjectSubTitle>
          </ProjectContentsContainer>
        ))}
      </ProjectMainContainer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default Projects;

const ProjectMainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
`;

const ProjectContentsContainer = styled.div`
  background-color: rgba(2, 1, 16, 0.9);
  border-left: 3px solid gray;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-width: 700px;
  cursor: pointer;
  transition: all 500ms;

  &:hover {
    border-left: 8px solid #0db3e6;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const ProjectTitle = styled.h3`
  color: white;
  margin: 10px 0;
`;

const ProjectSubTitle = styled.h5`
  color: gray;
`;
