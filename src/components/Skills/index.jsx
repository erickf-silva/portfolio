import React, { useState } from "react";
import styled from "styled-components";

import { SKILLS } from "../../utils/data";
import { SkillCard } from "./SkillCard";
import { SkillsInfoCard } from "./SkillsInfoCard";

export const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <SkillsContainer id="skills">
            <h5>Proficiência Técnica</h5>

            <SkillsContent>
                <MySkills>
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectSkill(item);
                            }}
                        />
                    ))}
                </MySkills>

                <SkillsInfo>
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </SkillsInfo>
            </SkillsContent>
        </SkillsContainer>
    );
};

const SkillsContainer = styled.section`
    margin: 4rem 0;
    position: relative;

    h5 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 3.5rem;

        @media (max-width: 768px) {
            font-size: 1.3rem;
            margin-bottom: 2rem;
        }
    }

    &::after, &::before {
        content: " ";
        width: 28rem;
        height: 28rem;
        border-radius: 28.125rem;
        background: #7c66e3;
        position: absolute;
        z-index: -1;
        filter: blur(200px);
    }

    &::after {
        top: -3rem;
        left: -5rem;
    }

    &::before {
        background: #9e51b9;
        bottom: 0rem;
        right: 0rem;
    }

    @media (max-width: 768px) {
        &::after, &::before {
            width: 18rem;
            height: 18rem;
        }
    }

    @media (max-width: 600px) {
        padding: 0;
    }
`
const SkillsContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 3rem;

    @media (max-width: 1025px) {
        grid-gap: 2rem;
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 3rem;
    }
`
const MySkills = styled.div`
    flex: 1;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 1025px) {
        padding-left: 1rem;
        grid-gap: 2rem;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`
const SkillsInfo = styled.div`
    flex: 1;

    @media (max-width: 768px) {
        width: 100%;
    }
`