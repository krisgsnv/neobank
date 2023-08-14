import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import "./style.scss";

const PrescoringForm = () => {
  return (
    <div className="prescoring-form">
      <h3 className="prescoring-form__h3 h3">Contact Information</h3>
      <div className="prescoring-form__fields">
        <Label text="Your last name" required>
          <Input placeholder="For Example Doe" />
        </Label>
        <Label text="Your first name" required>
          <Input placeholder="For Example John" />
        </Label>
        <Label text="Your patronymic">
          <Input placeholder="For Example Victorovich" />
        </Label>
        <Label text="Select term" required>
          <Input placeholder="6 month" />
        </Label>
        <Label text="Your email" required>
          <Input placeholder="test@gmail.com" type="email" />
        </Label>
        <Label text="Your date of birth" required>
          <Input placeholder="Select Date and Time" />
        </Label>
        <Label text="Your passport series" required>
          <Input placeholder="0000" />
        </Label>
        <Label text="Your passport number" required>
          <Input placeholder="000000" />
        </Label>
      </div>
      <Button text="Continue" className="prescoring-form__submit"/>
    </div>
  );
};

export default PrescoringForm;
