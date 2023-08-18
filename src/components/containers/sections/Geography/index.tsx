import map from "@/assets/images/map.svg";

import "./style.scss";

const Geography = () => {
  return (
    <section className="geography">
      <h2 className="geography__h2">
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
  );
};

export default Geography;
