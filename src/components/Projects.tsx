import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useBreakpoint } from "../hooks/useBreakpoint";
import Carousel from "react-multi-carousel";
import { useState } from "react";

export const Projects = () => {
    const { isMobile } = useBreakpoint();
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            title: "ThesisGate.net",
            description: `
                        Web application for managing thesis workflows between students and instructors, 
                        supporting thesis submission, supervisor management, and workflow tracking. Implemented React 
                        frontend with authentication flows and protected routes, integrating REST APIs with JWT-based 
                        authentication and role-based access control.`,
            imgUrl: projImg1,
            skills: [
                { name: "JS", img: "" },
                { name: "React", img: "" },
                { name: "PHP/Slim", img: "" },
                { name: "Css", img: "" },
                { name: "Redux", img: "" },
                { name: "HTML", img: "" },
                { name: "MySQL", img: "" },
                { name: "Doctrine", img: "" },
            ],
        },
        {
            title: "ServiceFlow",
            description: `A full-stack web application developed to manage repair jobs, customers, and equipment for a local workshop, enabling CRUD operations on jobs and customer records and providing tracking, operational metrics, and reporting.`,
            imgUrl: projImg2,
            skills: [
                { name: "JS", img: "" },
                { name: "React", img: "" },
                { name: "PHP/Slim", img: "" },
                { name: "Css", img: "" },
                { name: "Redux", img: "" },
                { name: "HTML", img: "" },
                { name: "MySQL", img: "" },
            ],
        },
        {
            title: "React Animated Portfolio",
            description:
                "A dynamic and interactive personal portfolio built with React, featuring smooth animations, responsive design, and modular components to showcase projects and skills effectively.",
            imgUrl: projImg3,
            skills: [
                { name: "TS", img: "" },
                { name: "React", img: "" },
                { name: "Css", img: "" },
                { name: "HTML", img: "" },
                { name: "Bootstrap", img: "" },
            ],
        },
        {
            title: "Mobile Movie App",
            description:
                "A React Native mobile app showcasing core concepts like navigation, API integration, and scalable architecture through a movie browsing experience.",
            imgUrl: projImg3,
            skills: [
                { name: "TS", img: "" },
                { name: "React-Native", img: "" },
                { name: "React-Navigation", img: "" },
                { name: "Cross-Platform", img: "" },
                { name: "Expo-Router", img: "" },
            ],
        },
    ];
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn project-bx"
                                            : "project-bx"
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        Showcasing my work in full-stack
                                        development, interactive interfaces, and
                                        system-level programming, highlighting
                                        problem-solving, usability, and
                                        performance.
                                    </p>

                                    <Row>
                                        {isMobile ? (
                                            <Carousel
                                                responsive={responsive}
                                                infinite
                                                customTransition="transform 6000ms linear"
                                                arrows={false}
                                                showDots={true}
                                                pauseOnHover
                                                draggable
                                                swipeable
                                                className="project-slider"
                                                afterChange={(currentSlide) => {
                                                    setCurrentSlide(
                                                        currentSlide,
                                                    );
                                                }}
                                            >
                                                {projects.map((project, i) => (
                                                    <div
                                                        className="project-card"
                                                        key={i}
                                                    >
                                                        <h4>{project.title}</h4>
                                                        <p>
                                                            {
                                                                project.description
                                                            }
                                                        </p>
                                                        <div className="project-skills">
                                                            {project.skills.map(
                                                                (
                                                                    skill,
                                                                    idx,
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="skill-tag"
                                                                    >
                                                                        {
                                                                            skill.name
                                                                        }
                                                                    </span>
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </Carousel>
                                        ) : (
                                            <div className="project-boxes">
                                                {projects.map((project, i) => (
                                                    <div
                                                        className="project-card"
                                                        key={i}
                                                    >
                                                        <h4>{project.title}</h4>

                                                        <p>
                                                            {
                                                                project.description
                                                            }
                                                        </p>

                                                        <div className="project-skills">
                                                            {project.skills.map(
                                                                (
                                                                    skill,
                                                                    idx,
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="skill-tag"
                                                                    >
                                                                        {
                                                                            skill.name
                                                                        }
                                                                    </span>
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
