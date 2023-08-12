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
              <a href="/">About bank</a>
            </li>
            <li>
              <a href="/">Ask a Question</a>
            </li>
            <li>
              <a href="/">Quality of service</a>
            </li>
            <li>
              <a href="/">Requisites</a>
            </li>
            <li>
              <a href="/">Press center</a>
            </li>
            <li>
              <a href="/">Bank career</a>
            </li>
            <li>
              <a href="/">Investors</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
            <li>
              <a href="/">Business and processes</a>
            </li>
            <li>
              <a href="/">Compliance and business ethics</a>
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
