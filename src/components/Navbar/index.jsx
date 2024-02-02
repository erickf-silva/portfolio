import React, { useState } from "react";
import styled from "styled-components";

import { MobileNav } from "./MobileNavbar";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <NavWrapper>
                <NavContent>
                    <Logo label={"Erick Fonseca"} />
                    <Navigation />

                    <MenuBtn onClick={toggleMenu}>
                        {openMenu ? (
                            <OpenMenuIcon>
                                <div></div>
                                <div></div>
                            </OpenMenuIcon>
                        ) : (
                            <ClosedMenuIcon>
                                <div></div>
                                <div></div>
                                <div></div>
                            </ClosedMenuIcon>
                        )}
                    </MenuBtn>

                </NavContent>
            </NavWrapper>
        </>
    );
};

const NavWrapper = styled.nav`
    background: rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
    position: sticky;
    top: 0;
    z-index: 30;
    backdrop-filter: blur(50px);

    @media (max-width: 1325px) {
            padding: 0 2rem;
        }
`
const NavContent = styled.div`
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin: 0 auto;

    ul {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        @media (max-width: 769px) {
            display: none;
        }
    }

    li {
        margin: 0 1.5rem;
    }
`
const MenuBtn = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.4rem;
    color: #fff;
    background: linear-gradient(90deg, #a993fe -0.13%, #7e61e7 99.87%);
    line-height: 0;
    cursor: pointer;
    transition: all 0.4s ease;
    display: none;

    &:hover {
        color: #a993fe;
        background: #000;
        border: 1px solid #a993fe;
    }

    @media (max-width: 769px) {
        display: block;
        border: 1px solid #a993fe;
    }
`
const ClosedMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.5rem;

  div {
    height: 0.20rem;
    background: #fff;
  }
`
const OpenMenuIcon = styled(ClosedMenuIcon)`
  div:nth-child(1) {
    transform: rotate(45deg);
    margin-bottom: 0.4rem;
  }

  div:nth-child(2) {
    transform: rotate(-45deg);
    margin-top: -0.86rem;
  }
`