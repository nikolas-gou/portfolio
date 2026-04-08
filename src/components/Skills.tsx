import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
    };

    const skills = [
        { name: "React", desc: "Component Architecture" },
        { name: "Redux", desc: "State Management" },
        { name: "TypeScript", desc: "Type Safety" },
        { name: "REST APIs", desc: "Integration" },
        { name: "JWT Auth", desc: "Authentication" },
        { name: "MySQL", desc: "Data Layer" },
        { name: "Performance", desc: "Optimization" },
        { name: "SEO", desc: "Web Vitals" },
    ];

    const domains = [
        {
            title: "Frontend Systems",
            items: ["React", "Redux", "TypeScript"],
        },
        {
            title: "Backend Integration",
            items: ["REST APIs", "PHP Slim", "JWT"],
        },
        {
            title: "Data Layer",
            items: ["MySQL", "Doctrine"],
        },
        {
            title: "Performance",
            items: ["SEO", "Web Vitals", "Optimization"],
        },
    ];

    return (
        <section className="skill glow-orb" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Engineering Stack</h2>
                            <p>
                                Building scalable, production-ready systems with
                                focus on performance, maintainability, and clean
                                architecture.
                            </p>

                            {/* 🔁 Tech Stream */}
                            <Carousel
                                responsive={responsive}
                                infinite
                                autoPlay
                                autoPlaySpeed={0}
                                customTransition="transform 6000ms linear"
                                arrows={false}
                                showDots={false}
                                pauseOnHover
                                draggable
                                swipeable
                                rtl
                                className="skill-slider"
                            >
                                {skills.map((skill, index) => (
                                    <div className="skill-item" key={index}>
                                        <h5>{skill.name}</h5>
                                        <p>{skill.desc}</p>
                                    </div>
                                ))}
                            </Carousel>

                            <div className="domains">
                                {domains.map((domain, i) => (
                                    <div className="domain-card" key={i}>
                                        <h4>{domain.title}</h4>
                                        <p>{domain.items.join(" • ")}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
