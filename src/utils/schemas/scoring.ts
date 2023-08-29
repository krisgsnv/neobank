import * as yup from "yup";
import { today, transformDateFormat } from "@/utils/date";
import { isValid } from "date-fns";
import { replaceToDigits } from "@/utils/string";

const schema = yup.object().shape({
  gender: yup.string().required("Select one of the options"),
  maritalStatus: yup.string().required("Select one of the options"),
  dependentAmount: yup
    .number()
    .required()
    .typeError("Select one of the options"),
  passportIssueDate: yup
    .string()
    .test(
      "date-check",
      "Incorrect date of passport issue date",
      (value) =>
        value !== undefined &&
        isValid(new Date(value)) &&
        new Date(value) < today
    )
    .transform((value) => transformDateFormat(value, "yyyy-MM-dd"))
    .typeError("Incorrect date of passport issue date")
    .required("Incorrect date of passport issue date"),
  passportIssueBranch: yup
    .string()
    .transform(replaceToDigits)
    .matches(/^\d{6}$/, "The division code must be 6 digits")
    .required(),
  employmentStatus: yup.string().required("Select one of the options"),
  employerINN: yup
    .number()
    .transform((value, originalValue) => parseInt(originalValue))
    .test(
      "inn-check",
      "The INN must be 12 digits",
      (value) => value !== undefined && /^\d{12}$/.test(value.toString())
    )
    .typeError("The INN must be 12 digits")
    .required("The INN must be 12 digits"),
  salary: yup
    .number()
    .transform((value, originalValue) => parseInt(originalValue))
    .typeError("Enter your salary")
    .required(),
  position: yup.string().required("Select one of the options"),
  workExperienceTotal: yup
    .number()
    .transform((value, originalValue) => parseInt(originalValue))
    .typeError("Enter your work experience total")
    .required(),
  workExperienceCurrent: yup
    .number()
    .transform((value, originalValue) => parseInt(originalValue))
    .typeError("Enter your work experience current")
    .required()
});

export default schema;
