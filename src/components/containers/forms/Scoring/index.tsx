/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormLayout from "@/components/layout/FormLayout";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
// import Loader from "@/components/ui/Loader";

import type { ScoringFormDataType } from "@/types/Scoring";
import schema from "@/utils/schemas/scoring";
import { replaceToDigits } from "@/utils/string";
import "./style.scss";
import { useParams } from "react-router";
import ScoringService from "@/services/Scoring";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { increaseStep } from "@/store/stepSlice";

const Scoring = (): JSX.Element => {
  const { applicationId } = useParams();
  const dispatch = useAppDispatch();
  const methods = useForm<ScoringFormDataType>({
    resolver: yupResolver(schema)
  });

  const { register, handleSubmit } = methods;
  const submitHandler: SubmitHandler<ScoringFormDataType> = async (data) => {
    console.log(data);
    if (applicationId) {
      const result = await ScoringService.sendFormData(data, +applicationId);
      console.log(result);
      if (result) {
        dispatch(increaseStep());
      }
    }
  };

  const numberChangeHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    target.value = replaceToDigits(target.value);
  };

  const numberFixLengthChangeHandler = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    target.value = replaceToDigits(target.value).slice(0, 2);
  };

  return (
    <section className="scoring">
      <FormLayout>
        <FormProvider {...methods}>
          <div className="scoring__heading">
            <h2 className="scoring__h2">Continuation of the application</h2>
            <span className="scoring__step">Step 2 of 5</span>
          </div>
          <form className="scoring-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="scoring-form__fields">
              <Label
                text="What's your gender"
                required
                className="scoring-form__label"
              >
                <Select
                  name="gender"
                  options={[
                    { value: "MALE", label: "Male" },
                    { value: "FEMALE", label: "Female" }
                  ]}
                />
              </Label>
              <Label
                text="Your marital status"
                required
                className="scoring-form__label"
              >
                <Select
                  name="maritalStatus"
                  options={[
                    { value: "MARRIED", label: "Married" },
                    { value: "DIVORCED", label: "Divorced" },
                    { value: "SINGLE", label: "Single" },
                    { value: "WIDOW_WIDOWER", label: "Widow/Widower" }
                  ]}
                />
              </Label>
              <Label
                text="Your number of dependents"
                required
                className="scoring-form__label"
              >
                <Select
                  name="dependentAmount"
                  options={[
                    { value: 0, label: "0" },
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" }
                  ]}
                />
              </Label>
              <Label
                text="Date of issue of the passport"
                required
                className="scoring-form__label"
              >
                <Input placeholder="YYYY-MM-DD" name="passportIssueDate" />
              </Label>
              <Label
                text="Division code"
                required
                className="scoring-form__label"
              >
                <Input
                  placeholder="000000"
                  name="passportIssueBranch"
                  registerParams={{
                    onChange: numberChangeHandler
                  }}
                />
              </Label>
            </div>
            <h3 className="scoring-form__h3">Employment</h3>
            <div className="scoring-form__fields scoring-form__fields_employment">
              <Label
                text="Your employment status"
                required
                className="scoring-form__label"
              >
                <Select
                  name="employment.employmentStatus"
                  options={[
                    { value: "UNEMPLOYED", label: "Unemployed" },
                    { value: "SELF_EMPLOYED", label: "Self-employed" },
                    { value: "EMPLOYED", label: "Employed" },
                    { value: "BUSINESS_OWNER", label: "Business owner" }
                  ]}
                />
              </Label>
              <Label
                text="Your employer INN"
                required
                className="scoring-form__label"
              >
                <Input
                  name="employment.employerINN"
                  placeholder="000000000000"
                  registerParams={{
                    onChange: numberChangeHandler
                  }}
                />
              </Label>
              <Label
                text="Your salary"
                required
                className="scoring-form__label"
              >
                <Input
                  name="employment.salary"
                  placeholder="For example 100000"
                  registerParams={{
                    onChange: numberChangeHandler
                  }}
                />
              </Label>
              <Label
                text="Your position"
                required
                className="scoring-form__label"
              >
                <Select
                  name="employment.position"
                  options={[
                    { value: "WORKER", label: "Worker" },
                    { value: "MID_MANAGER", label: "Middle manager" },
                    { value: "TOP_MANAGER", label: "Top manager" },
                    { value: "OWNER", label: "Owner" }
                  ]}
                />
              </Label>
              <Label
                text="Your work experience total"
                required
                className="scoring-form__label"
              >
                <Input
                  name="employment.workExperienceTotal"
                  placeholder="For example 10"
                  registerParams={{
                    onChange: numberFixLengthChangeHandler
                  }}
                />
              </Label>
              <Label
                text="Your work experience current"
                required
                className="scoring-form__label"
              >
                <Input
                  name="employment.workExperienceCurrent"
                  placeholder="For example 2"
                  registerParams={{
                    onChange: numberFixLengthChangeHandler
                  }}
                />
              </Label>
              <input type="hidden" {...register("account")} />
            </div>
            <Button
              type="submit"
              text="Continue"
              className="scoring-form__submit"
            />
          </form>
        </FormProvider>
      </FormLayout>
    </section>
  );
};

export default Scoring;
