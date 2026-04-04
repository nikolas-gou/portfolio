import { Container, Row, Col } from "react-bootstrap";
import { SocialMedia } from "./parts/SocialMedia";
import { Logo } from "./Logo";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <Logo />
                    </Col>
                    <Col className="footer-right">
                        <div className="social-center">
                            <SocialMedia />
                        </div>
                    </Col>
                </Row>
                <div className="footer-text">
                    <p>
                        © 2026 All Rights Reserved — Developed by Nikolaos
                        Gkouziotis
                    </p>
                </div>
            </Container>
        </footer>
    );
};
