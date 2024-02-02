import React from "react";
import styled from "styled-components";

export const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
    return (
        <SkillsCard onClick={() => onClick()}>
            {isActive ? (
                <Active>
                    <SkillIcon>
                        <img src={iconUrl} alt={title} />
                    </SkillIcon>

                    <span>{title}</span>
                </Active>
            ) : (
                <Disable>
                    <SkillIcon>
                        <img src={iconUrl} alt={title} />
                    </SkillIcon>

                    <span>{title}</span>
                </Disable>
            )}
        </SkillsCard>
    );
};

const SkillsCard = styled.div`
    border-radius: 0.65rem;
    border: 1.5px solid #6751b9;
    text-align: center;
    background: rgba(22, 17, 47, 0.398);
    backdrop-filter: blur(1rem);
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(180deg, #aa94fe 0%, #7c5fe6 100%);
    }

    span {
        font-size: 1.3rem;
        font-weight: 500;

        @media (max-width: 1025px) {
            font-size: 1rem;
        }

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }

        @media (max-width: 390px) {
            font-size: 0.75rem;
        }
    }
`
const Active = styled.div`
    background: linear-gradient(180deg, #aa94fe 0%, #7c5fe6 100%);
    border-radius: 0.65rem;
    padding: 2.5rem;

    @media (max-width: 1025px) {
        padding: 2rem;
    }
`
const Disable = styled.div`
    padding: 2.5rem;

    @media (max-width: 1025px) {
        padding: 2rem;
    }
`
const SkillIcon = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2a2252;
    border-radius: 0.65rem;
    border: 1.5px solid #6852ba;
    position: absolute;
    top: -1rem;
    left: -1rem;

    img {
        width: 2.4rem;
        height: auto;
        object-fit: contain;

        border-radius: 0.4rem;

        @media (max-width: 1025px) {
            width: 1.8rem;
        }
    }

    @media (max-width: 1025px) {
        width: 3rem;
        height: 3rem;
    }
`