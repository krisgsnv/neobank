import "./style.scss";

const Features = (): JSX.Element => {
  return (
    <section className="features">
      <h2 className="features__h2">We Provide Many Features You Can Use</h2>
      <p className="features__text">
        You can explore the features that we provide with fun and have their own
        functions each feature
      </p>
      <ul className="features__list">
        <li className="features__list-item">Powerfull online protection.</li>
        <li className="features__list-item">Cashback without borders.</li>
        <li className="features__list-item">Personal design</li>
        <li className="features__list-item">Work anywhere in the world</li>
      </ul>
    </section>
  );
};

export default Features;
