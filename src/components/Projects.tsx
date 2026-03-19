import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
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
            description: `A full-stack web application developed to manage theses, students, and instructors. The
                platform streamlines thesis workflows, digitizes administrative processes, and facilitates
                communication. Built with React, PHP-Slim, and structured database architecture for
                department-wide deployment.`,
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
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    Tab 1
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    Tab 2
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    Tab 3
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        },
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                {/* future  */}
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Cumque quam, quod
                                                    neque provident velit, rem
                                                    explicabo excepturi id illo
                                                    molestiae blanditiis,
                                                    eligendi dicta officiis
                                                    asperiores delectus quasi
                                                    inventore debitis quo.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                {/* future */}
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Cumque quam, quod
                                                    neque provident velit, rem
                                                    explicabo excepturi id illo
                                                    molestiae blanditiis,
                                                    eligendi dicta officiis
                                                    asperiores delectus quasi
                                                    inventore debitis quo.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
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
