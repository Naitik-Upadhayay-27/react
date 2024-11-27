import React from 'react';
import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Bio} from  '../components/sections/constants';
import {MenuRounded} from "@mui/icons-material";
import { useState } from 'react';
import { useTheme } from 'styled-components';


const Nav = styled.div`
    background-color:${({theme}) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    color:white;

`;

const NavbarContainer = styled.div`
    width:100%;
    mix-width: 1200px;
    padding: 0 24px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: Space-between;
    font-size: 1rem;

`;

const NavLogo = styled(LinkR)`
    width:80%;
    padding: 0 6px;
    font-weight:500;
    font-size:30px;
    font-weight:800;
    text-decoration: none;
    color:inherit
`;

const NavItems =styled.nav`
    width:100%;
    display:flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    gap:32px;
    padding: 0 6px;
    list-style: none;
    @media screen and (max-width: 768px){
        display:none;
    }     

`;

const NavLink = styled.a`
    color:${({theme}) => theme.text_primary};
    font-weight:500;
    text-decoration: none;
    font-size:20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
       color:${({theme}) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    width:80%;
    height:100%;
    display:flex;
    justify-content:end;
    align-items: center;
    padding: 0px 6px;
    @media screen and (max-width: 768px){
        display:none;
    }
    
`;

const GithubButton = styled.a`
    border: 1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    &:hover{
       background:${({theme}) => theme.primary};
       color:${({theme}) => theme.text_primary};
    }

`;

const MobileIcon=styled.div`
    height:38%;
    display:flex;
    align-items:center;
    color:${({theme}) => theme.text_primary};  
    display: none;
    @media screen and (max-width: 768px){
        display: block;
    }

`;

const MobileMenu = styled.ul`
    width:100%;
    text-decoration: none;
    display:flex;
    flex-direction: column;
    align-items: start;
    gap:16px;
    padding: 0 6px;
    list-style: none;
    width:100%;
    padding: 12px 40px 24px 40px ;
    background:${({ theme }) => theme.card_light + 99};
    position: absolute;
    top: 80px;
    right:0;

    transition: all 0.6s ease-in-out;
    transform: ${({isOpen}) =>
       isOpen ? "translate(0)" : "TranslateY(-100)"};
    border-radius:0 0 20px 20px;
    box-shadow= 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen}) => (isOpen ? '1000' : '-1000')};

`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme=useTheme();
    return( 
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">PORTFOLIO</NavLogo>
            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                <MenuRounded style={{color: 'inherit'}}/>
            </MobileIcon>
            <NavItems>
                <NavLink href="About">About</NavLink>
                <NavLink href="Skills">Skills</NavLink>
                <NavLink href="Experience">Experience</NavLink>
                <NavLink href="Projects">Projects</NavLink>
                <NavLink href="./sections/Education.jsx" >Education</NavLink>
            </NavItems>

            {
                isOpen && (
                <MobileMenu isOpen={isOpen}>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="About ">About</NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="Skills ">Skills</NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="Experience">Experience</NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="Projects">Projects</NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="Education">Education</NavLink>
                
                    <GithubButton href={Bio.github} target="Blank" style={{
                        background:theme.primary,
                        color:theme.text_primary,
                    }}>Github Profile</GithubButton>
                </MobileMenu>)
            }
            <ButtonContainer>
                <GithubButton href={Bio.github} target="Blank">Github Profile</GithubButton>
            </ButtonContainer>    
        </NavbarContainer>
    </Nav>    

)}
export default Navbar