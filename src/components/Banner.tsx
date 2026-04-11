import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { useBreakpoint } from "../hooks/useBreakpoint";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [bits, setBits] = useState<
        { id: number; value: 0 | 1; x: number; y: number; fontSize: number }[]
    >([
        { id: 1, value: 0, x: 0, y: 0, fontSize: 75 },
        { id: 2, value: 0, x: 0, y: 0, fontSize: 75 },
        { id: 3, value: 0, x: 0, y: 0, fontSize: 75 },
        { id: 4, value: 1, x: 0, y: 0, fontSize: 75 },
        { id: 5, value: 0, x: 0, y: 0, fontSize: 75 },
        { id: 6, value: 1, x: 0, y: 0, fontSize: 75 },
        { id: 7, value: 0, x: 0, y: 0, fontSize: 75 },
        { id: 8, value: 1, x: 0, y: 0, fontSize: 75 },
    ]);
    const { isDesktop } = useBreakpoint();

    const toRotate = [
        "Software Engineer",
        "React Developer",
        "Frontend Engineer",
    ];
    const period = 2000;

    // typing effect
    useEffect(() => {
        const ticker = setInterval(() => tick(), delta);
        return () => clearInterval(ticker);
    }, [text, delta]);

    // Define initial animation delays
    useEffect(() => {
        const spans = document.querySelectorAll(".bits span");
        spans.forEach((span, index) => {
            (span as HTMLElement).style.animationDelay = `${index * 0.2}s`;
        });
    }, []);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) setDelta((prev) => prev / 2);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    const handleMouseEnter = () => {
        requestAnimationFrame(() => {
            setBits((prev) => {
                const newBits = Array.from({ length: 100 }).map((_, i) => ({
                    id: Date.now() + i,
                    value: (Math.random() < 0.5 ? 0 : 1) as 0 | 1,
                    x: 0,
                    y: 0,
                    fontSize: 75,
                }));

                return [...prev.map((b) => ({ ...b })), ...newBits];
            });

            requestAnimationFrame(() => {
                setBits((prev) =>
                    prev.map((b) => ({
                        ...b,
                        x: Math.random() * (50 - -500) + -500,
                        y: Math.random() * (400 - -200) + -200,
                        fontSize: Math.random() * 70 + 5,
                    })),
                );
            });
        });
    };

    const handleMouseLeave = () => {
        setBits((prev) =>
            prev.slice(0, 8).map((b) => ({
                ...b,
                x: 0,
                y: 0,
                fontSize: 75,
            })),
        );
    };

    return (
        <section className="banner glow-orb" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Portfolio
                                    </span>
                                    <h1>
                                        Hi! I'm Nikolaos{" "}
                                        <span
                                            className="txt-rotate"
                                            data-period="1000"
                                            data-rotate='["Software Engineer", "React Developer", "Frontend Engineer"]'
                                        >
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>
                                        React-focused developer passionate about
                                        building scalable frontend applications
                                        and well-structured systems. Strong
                                        problem-solving mindset with experience
                                        designing and implementing full web
                                        architectures, seeking to deliver
                                        production-ready React solutions with
                                        optimized performance and maintainable
                                        code.
                                    </p>

                                    <HashLink to="#connect">
                                        {" "}
                                        <button
                                            onClick={() =>
                                                console.log("connect")
                                            }
                                        >
                                            Let’s Connect{" "}
                                            <ArrowRightCircle size={25} />
                                        </button>
                                    </HashLink>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    {isDesktop && (
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__zoomIn bits"
                                                : "bits"
                                        }
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {bits.map((bit) => (
                                            <span
                                                key={bit.id}
                                                className={`
                                                ${bit.value === 0 ? "zero" : "one"}
                                                ${bits.length == 8 ? "default" : ""}
                                            `}
                                                style={{
                                                    transform: `translate(${bit.x}px, ${bit.y}px)`,
                                                    opacity:
                                                        bits.length > 8
                                                            ? 0.3
                                                            : 1,
                                                    fontSize: `${bit.fontSize}px`,
                                                    transition:
                                                        "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease, font-size 0.8s ease",
                                                    animation:
                                                        bit.x !== 0 ||
                                                        bit.y !== 0
                                                            ? "none"
                                                            : undefined,
                                                }}
                                            >
                                                {bit.value}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};
