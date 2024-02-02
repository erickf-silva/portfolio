import React from "react";
import styled from "styled-components";

import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

export const MobileNav = ({ isOpen, toggleMenu }) => {

    const menuStyles = {
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)"
    };

    return (
        <>
            <MobileMenu style={menuStyles} onClick={toggleMenu}>

                <MobileMenuContainer>
                    <Logo label={"Erick Fonseca"} />
                    <Navigation />
                </MobileMenuContainer>

            </MobileMenu>
        </>
    );
};

const MobileMenu = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999 !important;
    opacity: 0;
    box-shadow: 0px 29px 80px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    transform: translateX(-100vw);

    @media (max-width: 769px) {
        display: block;
    }
`
const MobileMenuContainer = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: #342864;
    padding: 2.4rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 3rem;
    }
`