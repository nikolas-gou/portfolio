import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "ThesisGate.net",
            description: `Full-stack platform for managing thesis workflows, authentication, and role-based access.`,
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
                                            ? "animate__animated animate__fadeIn"
                                            : ""
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
                                        <div className="project-boxes">
                                            {projects.map((project, i) => (
                                                <div
                                                    className="project-card"
                                                    key={i}
                                                >
                                                    <h4>{project.title}</h4>

                                                    <p>{project.description}</p>

                                                    <div className="project-skills">
                                                        {project.skills.map(
                                                            (skill, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="skill-tag"
                                                                >
                                                                    {skill.name}
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
