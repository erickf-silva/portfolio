import React from "react";
import styled from "styled-components";
import MyCurriculum from "../../assets/mycurriculum.pdf"

import { FaRegEnvelope, FaGithub, FaLinkedin, FaAddressCard } from "react-icons/fa";
import { ContactInfoCard } from "./ContactInfoCard";

export const ContactMe = () => {
    return (
        <ContactContainer id="contact">
            <h5>Minhas Redes</h5>

            <ContactContent>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl={<FaRegEnvelope />}
                        text={"Email"}
                        link={"mailto:@erick.fonseca916@gmail.com"}
                    />
                    <ContactInfoCard
                        iconUrl={<FaGithub />}
                        text={"GitHub"}
                        link={"https://github.com/erickf-silva"}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl={<FaAddressCard />}
                        text={"Currículo"}
                        link={MyCurriculum}
                    />
                    <ContactInfoCard
                        iconUrl={<FaLinkedin />}
                        text={"Linkedin"}
                        link={"https://www.linkedin.com/in/erickfonseca916/"}
                    />
                </div>
            </ContactContent>
        </ContactContainer>
    );
};

const ContactContainer = styled.section`
    margin: 4rem 0;
    position: relative;

    h5 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 3rem;

        @media (max-width: 768px) {
            font-size: 1.3rem;
            margin-bottom: 2rem;
        }
    }
`
const ContactContent = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;

    @media (max-width: 425px) {
        gap: 1.5rem;
    }
`