import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer id="header" className="border-bottom-blue">
      <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" />
      <ContentContainer>
        <HeaderContent>
          <h1>ERL JOCSON, CLSSGB</h1>
          <hr />
          <p>
            Data Scientist from the Philippines with a Bachelor of Science in
            Mathematics and a strong background in statistics, research, and
            data analysis. Experienced in turning complex datasets into
            meaningful insights that support business decision-making,
            operational improvement, and strategic planning. Skilled in
            statistical analysis, predictive analytics, business intelligence,
            dashboard development, and research-driven problem solving, with
            experience handling large-scale data and identifying trends, risks,
            and opportunities across business operations. Also a Certified Lean
            Six Sigma Green Belt professional focused on process improvement,
            analytical thinking, and continuous optimization through data-driven
            solutions.
          </p>
        </HeaderContent>
      </ContentContainer>
    </HeaderContainer>
  );
}

export default Header;

const ContentContainer = styled.div``;

const HeaderContent = styled.div`
  box-shadow: var(--dark-shadow);
  width: 800px;
  margin: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(15, 11, 11, 0.9);
  padding: 20px;

  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  p {
    font-size: 15px;
    margin: 10px;
    text-align: left;
    em {
      color: rgb(245, 31, 113);
    }
  }

  hr {
    background-color: #0db3e6;
    height: 3px;
    border: none;
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    & {
      width: 70%;
      margin: 0 auto;
      p {
        font-size: 12px;
      }
    }

    h1 {
      font-size: 20px;
    }
  }
`;

const HeaderContainer = styled.div`
  img {
    box-shadow: var(--dark-shadow);
    border-radius: 50%;
    height: 320px;
    border: 2px solid gray;
  }

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  overflow: hidden;
  background-image: url(${process.env.PUBLIC_URL + "/images/coffee.jpg"});
  background-size: cover;
  background-position: center;
  padding: 30px 100px;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 1000px) {
    img {
      height: 250px;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 50px 0;
    img {
      height: 200px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }
`;
