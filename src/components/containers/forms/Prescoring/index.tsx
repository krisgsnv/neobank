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

import type { PrescoringFormDataType } from "@/types/Prescoring";
import PrescoringService from "@/services/Prescoring";
import schema from "@/utils/schemas/prescoring";
import { replaceToDigits } from "@/utils/string";
import "./style.scss";
import Range from "@/components/ui/Range";
import { numberWithSpaces } from "@/utils/number";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  setFormData,
  setOffers,
  setPrescoringStep,
  setStatus
} from "@/store/prescoringSlice";
import { setStep } from "@/store/stepSlice";
import { useAppSelector } from "@/hooks/useAppSelector";

const Prescoring = (): JSX.Element => {
  const initialFormData = useAppSelector((state) => state.prescoring.formData);

  const methods = useForm<PrescoringFormDataType>({
    resolver: yupResolver(schema),
    defaultValues: initialFormData
  });

  const dispatch = useAppDispatch();

  const { handleSubmit, getValues, formState } = methods;
  const formValues = getValues();
  const [amount, setAmount] = useState(formValues.amount);

  const changeAmountHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    setAmount(target.valueAsNumber);
  };

  const numberChangeHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    target.value = replaceToDigits(target.value);
  };
  console.log(formState.isDirty);

  const sendFormData: SubmitHandler<PrescoringFormDataType> = async (data) => {
    if (formState.isDirty) {
      setStatus("loading");
      try {
        const offers = await PrescoringService.getOffers(data);
        if (offers) {
          dispatch(setFormData(data));
          dispatch(setOffers(offers));
          dispatch(setStep(1));
          dispatch(setPrescoringStep(1));
        }
      } catch (error) {
        setStatus("error");
      }
    } else {
      dispatch(setPrescoringStep(1));
    }
  };

  return (
    <Element name="prescoring">
      <section className="prescoring-form">
        <FormLayout>
          <FormProvider {...methods}>
            <form
              className="prescoring-form__content"
              onSubmit={handleSubmit(sendFormData)}
            >
              <div className="prescoring-form__heading">
                <div>
                  <div className="prescoring-form__title">
                    <h2 className="h2">Customize your card</h2>
                    <span className="prescoring-form__steps">Step 1 of 5</span>
                  </div>
                  <div className="prescoring-form__range-wrapper">
                    <h4 className="prescoring-form__h4">Select amount</h4>
                    <Range
                      name="amount"
                      min={15000}
                      max={600000}
                      step={5000}
                      className="prescoring-form__range"
                      registerParams={{
                        onChange: changeAmountHandler
                      }}
                    />
                  </div>
                </div>
                <Divider position="vertical" type="dashed" />
                <div>
                  <h3 className="h3">You have chosen the amount</h3>
                  <span className="prescoring-form__choosen-amount price">
                    {numberWithSpaces(amount)} ₽
                  </span>
                  <Divider
                    position="horizontal"
                    type="solid"
                    className="prescoring-form__divider"
                  />
                </div>
              </div>
              <div className="prescoring-contact">
                <h3 className="prescoring-contact__h3 h3">
                  Contact Information
                </h3>
                <div className="prescoring-contact__fields">
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
                    <Input placeholder="YYYY-MM-DD" name="birthdate" />
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
                  className="prescoring-contact__submit"
                  type="submit"
                />
              </div>
            </form>
          </FormProvider>
        </FormLayout>
      </section>
    </Element>
  );
};

export default Prescoring;
