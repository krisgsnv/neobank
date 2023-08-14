import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo">
            NeoBank
          </Link>
          <nav>
            <ul className="header__list">
              <li>
                <Link to="/loan" className="header__link nav-link">
                  Credit card
                </Link>
              </li>
              <li>
                <Link to="/" className="header__link nav-link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/" className="header__link nav-link">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/" className="header__link nav-link">
                  Resources
                </Link>
              </li>
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
