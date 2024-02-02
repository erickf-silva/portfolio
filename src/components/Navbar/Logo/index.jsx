import React from "react";
import styled from "styled-components";

export const Logo = ({ label }) => {
    return <LogoName>{label}</LogoName>
};

const LogoName = styled.h3`
    font-family: 'Redressed', cursive;
    font-size: 34px;

    @media (max-width: 425px) {
            font-size: 24px;
        }
`