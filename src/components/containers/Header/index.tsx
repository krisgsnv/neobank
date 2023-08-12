import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="/" className="logo">
            NeoBank
          </a>
          <nav>
            <ul className="header__list">
              <li>
                <a href="/" className="header__link nav-link">
                  Credit card
                </a>
              </li>
              <li>
                <a href="/" className="header__link nav-link">
                  Product
                </a>
              </li>
              <li>
                <a href="/" className="header__link nav-link">
                  Account
                </a>
              </li>
              <li>
                <a href="/" className="header__link nav-link">
                  Resources
                </a>
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
