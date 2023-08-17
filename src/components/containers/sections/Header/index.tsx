import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";
import "./style.scss";

const Header = () => {
  const links = [
    {
      text: "Credit card",
      url: "/loan",
    },
    {
      text: "Product",
      url: "/",
    },
    {
      text: "Account",
      url: "/",
    },
    {
      text: "Resources",
      url: "/",
    },
  ];

  const [activeLink, setActiveLink] = useState(-1);

  const linkClasses = (i: number) =>
    classNames("header__link nav-link", {
      header__link_active: i === activeLink,
    });

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo" onClick={() => setActiveLink(-1)}>
            NeoBank
          </Link>
          <nav>
            <ul className="header__list">
              {links.map((link, i) => (
                <li key={link.text} onClick={() => setActiveLink(i)}>
                  <Link to={link.url} className={linkClasses(i)}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="button button_default header__button"
          >
            Online Bank
          </button>
          <button
            type="button"
            className="header__nav-btn"
            title="Menu"
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
