import React from "react";
import styled from "styled-components";

import Photo from "../../assets/me.png"
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const Hero = () => {
    return (
        <HeroContainer id="home">
            <HeroContent>
                <h2>Olá, eu sou Erick! Desenvolvedor Frontend</h2>
                <p>Estudante de programação desde janeiro de 2023, descobri minha paixão pela tecnologia recentemente e venho aprimorando minhas habilidades, buscando constantemente melhorar a cada dia.</p>
            </HeroContent>

            <HeroImg>
                <div>
                    <TechIcon>
                        <ReactIcon />
                    </TechIcon>
                    <img src={Photo} alt="foto" />
                </div>

                <div>
                    <TechIcon>
                        <HtmlIcon />
                    </TechIcon>
                    <TechIcon>
                        <CssIcon />
                    </TechIcon>
                    <TechIcon>
                        <JsIcon />
                    </TechIcon>
                </div>
            </HeroImg>
        </HeroContainer>
    );
};

const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    position: relative;

    &::after, &::before {
        content: " ";
        width: 28.125rem;
        height: 28.125rem;
        border-radius: 28.125rem;
        background: #7c66e3;
        position: absolute;
        z-index: -1;
        filter: blur(225px);
    }

    &::after {
        top: -3rem;
        left: -5rem;
    }

    &::before {
        bottom: 2rem;
        right: 0rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        &::after, &::before {
            content: " ";
            width: 18rem;
            height: 18rem;
        }

        &::after {
            top: 0rem;
            left: 0rem;
        }

        &::before {
            bottom: 2rem;
            right: 0rem;
        }
    }
`
const HeroContent = styled.div`
    flex: 1;

    h2 {
        font-size: 3.8rem;
        font-weight: 600;
        line-height: 5rem;
        margin-bottom: 1rem;

        @media (max-width: 1025px) {
            font-size: 3rem;
            line-height: 4rem;
        }
        
        @media (max-width: 768px) {
            margin-top: 3rem;
            width: auto;
            text-align: center;
        }

        @media (max-width: 600px) {
            font-size: 2.2rem;
            line-height: 3rem;
        }
    }

    p {
        width: 80%;
        font-size: 1rem;
        font-weight: 400;
        line-height: 2rem;

        @media (max-width: 1025px) {
            font-size: 0.9rem;
            line-height: 1.6rem;
        }

        @media (max-width: 768px) {
            width: auto;
            text-align: center;
        }

        @media (max-width: 600px) {
            font-size: 0.8rem;
            line-height: 1.3rem;
        }
    }
`
const HeroImg = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;

    > div {
        display: flex;
        align-items: flex-end;
        gap: 2rem;

        @media (max-width: 600px) {
            gap: 1rem;
        }

        > img {
            width: 25rem;
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-0.5rem);
            }

            @media (max-width: 1025px) {
                width: 20rem;
            }

            @media (max-width: 600px) {
                width: 16rem;
            }
        }
    }

    @media (max-width: 768px) {
        margin: 2rem 0 2rem 0;
    }

    @media (max-width: 600px) {
        gap: 1rem;
    }
`
const TechIcon = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 0.65rem;
    border: 1.5px solid #6852ba;

    svg {
        font-size: 3rem;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-0.5rem);
        }

        @media (max-width: 1025px) {
            width: 2.5rem;
        }

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }

    &:last-child svg {
        font-size: 2.7rem;

        @media (max-width: 600px) {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 1025px) {
        width: 4rem;
        height: 4rem;
    }

    @media (max-width: 600px) {
        width: 3.3rem;
        height: 3.3rem;
    }
`
const ReactIcon = styled(FaReact)`
    color: #0085be;
`
const HtmlIcon = styled(FaHtml5)`
    color: #ff6f2c;
`
const CssIcon = styled(FaCss3Alt)`
    color: #0085be;
`
const JsIcon = styled(SiJavascript)`
    color: #ede500;
`
