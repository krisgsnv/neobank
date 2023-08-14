import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__heading">
          <a href="/" className="footer__logo">
            <img src={logo} alt="Neobank" />
          </a>
          <div className="footer__contacts">
            <a href="tel:+74959842513" className="footer__phone">
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className="footer__mail">
              info@neoflex.ru
            </a>
          </div>
        </div>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li>
              <Link to="/">About bank</Link>
            </li>
            <li>
              <Link to="/">Ask a Question</Link>
            </li>
            <li>
              <Link to="/">Quality of service</Link>
            </li>
            <li>
              <Link to="/">Requisites</Link>
            </li>
            <li>
              <Link to="/">Press center</Link>
            </li>
            <li>
              <Link to="/">Bank career</Link>
            </li>
            <li>
              <Link to="/">Investors</Link>
            </li>
            <li>
              <Link to="/">Analytics</Link>
            </li>
            <li>
              <Link to="/">Business and processes</Link>
            </li>
            <li>
              <Link to="/">Compliance and business ethics</Link>
            </li>
          </ul>
        </nav>
        <p className="footer__cookies">
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </p>
      </div>
    </footer>
  );
};

export default Footer;
