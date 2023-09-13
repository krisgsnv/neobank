import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";
import Button from "@/components/ui/Button";
import "./style.scss";

const Header = (): JSX.Element => {
  const links = [
    {
      text: "Credit card",
      url: "/loan"
    },
    {
      text: "Product",
      url: "/product"
    },
    {
      text: "Account",
      url: "/account"
    },
    {
      text: "Resources",
      url: "/resources"
    }
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    classNames("header__link nav-link", {
      header__link_active: isActive
    });

  const listClasses = classNames("header__list", {
    header__list_active: menuOpen
  });

  const navBtnClasses = classNames("header__nav-btn", {
    "header__nav-btn_active": menuOpen
  });

  const toggleMenuVisibility = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const hideMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            NeoBank
          </Link>
          <nav>
            <ul className={listClasses}>
              {links.map((link) => (
                <li key={link.text} onClick={hideMenu}>
                  <NavLink to={link.url} className={linkClasses}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Button text="Online Bank" className="header__button" />
          <button
            type="button"
            className={navBtnClasses}
            title="Menu"
            onClick={toggleMenuVisibility}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
