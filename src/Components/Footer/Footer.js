import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">Quizzer</div>
      <div className="footer-connections">
        <a href="https://www.facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <AiFillTwitterCircle />
        </a>
        <a href="https://in.linkedin.com">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
