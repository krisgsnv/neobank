import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import "./style.scss";

export const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <b className="not-found__title">Oops....</b>
      <h2 className="not-found__h2">Page not found</h2>
      <p className="not-found__message">
        This Page doesn`t exist or was removed! We suggest you go back.
      </p>
      <Button
        text="Go back"
        className="not-found__button"
        clickHandler={() => {
          navigate(-1);
        }}
      />
    </section>
  );
};
