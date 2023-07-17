const mobileMenuHandler = (e) => {
  const el = e.target;
  if (el.classList.contains("header__nav-btn")) {
    el.classList.toggle("header__nav-btn_active");
    document.body.classList.toggle("no-scroll");
    document.querySelector(".header__list")?.classList.toggle("header__list_active");
  }
};

document.body.addEventListener("click", mobileMenuHandler);
