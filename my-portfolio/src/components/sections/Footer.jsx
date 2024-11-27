import React from 'react'
import styled from 'styled-components';  
import {Bio} from "../sections/constants"
import {FacebookRounded,Twitter,Instagram,LinkedIn} from "@mui/icons-material"

const FooterContainer=styled.div`
  width:100%;
  padding:2rem 0;
  display:flex;
  flex-direction:column;
  text-align:center;
    align-items:center;
  justify-content:center;
  background-color:black;
  z-index:10;
`;

const FooterWrapper=styled.div`
  width:100%;
  max-width:1200px;
  display:flex;
  flex-direction:column;
  text-align:center;
  justify-content:center;
  gap:14px;
  align-items:center;
  padding:1rem;
  color:${({theme}) => theme.text_primary};
`;

const Logo=styled.div`
  font-weight:600;
  font-size:20px;
  color:${({theme}) => theme.text_primary};
  text-align:center;
  justify-contect:center;

`;

const Nav=styled.ul`
  width:100%;
  max-width:1200px;
  margin-top:0.5rem;
  display:flex;
  flex-direction:row;
  gap:2rem;
  text-align:center;
  justify-content:center;
  @media (max-width:768px){
    flex-wrap:wrap;
    gap:1rem;
    justify-content:center;
    text-align:center;
    font-size:12px;
  }
`;

const NavLink=styled.a`
  color:${({theme}) => theme.text_primary};
  text-decoration:none;
  font-size:1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover{
    color:${({theme}) => theme.text_primary};
  }
  @media (max-width:768px){
    font-size:1rem;
  }  
`;

const SocialMediaIcons=styled.div`
  display:flex;
  margin-top:1rem;
`;

const SocialMediaIcon=styled.a`
  display:inline-block;
  margin:0 1rem;
  font-size:1.5rem;
  color:${({theme}) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover{
    color:${({theme}) => theme.text_primary};
  }
  
`;

const Copyright=styled.div`
  margin-top:1.5rem;
  font-size:0.9rem;
  color:${({theme}) => theme.soft2};
  text-align:center;

`;

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <Logo>Naitik Upadhayay</Logo>
            <Nav>
                <NavLink href="About">About</NavLink>
                <NavLink href="Skills">Skills</NavLink>
                <NavLink href="Experience">Experience</NavLink>
                <NavLink href="Projects">Projects</NavLink>
                <NavLink href="Education">Education</NavLink>
            </Nav>
            <SocialMediaIcons>
                <SocialMediaIcon href={Bio.facebook} target="display">
                  <FacebookRounded />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.twitter} target="display">
                  <Twitter />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.linkedin} target="display">
                  <LinkedIn/>
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.insta} target="display">
                  <Instagram />
                </SocialMediaIcon>
            </SocialMediaIcons>
            <Copyright> &copy; 2024 Naitik Upadhayay. All rights reserved.</Copyright>
        </FooterWrapper>
        
    </FooterContainer>

  )
}

export default Footer
