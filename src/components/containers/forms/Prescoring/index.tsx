import FormLayout from "@/components/layout/FormLayout";
import Divider from "@/components/ui/Divider";
import PrescoringForm from "./PrescoringForm";
import "./style.scss";

const Prescoring = () => {
  return (
    <FormLayout>
      <form className="prescoring">
        <div className="prescoring__left">
          <div className="prescoring__heading">
            <h2 className="h2">Customize your card</h2>
            <span className="prescoring__steps">Step 1 of 5</span>
          </div>
        </div>
        <Divider position="vertical" type="dashed" />
        <div className="prescoring__right">
          <h3 className="h3">You have chosen the amount</h3>
          <span className="prescoring__choosen-amount price">150 000 ₽</span>
          <Divider position="horizontal" type="solid" className="prescoring__divider"/>
        </div>
        <PrescoringForm />
      </form>
    </FormLayout>
  );
};

export default Prescoring;
