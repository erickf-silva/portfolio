import React from "react";
import styled from "styled-components";

export const ProjectCard = ({ details }) => {
    return (
        <MyProjectCard>
            <h6>{details.title}</h6>
            <ProjectLanguages>{details.languages}</ProjectLanguages>
            <ProjectDescription>{details.description}</ProjectDescription>

            <ProjectLinks>
                <a target="_blank" href={details.repository}>Repositório</a>
                <a target="_blank" href={details.link}>Projeto</a>
            </ProjectLinks>

            <Img src={details.image} alt={details.title} />
        </MyProjectCard>
    );
};

const MyProjectCard = styled.div`
    background: #130f2a;
    border-radius: 0.65rem;
    border: 1.5px solid #6751b9;
    padding: 1.5rem;
    margin: 0 1rem;

    h6 {
        font-size: 1.05rem;
        font-weight: 500;
        margin-bottom: 0.7rem;

        @media (max-width: 768px) {
            font-size: 0.95rem;
        }
    }
`
const ProjectLanguages = styled.p`
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 400;
    background: rgba(103, 81, 185, 0.5);
    border-radius: 0.3rem;
    padding: 0.4rem 0.6rem;
    margin-bottom: 1.3rem;
`
const ProjectDescription = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    position: relative;

    @media (max-width: 768px) {
        font-size: 0.75rem;
    }
`
const ProjectLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    a {
        width: 3rem;
        color: #6751b9;
        font-size: 0.8rem;
        transition: all 0.2s ease;

        &:hover {
            color: #aa94fe;
            font-size: 0.81rem;
        }
    }
`
const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.65rem;
`