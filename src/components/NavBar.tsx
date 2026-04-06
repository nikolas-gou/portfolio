import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { SocialMedia } from "./parts/SocialMedia";
import { Logo } from "./Logo";
import { useActiveSection } from "../hooks/useActiveSection";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
    ];
    const activeSection = useActiveSection(navItems.map((item) => item.id));

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navItems.map((item) => (
                            <Nav.Link
                                key={item.id}
                                href={`#${item.id}`}
                                className={
                                    activeSection === item.id
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <span className="navbar-text">
                        <SocialMedia />{" "}
                        <HashLink to="#connect">
                            <button className="vvd">
                                <span>Let’s Connect</span>
                            </button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
