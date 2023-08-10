import "@/assets/scss/index.scss";
import card1 from "@/assets/images/card1.png"
import card2 from "@/assets/images/card2.png"
import card3 from "@/assets/images/card3.png"
import card4 from "@/assets/images/card4.png"
import map from "@/assets/images/map.svg"
import logo from "@/assets/images/logo.png"
import Loan from "./pages/Loan";
export const App = () => (
  <>
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
    <main>
      <div className="container">
        <Loan />
        {/* <section className="home-banner">
          <div className="home-banner__text">
            <h1 className="h1 home-banner__h1">
              Choose the design you like and apply for card right now
            </h1>
            <button
              type="button"
              className="button button_default home-banner__button"
            >
              Choose the card
            </button>
          </div>
          <div className="home-banner__cards">
            <img
              src={card1}
              alt="First card"
              className="home-banner__card"
            />
            <img
              src={card2}
              alt="Second card"
              className="home-banner__card"
            />
            <img
              src={card3}
              alt="Third card"
              className="home-banner__card"
            />
            <img
              src={card4}
              alt="Fourth card"
              className="home-banner__card"
            />
          </div>
        </section>
        <section className="features">
          <h2 className="h2 features__h2">
            We Provide Many Features You Can Use
          </h2>
          <p className="features__text">
            You can explore the features that we provide with fun and have their
            own functions each feature
          </p>
          <ul className="features__list">
            <li className="features__list-item">
              Powerfull online protection.
            </li>
            <li className="features__list-item">Cashback without borders.</li>
            <li className="features__list-item">Personal design</li>
            <li className="features__list-item">Work anywhere in the world</li>
          </ul>
        </section>
        <section className="exchange">
          <div className="exchange__heading">
            <h2 className="h2 exchange__h2">Exchange rate in internet bank</h2>
            <p className="exchange__additional-info">
              Update every 15 minutes, MSC 09.08.2022
            </p>
          </div>
          <h3 className="h3 exchange__h3">Currency</h3>
          <table className="exchange__table"></table>
          <div className="exchange__spinner spinner"></div>
          <a href="/" className="exchange__link">
            All courses
          </a>
        </section>
        <section className="geography">
          <h2 className="h2 geography__h2">
            You can use our services anywhere in the world
          </h2>
          <p className="geography__text">
            Withdraw and transfer money online through our application
          </p>
          <object
            data={map}
            type="image/svg+xml"
            className="geography__map"
            title="Services map"
          ></object>
        </section>
        <section className="news">
          <h2 className="h2 news__h2">
            Current news from the world of finance
          </h2>
          <p className="news__text">
            We update the news feed every 15 minutes. You can learn more by
            clicking on the news you are interested in.
          </p>
          <div className="news-slider">
            <div className="news-slider__wrapper swiper-wrapper">
              <div className="news-slider__spinner spinner"></div>
            </div>
            <div className="news-slider__nav">
              <button
                type="button"
                className="news-slider__nav-btn news-slider__nav-btn_prev"
                title="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <path
                    d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25"
                    stroke="#222222"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="news-slider__nav-btn news-slider__nav-btn_next"
                title="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <path
                    d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0"
                    stroke="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="support">
          <p className="support__heading">Support</p>
          <h2 className="h2 support__h2">
            Subscribe Newsletter & get
            <span className="support__h2_fullwidth">Bank News</span>
          </h2>
          <form className="support__form">
            <input
              className="support__input"
              type="text"
              placeholder="Your email"
            />
            <button className="button support__button" type="submit">
              Subscribe
            </button>
          </form>
        </section> */}
      </div>
    </main>
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
  </>
);
