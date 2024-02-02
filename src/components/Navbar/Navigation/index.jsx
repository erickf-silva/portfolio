import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

import CurriculumIcon from "../../../assets/curriculum.png";
import MyCurriculum from "../../../assets/mycurriculum.pdf"

export const Navigation = () => {
    return (
        <Nav>
            <li>
                <Link to="home" smooth={true} duration={500} offset={-100}>
                    Home
                </Link>
            </li>

            <li>
                <Link to="skills" smooth={true} duration={500} offset={-115}>
                    Skills
                </Link>
            </li>

            <li>
                <Link to="projects" smooth={true} duration={500} offset={-100}>
                    Projetos
                </Link>
            </li>

            <li>
                <Link to="contact" smooth={true} duration={500} offset={-100}>
                    Contato
                </Link>
            </li>

            <a href={MyCurriculum} target="_blank" rel="noopener noreferrer">
                <ContactBtn>
                    Baixar CV
                    <img src={CurriculumIcon} alt="currículo" />
                </ContactBtn>
            </a>
        </Nav>
    );
};

const Nav = styled.ul`

    li {
        
        a {
            font-size: 0.9rem;
            font-weight: 500;
            color: #fff;
            position: relative;
            cursor: pointer;

            &::before {
                content: " ";
                width: 2rem;
                height: 0.2rem;
                background: linear-gradient(90deg, #a993fe 0%, #7e61e7 100%);
                border-radius: 0.5rem;
                position: absolute;
                bottom:  -0.6rem;
                opacity: 0;
                transform: translateX(-1.5rem);
                transition: all 0.3s ease;
            }

            &:hover::before {
                width: 100%;
                transform: translateX(0);
                opacity: 1;
            }
        }
    }
`
const ContactBtn = styled.button`
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(90deg, #a993fe 0%, #7e61e7 100%);
    padding: 0.6rem 2rem;
    border: none;
    outline: 1.5px solid transparent;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: all 0.3 ease;

    &:hover {
        color: #a993fe;
        background: #000;
        outline: 1.5px solid #a993fe;
    }

    img {
        width: 1.2rem;
        margin-left: 0.5rem;
    }

    @media (max-width: 400px) {
        padding: 0.6rem 1rem;
    }
`
