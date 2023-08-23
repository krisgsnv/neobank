import Button from "@/components/ui/Button";
import "./style.scss";

export const NotFound = (): JSX.Element => {
  return (
    <section className="not-found">
      <b className="not-found__title">Oops....</b>
      <h2 className="not-found__h2">Page not found</h2>
      <p className="not-found__message">This Page doesn`t exist or was removed! We suggest you go back.</p>
      <Button text="Go back" className="not-found__button" />
    </section>
  );
};
