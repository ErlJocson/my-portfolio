import styled from "styled-components"
import { awards } from "./details/AwardContents"

function Awards() {
  return (
    <>
      <MainContainer className="border-bottom-blue" id = "awards">
        <h1>Awards and Recognitions</h1>
        <hr />
        <AwardsContainer>
            {
                awards.map((award, index) => (
                    <AwardContent key = {index} className="light-shadow">
                        <h3>{award.name}</h3>
                        <span>{award.date_awarded}</span>
                        <span>{award.issue_by}</span>
                        <hr /> 
                        <ul>
                            {
                                award.description.map((desc, index2) => (
                                    <li key = {index2}>{desc}</li>
                                ))
                            }
                        </ul>
                    </AwardContent>
                ))
            }
        </AwardsContainer>
      </MainContainer>
    </>
  )
}

export default Awards

const MainContainer = styled.div`
    color: white;
    padding: 30px 0;
    overflow: hidden;
    h1 {
        text-transform: uppercase;
        text-align: center;;
    }

    hr {
    background-color: rgb(245, 31, 113);
    height: 6px;
    border: none;
    width: 150px;
    margin: 10px 0;
    margin: 10px auto;
    }

    @media screen and (max-width: 800px) {
       h1 {
         font-size: 20px;
       }
    }
`

const AwardsContainer = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

const AwardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    width: 500px;
    border-radius: 10px;

    ul {
        margin: 0 18px;

        li {
            margin: 5px 0;
        }
    }

    hr {
    border: none;
    background-color: rgb(245, 31, 113);
    height: 6px;
    width: 100%;
  }

   @media screen and (max-width: 1400px) {
    width: 400px;
  }

  @media screen and (max-width: 1000px) {
    width: 350px;
  }

   @media screen and (max-width: 800px) {
    width: 100%;

    h1 {
        font-size: 20px;
    }
    ul {
        li {
            font-size: 12px;
        }
    }
  }
`;