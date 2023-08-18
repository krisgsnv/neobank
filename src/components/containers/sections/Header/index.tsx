import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";
import Button from "@/components/ui/Button";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (i: number) =>
    classNames("header__link nav-link", {
      header__link_active: i === activeLink,
    });

  const listClasses = classNames("header__list", {
    header__list_active: menuOpen,
  });

  const navBtnClasses = classNames("header__nav-btn", {
    "header__nav-btn_active": menuOpen,
  });

  const linkClickHandler = (i:number) => {
    setActiveLink(i);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link
            to="/"
            className="header__logo"
            onClick={() => setActiveLink(-1)}
          >
            NeoBank
          </Link>
          <nav>
            <ul className={listClasses}>
              {links.map((link, i) => (
                <li key={link.text} onClick={() => linkClickHandler(i)}>
                  <Link to={link.url} className={linkClasses(i)}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button text="Online Bank" className="header__button" />
          <button
            type="button"
            className={navBtnClasses}
            title="Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
