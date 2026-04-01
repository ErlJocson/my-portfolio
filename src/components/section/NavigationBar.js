import { useState } from "react";
import styled from "styled-components"
import { FiAlignJustify, FiArrowLeftCircle } from "react-icons/fi";

function NavigationBar() {
    const [showNav, setShowNav] = useState(false)
  return (
    <>
        {
            showNav ? (
                <NavigationContainer>
                    <NavItems  onClick = {() => setShowNav(!showNav)}>
                        <CloseItem size = "30" />
                    </NavItems>
                    <NavItems onClick = {() => {
                        setShowNav(!showNav)
                        document.getElementById("header")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }}>About Me</NavItems>
                    <NavItems onClick = {() => {
                        setShowNav(!showNav)
                        document.getElementById("awards")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }}>Awards & Recognition</NavItems>
                    <NavItems onClick = {() => {
                        setShowNav(!showNav)
                        document.getElementById("skills")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }}>Skills</NavItems>
                    <NavItems onClick = {() => {
                        setShowNav(!showNav)
                        document.getElementById("experience")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }}>Work Experience</NavItems>
                </NavigationContainer> 
            ) : (
                <BurgerContainer>
                    <BurgerItem size = "30" onClick = {() => setShowNav(!showNav)}/>
                </BurgerContainer>
            )
        }
    </>
  )
}

export default NavigationBar

const BurgerItem = styled(FiAlignJustify)`
    color:white;
    background-color: rgba(17, 0, 36, .9);
    padding: 10px;
    margin: 20px;
    border-radius: 50%;
    box-shadow: var(--dark-shadow);
    cursor: pointer;

`;

const CloseItem = styled(FiArrowLeftCircle)`
    margin: 20px;
    cursor: pointer;

`;

const NavBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    color: white;
    z-index: 100;
`;

const NavigationContainer = styled(NavBar)`
    width: 300px;
    background-color: rgb(17, 0, 36);
    @media screen and (max-width: 800px) {
        width: 100%;
  }
`;

const NavItems = styled.div`
    padding: 10px;
    cursor: pointer;
`;

const BurgerContainer = styled(NavBar)``;
