import React from "react";
import styled from "styled-components";

export const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <SkillsInfoContainer>
            <h6>{heading}</h6>

            <SkillsInfoContent>
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <SkillInfo>
                            <p>{item.skill}</p>
                            <Percentage>{item.percentage}</Percentage>
                        </SkillInfo>

                        <SkillProgressBg>
                            <SkillProgress style={{ width: item.percentage }} />
                        </SkillProgressBg>
                    </React.Fragment>
                ))}
            </SkillsInfoContent>
        </SkillsInfoContainer>
    );
};

const SkillsInfoContainer = styled.div`
    min-height: 23rem;
    border-radius: 0.65rem;
    border: 1.5px solid #6751b9;
    background: rgba(22, 17, 47, 0.398);
    backdrop-filter: blur(1rem);

    h6 {
        font-size: 1.2rem;
        font-weight: 500;
        padding: 0.8rem 2rem;
        background: linear-gradient(180deg, #ac96ff 0%, #7c5fe6 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-bottom: 1.5px solid #6751b9;

        @media (max-width: 1025px) {
            font-size: 1.1rem;
        }
    }

`
const SkillsInfoContent = styled.div`
    padding: 2rem;

    @media (max-width: 1025px)  {
        padding: 1.5rem;
    }
`
const SkillInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 1rem;
        font-weight: 500;

        @media (max-width: 1025px) {
            font-size: 0.9rem;
        }
    }
`
const Percentage = styled.p`
    color: #dd8cfa;
`
const SkillProgressBg = styled.div`
    width: 100%;
    height: 0.5rem;
    background: #382e68;
    border-radius: 0.5rem;
    margin: 1rem 0;
    overflow: hidden;
`
const SkillProgress = styled.div`
    width: 0%;
    height: 0.5rem;
    background: linear-gradient(90deg, #aa94fe -50%, #7d60e6 50%);
    border-radius: 0.5rem;
    transition: all 0.5s ease-in-out;
`