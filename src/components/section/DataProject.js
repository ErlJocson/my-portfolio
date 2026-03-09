import styled from "styled-components";

function DataProject() {
  return (
    <MyContainer>
      <Title>Data analytics dashboard Portfolio</Title>
      <hr />
      <ProjectContainer>
        <MyProject>
          <h4>Sales Dashboard</h4>
          <div>
            This dashboard identifies which products or items manufactured by a
            company contribute to financial losses, enabling better
            decision-making and cost management
          </div>
        </MyProject>
        <MyProject>
          <h4>Marketing Analytics Dashboard</h4>
          <div>
            This dashboard offers a clear view of marketing performance, helping
            teams track progress, measure impact, and optimize strategies for
            better results
          </div>
        </MyProject>
        <MyProject>
          <h4>Customer Support Dashboard</h4>
          <div>
            This dashboard provides a comprehensive overview of the performance
            metrics for a Customer Service company, enabling stakeholders to
            monitor Key Performance Indicators
          </div>
        </MyProject>
        <MyProject>
          <h4>Financial Performance Dashboard</h4>
          <div>
            This dashboard provides an overview of the company’s financial
            health, supporting informed decisions through clear, up-to-date
            performance insights
          </div>
        </MyProject>
      </ProjectContainer>
    </MyContainer>
  );
}

export default DataProject;

const MyProject = styled.div`
  background-color: rgba(20, 20, 46, 0.8);
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;

  h4 {
    color: white;
    padding-bottom: 10px;
    border-bottom: 5px solid rgb(133, 76, 197);
  }

  div {
    padding: 10px 0;
    color: white;
  }
`;

const ProjectContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

const MyContainer = styled.div`
  background-size: cover;
  background-position: center;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 6px solid #0db3e6;
  background-color: rgba(20, 20, 46, 0.2);

  hr {
    background-color: rgb(245, 31, 113);
    height: 6px;
    border: none;
    width: 150px;
    margin: 10px 0;
    margin: 10px auto;
  }
`;

const Title = styled.h1`
  color: white;
  text-transform: uppercase;
`;
