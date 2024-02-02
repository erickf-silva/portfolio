import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <p>©️ 2024 Time To Program, Happy Coding</p>
                <p>(11) 94123-9564</p>
            </FooterContainer>
        </>
    );
};

const FooterContainer = styled.div`
    font-size: 0.8rem;
    text-align: center;
    padding: 1rem;
    background: linear-gradient(90deg, #3d3072 0%, #423477 100%);

    p {
        line-height: 1.4rem;
    }
`