import "./style.scss";
import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import EmailService from "@/services/Email";
import LocalStorage from "@/services/LocalStorage";
import Button from "@/components/ui/Button";
import schema from "@/utils/schemas/subscribe";

type SubscribeFormData = {
  email: string;
};

const Support = () => {
  const [subscribe, setSubscribe] = useState(
    LocalStorage.get<boolean>("subscribed"),
  );

  const methods = useForm<SubscribeFormData>({
    resolver: yupResolver(schema),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  const submitHandler: SubmitHandler<SubscribeFormData> = (data) => {
    EmailService.subscribe(data).then(() => {
      LocalStorage.set("subscribed", true);
      setSubscribe(true);
    });
  };

  return (
    <section className="support">
      <p className="support__heading">Support</p>
      <h2 className="support__h2">
        Subscribe Newsletter & get
        <span className="support__h2_fullwidth">Bank News</span>
      </h2>
      {subscribe ? (
        <p className="support__message">
          You are already subscribed to the bank's newsletter
        </p>
      ) : (
        <FormProvider {...methods}>
          <form
            className="support__form"
            onSubmit={handleSubmit(submitHandler)}
          >
            <input
              className="support__input"
              placeholder="Your email"
              {...register("email")}
            />
            <Button
              text="Subscribe"
              className="support__button"
              type="submit"
            />
          </form>
          {errors.email && (
            <p className="support__error">{errors.email.message}</p>
          )}
        </FormProvider>
      )}
    </section>
  );
};

export default Support;
