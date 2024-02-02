import React from "react";
import styled from "styled-components";

export const ContactInfoCard = ({ iconUrl, text, link }) => {
    return (
        <ContactDetailsCard>
            <a href={link} target="_blank">
                <Icon>
                    {iconUrl}
                </Icon>

                <p>{text}</p>
            </a>
        </ContactDetailsCard>
    );
};

const ContactDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #130f2a;
    border-radius: 0.65rem;
    border: 1.5px solid #6751b9;
    padding: 1.5rem;
    margin-bottom: 2rem;

    a {
        color: #fff;

        p {
            font-size: 0.9rem;
            font-weight: 400;
        }
    }

    @media (max-width: 425px) {
        margin-bottom: 1.5rem;
    }
`
const Icon = styled.div`
    font-size: 1.8rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background: #3d3072;
    margin-bottom: 0.8rem;
`