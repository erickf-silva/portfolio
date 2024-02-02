import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import { PROJECTS } from "../../utils/data";
import { ProjectCard } from "./ProjectCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Projects = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <ProjectContainer id="projects">
            <h5>Projetos</h5>

            <ProjectContent>

                <ArrowRight onClick={slideRight}>
                    <IoIosArrowForward />
                </ArrowRight>

                <ArrowLeft onClick={slideLeft}>
                    <IoIosArrowBack />
                </ArrowLeft>

                <Slider ref={sliderRef} {...settings}>
                    {PROJECTS.map((item) => (
                        <ProjectCard key={item.title} details={item} />
                    ))}
                </Slider>
            </ProjectContent>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.section`
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
const ProjectContent = styled.div`

    span {
        width: 2.2rem;
        height: 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6751b9;
        border-radius: 0.65rem;
        border: 1.5px solid #6751b9;
        background: #130f2a;
        position: absolute;
        top: 55%;
        z-index: 2;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 500;
    }
`
const ArrowRight = styled.span`
    right: -2rem;

    @media (max-width: 1025px) {
        right: -0.4rem;
    }
`
const ArrowLeft = styled.span`
    left: -2rem;

    @media (max-width: 1025px) {
        left: -0.4rem;
    }
`