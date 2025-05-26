import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styled from "styled-components";

export default function AlternateTimeline() {
  return (
    <TimelineContainer>
      <h1>My Timeline</h1>
      <hr />
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ContentContainer>
              <p>March 2024 - present</p>
              <h3>Senior Data Analytics Analyst</h3>
              <span>
                <a href="https://hgs.cx/locations/philippines/">
                  Hinduja Global Solutions Limited
                </a>
              </span>
            </ContentContainer>
            <ContentDescription></ContentDescription>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ContentContainer>
              <ContentHeader>
                <p>January 2023 - November 2023</p>
                <h3>Credit Analyst</h3>
                <span>
                  <a href="https://www.global-creditreports.com/">
                    GlobalCIS Limited
                  </a>
                </span>
              </ContentHeader>
              <ContentDescription></ContentDescription>
            </ContentContainer>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ContentContainer>
              <ContentHeader>
                <p>September 2018 - September 2022</p>
                <h3>Bachelor of Science in Mathematics</h3>
                <span>
                  <a href="https://lspu.edu.ph/">
                    Laguna State Polytechnic University
                  </a>
                </span>
              </ContentHeader>
              <ContentDescription></ContentDescription>
            </ContentContainer>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </TimelineContainer>
  );
}

const ContentContainer = styled.div`
  padding: 20px;
  background-color: rgba(8, 7, 44, 0.4);
  color: white;
  margin: 0 0 20px 0;
`;

const ContentHeader = styled.div`
  span {
    a {
      color: white;
    }
  }
`;

const ContentDescription = styled.div`
  ul {
    li {
    }
  }
`;

const TimelineContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  min-height: 60vh;
  h1 {
    text-align: center;
    color: white;
  }
  hr {
    border: none;
    background-color: rgb(245, 31, 113);
    margin: 10px auto;
    height: 6px;
    width: 30%;
  }
`;
