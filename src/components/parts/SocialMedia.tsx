import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/github-white-icon.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const SocialMedia = () => {
    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/nikolaosgkouziotis/">
                <img src={navIcon1} alt="" />
            </a>
            <a href="https://github.com/nikolas-gou">
                <img src={navIcon2} alt="" />
            </a>
            <a href="https://www.instagram.com/nikolas.gou/">
                <img src={navIcon3} alt="" />
            </a>
        </div>
    );
};
