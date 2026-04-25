import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styled from "styled-components";
import { contents } from "./details/TimelinesContents";
import { useTheme, useMediaQuery } from "@mui/material";

export default function AlternateTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TimelineContainer className="border-bottom-blue" id="experience">
      <h1>MY DATA JOURNEY</h1>
      <hr />

      {isMobile ? (
        <>
          {contents.map((content, index) => (
            <MobileTimelineItem key={index}>
              <MobileTimelineContent>
                <MobileContentContainer>
                  <MobileContentHeader>
                    <p>{content.date}</p>
                    <h3>{content.position}</h3>
                    <span>
                      <a
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.company}
                      </a>
                    </span>
                    <div />
                  </MobileContentHeader>

                  <MobileContentDescription>
                    <ul>
                      {content.descriptions.map((text, i) => (
                        <li
                          key={i}
                          className={
                            content.leftcontents ? "left-contents" : ""
                          }
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </MobileContentDescription>
                </MobileContentContainer>
              </MobileTimelineContent>
            </MobileTimelineItem>
          ))}
        </>
      ) : (
        <ThisTimeline position="alternate">
          {contents.map((content, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== contents.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent>
                <ContentContainer>
                  <ContentHeader>
                    <p>{content.date}</p>
                    <h3>{content.position}</h3>
                    <span>
                      <a
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.company}
                      </a>
                    </span>
                    <div />
                  </ContentHeader>

                  <ContentDescription>
                    <ul className={content.leftcontents ? "left-contents" : ""}>
                      {content.descriptions.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </ContentDescription>
                </ContentContainer>
              </TimelineContent>
            </TimelineItem>
          ))}
        </ThisTimeline>
      )}
    </TimelineContainer>
  );
}

const ThisTimeline = styled(Timeline)`
  width: 80%;
  margin: 20px auto 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  background-color: rgba(8, 7, 44, 0.9);
  box-shadow: var(--dark-shadow);
  color: white;
  margin: 0 0 20px 0;
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

const ContentHeader = styled.div`
  span {
    a {
      color: white;
    }
  }
  div {
    border: none;
    height: 6px;
    background-color: rgb(133, 76, 197);
    margin: 10px 0;
  }
`;

const ContentDescription = styled.div`
  ul {
    margin: 0 10px;
    li {
      margin: 10px 0;
    }
  }

  .left-contents {
    text-align: left;
  }
`;

const TimelineContainer = styled.div`
  min-height: 60vh;
  background-image: url(${process.env.PUBLIC_URL + "/images/timeline.jpg"});
  background-size: cover;
  background-position: center;
  padding: 30px 0;
  overflow: hidden;
  h1 {
    text-align: center;
    color: white;
  }
  hr {
    border: none;
    background-color: rgb(245, 31, 113);
    margin: 10px auto 0;
    height: 6px;
    width: 30%;
  }

  @media screen and (max-width: 800px) {
    padding: 10px 0;
    h1 {
      font-size: 20px;
    }
  }
`;

const MobileTimelineItem = styled.div`
  background-color: rgba(8, 7, 44, 0.9);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  color: white;
`;

const MobileTimelineContent = styled.div``;

const MobileContentHeader = styled.div`
  margin: 10px 0;
  p {
    font-size: 12px;
  }

  h3 {
    font-size: 15px;
  }

  span {
    font-size: 12px;

    a {
      color: white;
    }
  }
`;

const MobileContentContainer = styled.div``;

const MobileContentDescription = styled.div`
  ul {
    margin: 0px 12px;

    li {
      margin: 4px 0;
    }
  }
  font-size: 12px;
`;
