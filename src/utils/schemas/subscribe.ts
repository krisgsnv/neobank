import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, "Incorrect email address")
    .required(),
});

export default schema;
