import { useState } from "react";
import styled from "styled-components"
import { FiAlignJustify, FiArrowLeftCircle } from "react-icons/fi";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { BsFillAwardFill } from "react-icons/bs";
import { IoDocuments } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";


function NavigationBar() {
    const [showNav, setShowNav] = useState(false)
  return (
    <>
        {
            showNav ? (
                <NavigationContainer>
                    <NavItems  onClick = {() => setShowNav(!showNav)}>
                        <CloseItem size = "30" className="close-button"/>
                    </NavItems>
                    <NavItems onClick = {() => {
                        setShowNav(!showNav)
                        document.getElementById("header")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }}>
                            <FaPersonCircleExclamation className="navigation-icons"/>
                            About Me
                        </NavItems>
                    <NavItems onClick = {() => {
                        setShowNav(!showNav)
                        document.getElementById("awards")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }}>
                        <BsFillAwardFill className="navigation-icons"/>
                        Awards & Recognition
                        </NavItems>
                    <NavItems onClick = {() => {
                        setShowNav(!showNav)
                        document.getElementById("skills")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }}>
                            <IoDocuments className="navigation-icons"/>
                            Skills
                        </NavItems>
                    <NavItems onClick = {() => {
                        setShowNav(!showNav)
                        document.getElementById("experience")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }}>
                            <BsPersonWorkspace className="navigation-icons"/>
                            Work Experience
                        </NavItems>
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

const NavBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    color: white;
    z-index: 100;
`;

const BurgerItem = styled(FiAlignJustify)`
    color:white;
    background-color: rgba(17, 0, 36, .9);
    padding: 10px;
    margin: 20px;
    border-radius: 50%;
    box-shadow: var(--dark-shadow);
    cursor: pointer;
`;

const BurgerContainer = styled(NavBar)`
    display: flex;
    @media screen and (max-width:800px) {
        flex-direction: column-reverse;
    }
`;

const CloseItem = styled(FiArrowLeftCircle)`
    margin: 20px;
    cursor: pointer;
`;



const NavigationContainer = styled(NavBar)`
    width: 300px;
    background-color: rgb(17, 0, 36);
    @media screen and (max-width: 800px) {
        width: 100%;
  }
`;

const NavItems = styled.div`
    display: flex;
    cursor: pointer;
    align-items:center;
`;


