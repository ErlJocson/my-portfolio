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
      <h1>MY DATA JOURNEY</h1>
      <hr />
      <ThisTimeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ContentContainer>
              <ContentHeader>
                <p>March 2024 - present</p>
                <h3>Senior Data Analytics Analyst</h3>
                <span>
                  <a href="https://hgs.cx/locations/philippines/">
                    Hinduja Global Solutions Limited
                  </a>
                </span>
                <div />
              </ContentHeader>
              <ContentDescription>
                <ul>
                  <li>
                    Achieved $100K+ in cost savings through automation, case
                    studies, and dashboard development
                  </li>
                  <li>
                    Automated monthly business reviews for 20+ accounts, cutting
                    effort by 90% and enabling real-time insights via Power BI
                  </li>
                  <li>
                    Built predictive models for talent acquisition and attrition
                    using advanced statistical techniques like Factor Analysis
                    and Survival Analysis
                  </li>
                  <li>
                    Developed and maintained high-performance dashboards for
                    financial data with millions of rows
                  </li>
                  <li>
                    Created an end-to-end data pipeline using Python/JavaScript
                    and web scraping, reducing manual work by 95% and automating
                    weekly reporting
                  </li>
                </ul>
              </ContentDescription>
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
                <p>January 2023 - November 2023</p>
                <h3>Credit Analyst</h3>
                <span>
                  <a href="https://www.global-creditreports.com/">
                    GlobalCIS Limited
                  </a>
                </span>
                <div />
              </ContentHeader>
              <ContentDescription>
                <ul>
                  <li className="left-contents">
                    Performed interviews via telephone calls to collect and
                    verify crucial data found via research necessary for
                    accomplishing credit reports
                  </li>
                  <li className="left-contents">
                    Prepared comprehensive reports of businesses legally exists
                    nationally and internationally
                  </li>
                  <li className="left-contents">
                    Examined financial statement of companies to identify its
                    credit-worthiness
                  </li>
                  <li className="left-contents">
                    Investigate the products and services of a company to assess
                    their viability and competitiveness in the market
                  </li>
                  <li className="left-contents">
                    Updates financial statements of Public Listed Companies from
                    different countries that are existing in the database of the
                    company
                  </li>
                </ul>
              </ContentDescription>
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
                <div />
              </ContentHeader>
              <ContentDescription>
                <ul>
                  <li>
                    Developed strong foundations in statistical analysis and
                    data modeling
                  </li>
                  <li>Mastered fundamentals of Python</li>
                  <li>
                    Completed project including programming, data visualization,
                    and data analysis
                  </li>
                  <li>Strengthened problem-solving and critical thinking</li>
                </ul>
              </ContentDescription>
            </ContentContainer>
          </TimelineContent>
        </TimelineItem>
      </ThisTimeline>
    </TimelineContainer>
  );
}

const ContentContainer = styled.div`
  padding: 20px;
  background-color: rgba(8, 7, 44, 0.8);
  box-shadow: var(--dark-shadow);
  color: white;
  margin: 0 0 20px 0;
  border-radius: 10px;
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
  border-bottom: 6px solid #0db3e6;
  background-position: center;
  padding: 30px;
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
`;

const ThisTimeline = styled(Timeline)`
  width: 60%;
  margin: 20px auto 0;
`;
