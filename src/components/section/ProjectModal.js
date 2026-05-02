import styled from "styled-components";

function ProjectModal(props) {
  return (
    <>
      <ModalContainer onClick={props.onClose}>
        <Container>
          <ProjectTitle className="border-bottom-blue">
            {props.project.title}
          </ProjectTitle>
          <ProjectSubtitle>{props.project.subtitle}</ProjectSubtitle>
          <ProjectContentContainer>
            {props.project.contents.map((content, index) => (
              <ContentContainer index={index}>{content}</ContentContainer>
            ))}
          </ProjectContentContainer>
        </Container>
      </ModalContainer>
    </>
  );
}

export default ProjectModal;

const ModalContainer = styled.div`
  z-index: 99;
  position: absolute;
  top: 62px;
  bottom: 0;
  background-color: rgba(2, 1, 16, 0.98);
  padding: 30px;
  color: white;
  overflow: auto;
`;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;

  * {
    margin: 10px 0;
    background-color: rgb(2, 1, 16);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ProjectTitle = styled.h1`
  text-align: center;
  padding: 10px 0;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const ProjectSubtitle = styled.h3`
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

const ProjectContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

const ContentContainer = styled.p`
  padding: 20px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding: 10px;
  }
`;
