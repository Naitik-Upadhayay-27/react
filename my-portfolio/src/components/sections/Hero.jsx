import React from 'react';
import styled from "styled-components";
import {Bio} from "../sections/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/MY PROFILE PICTURE.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import {motion} from "framer-motion";
import {headContainerAnimation, headTextAnimation} from "../../utils/motion"

const HeroContainer=styled.div`
    display:flex;
    justify-content:center;
    position:relative;
    padding : 80px 30px;
    z-index:1;
    @media (max-width: 960px){
        padding:66px 16px;
    }
    @media (max-width: 640px){
        padding:32px 16px;
    } 
    clip-path: polygon (0 0, 100% , 100% , 70% , 95% , 0 100%);
`;

const HeroInnerContainer=styled.div`
    position:relative;
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    max-width:1100px;
    @media (max-width: 960px){
        flex-direction:column;
    } 

`;

const HeroLeftContainer=styled.div`
    width:100%;
    order:1;
    @media (max-width: 960px){
        order:2;
        margin-bottom: 30px;
        display:flex;
        gap:6px;
        flex-direction:column;
        align-items:center;
    }
    
`;

const HeroRightContainer=styled.div`
    width:100%;
    height:100%;
    order:2;
    display:flex;
    justify-content:end;
    @media (max-width: 960px){
        order:1;
        margin-bottom: 30px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin-bottom:80px;
    }
    @media (max-width: 640px){
        margin-bottom:30px;
    }    
    
`;

const Title= styled.div`
    font-weight:900px;
    font-size:50px;
    color:${({theme}) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px){
        text-align: center;
    }
    @media (max-width: 640px){
        font-size:40px;
        font-weight:600;
        line-height:48px;
        margin-bottom:8px;

    }

`;

const span= styled.div`
    cursor:pointer
    color:${({theme}) => theme.primary};


`;

const TextLoop= styled.div`
    font-weight:600px;
    font-size:32px;
    diaplay:flex;
    gap:12px;
    color:${({theme}) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px){
        text-align: center;
    }
    @media (max-width: 640px){
        font-size:22px;
        line-height:48px;
        margin-bottom:8px;

    }

`;

const SubTitle=styled.div`
    font-size:22px;
    line-height:48px;
    margin-bottom:8px;
    color:${({theme}) => theme.text_primary + 99};
    @media (max-width: 960px){
        text-align: center;
    }
    @media (max-width: 640px){
        font-size:16px;
        line-height:32px;

    }

`;

const ResumeButton=styled.a`
    -webkit-appearance: button;
    -moz-appearance: nutton;
    appearance:button;
    text-decoration: none;
    width:95%;
    max-width:300px;
    text-align: center;
    padding: 16px 0;
    
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
        225deg
        hsla(271, 100%, 50%, 1) 0%;
        hsla(294, 100%, 50%, 1) b100%;
    );
    background: -moz-linear-gradient(
        225deg
        hsla(271, 100%, 50%, 1);
        hsla(271, 100%, 50%, 1);
    );
    background: -webkit-linear-gradient(
        225deg
        hsla(271, 100%, 50%, 1);
        hsla(271, 100%, 50%, 1);
    );
    box-shadow: 20px 20px 60px #1F2634, -20px -20px 60pz #1F2634;
    border-radius: 50px;
    font-weight:600;
    font-size:20px;
    color:white;

    &:hover{
        transform:scale(1.05);
        transition:all 0.4s ease-in-out;
        box-shadow:20px 20px 60px #1F2634; 
        filter: brightness(1);   
    }
    @media (max-width: 640px){
        padding:12px 0;
        font-size:16px;
        

    }
`;

const Img =styled.img`
    border-radius: 50%;
    height:100%;
    width:100%;
    max-width: 400px;
    max-height:400px;
    border-color: 2px solid ${({theme}) => theme.primary};
    @media (max-width: 640px){
        max-width:280px;
        max-height:280px;
    }
    &:hover{
        transform:scale(1.18);
        transition:all 0.4s ease-in-out;
        box-shadow:20px 20px 60px #1F2634; 
        filter: brightness(1);   
    }
`;

const HeroBg=styled.div`
    position:absolute;
    display:flex;
    top:50%;
    right:0;
    bottom:0;
    left:50%;
    width:100%;
    height:100%;
    max-width:1360px;
    justify-content: end;
    -webkit-transform:translateX(-50%) translateY(-50%);
    transform:translateX(-50%) translateY(-50%);

    @media (max-width: 960px){
        justify-content: center;
        padding:0 0px
    }

`;

const Hero= () => {
    return <div id='about'>
        <HeroContainer>
            <HeroBg>
                <HeroBgAnimation />
            </HeroBg>
            <motion.div {...headContainerAnimation}>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <motion.div {...headTextAnimation}>
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                            <TextLoop>
                                <Typewriter 
                            
                                    options={{
                                        strings:Bio.roles,
                                        autoStart: true,
                                        loop:true,
                                    }}
                                />
                            </TextLoop>
                        </motion.div>
                        <motion.div {...headContainerAnimation}>
                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>
                        <ResumeButton href={Bio.resume} target="blank">Check Resume</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Img src={HeroImg} alt="Naitik Upadhayay" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </motion.div>


        </HeroContainer>
    </div>;
}

export default Hero;