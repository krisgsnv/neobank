import * as yup from "yup";
import { today, transformDateFormat } from "@/utils/date";
import { getYear, setYear, isValid } from "date-fns";

const schema = yup.object().shape({
  amount: yup
    .number()
    .min(15000, "Amount must be more than 15 000 ₽")
    .max(600000, "Amount must be less than 600 000 ₽")
    .required()
    .typeError("Field is required")
    .default(150000),
  term: yup.number().required(),
  firstName: yup
    .string()
    .matches(/^[a-zA-Zа-яёА-ЯЁ]+$/, "Incorrect first name")
    .required("Enter your first name"),
  lastName: yup
    .string()
    .matches(/^[a-zA-Zа-яёА-ЯЁ]+$/, "Incorrect last name")
    .required("Enter your last name"),
  middleName: yup
    .string()
    .matches(/^[a-zA-Zа-яёА-ЯЁ]+$/, "Incorrect patronymic")
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .default(null),
  email: yup
    .string()
    .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, "Incorrect email address")
    .required(),
  birthdate: yup
    .string()
    .test(
      "age-check",
      "You must be 18 or older",
      (value) =>
        value !== undefined &&
        isValid(new Date(value)) &&
        new Date(value) < setYear(today, getYear(today) - 18)
    )
    .transform((value) => transformDateFormat(value, "yyyy-MM-dd"))
    .typeError("Incorrect date of birth")
    .required("Incorrect date of birth"),
  passportSeries: yup
    .string()
    .matches(/^\d{4}$/, "The series must be 4 digits")
    .required(),
  passportNumber: yup
    .string()
    .matches(/^\d{6}$/, "The series must be 6 digits")
    .required()
});

export default schema;
