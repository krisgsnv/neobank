import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Element } from "react-scroll";

import FormLayout from "@/components/layout/FormLayout";
import Divider from "@/components/ui/Divider";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Loader from "@/components/ui/Loader";

import type { PrescoringFormData } from "@/types/Prescoring";
import PrescoringService from "@/services/Prescoring";
import schema from "@/utils/schemas/prescoring";
import { replaceToDigits } from "@/utils/string";
import "./style.scss";

type StatusType = "start" | "loading";

const Prescoring = (): JSX.Element => {
  const [status, setStatus] = useState<StatusType>("start");
  const methods = useForm<PrescoringFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: 150000,
      middleName: null,
      term: 6
    }
  });

  const { handleSubmit, getValues } = methods;
  const formValues = getValues();
  const [amount, setAmount] = useState(formValues.amount);

  const changeAmountHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    target.value = replaceToDigits(`${target.value}`);
    setAmount(+target.value);
  };

  const numberChangeHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    target.value = replaceToDigits(target.value);
  };

  const submitHandler: SubmitHandler<PrescoringFormData> = (data) => {
    PrescoringService.get(data);
    setStatus("loading");
  };
  return (
    <Element name="prescoring">
      <section className="prescoring">
        {status === "loading" ? (
          <Loader className="prescoring-loader" />
        ) : (
          <FormLayout>
            <FormProvider {...methods}>
              <form
                className="prescoring__content"
                onSubmit={handleSubmit(submitHandler)}
              >
                <div className="prescoring__heading">
                  <div>
                    <div className="prescoring__title">
                      <h2 className="h2">Customize your card</h2>
                      <span className="prescoring__steps">Step 1 of 5</span>
                    </div>
                    <div className="prescoring__range">
                      <Label text="Your amount" required>
                        <Input
                          placeholder="Set amount"
                          name="amount"
                          registerParams={{
                            onChange: changeAmountHandler
                          }}
                        />
                      </Label>
                    </div>
                  </div>
                  <Divider position="vertical" type="dashed" />
                  <div>
                    <h3 className="h3">You have chosen the amount</h3>
                    <span className="prescoring__choosen-amount price">
                      {amount.toLocaleString()} ₽
                    </span>
                    <Divider
                      position="horizontal"
                      type="solid"
                      className="prescoring__divider"
                    />
                  </div>
                </div>
                <div className="prescoring-form">
                  <h3 className="prescoring-form__h3 h3">
                    Contact Information
                  </h3>
                  <div className="prescoring-form__fields">
                    <Label text="Your last name" required>
                      <Input placeholder="For Example Doe" name="lastName" />
                    </Label>
                    <Label text="Your first name" required>
                      <Input placeholder="For Example John" name="firstName" />
                    </Label>
                    <Label text="Your patronymic">
                      <Input
                        placeholder="For Example Victorovich"
                        name="middleName"
                      />
                    </Label>
                    <Label text="Select term" required>
                      <Select
                        name="term"
                        selectedIndex={0}
                        options={[
                          { value: 6, label: "6 month" },
                          { value: 12, label: "12 month" },
                          { value: 18, label: "18 month" },
                          { value: 24, label: "24 month" }
                        ]}
                      />
                    </Label>
                    <Label text="Your email" required>
                      <Input placeholder="test@gmail.com" name="email" />
                    </Label>
                    <Label text="Your date of birth" required>
                      <Input
                        placeholder="Select Date and Time"
                        name="birthdate"
                      />
                    </Label>
                    <Label text="Your passport series" required>
                      <Input
                        placeholder="0000"
                        name="passportSeries"
                        registerParams={{
                          onChange: numberChangeHandler
                        }}
                      />
                    </Label>
                    <Label text="Your passport number" required>
                      <Input
                        placeholder="000000"
                        name="passportNumber"
                        registerParams={{
                          onChange: numberChangeHandler
                        }}
                      />
                    </Label>
                  </div>
                  <Button
                    text="Continue"
                    className="prescoring-form__submit"
                    type="submit"
                  />
                </div>
              </form>
            </FormProvider>
          </FormLayout>
        )}
      </section>
    </Element>
  );
};

export default Prescoring;
