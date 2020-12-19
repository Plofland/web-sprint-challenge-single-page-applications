import * as yup from "yup";

export default yup.object().shape({
  pizzaSize: yup
    .string()
    .required("Please select a size")
    .oneOf(["small", "medium", "large"], "Please select a size"),
  sauceChoice: yup
    .string()
    .required("Please select a type of sauce")
    .oneOf(
      ["redSauce", "garlicSauce", "bbqSauce", "spinSauce"],
      "Please select at least one type of sauce",
    ),
  specialInstructions: yup.string(),
  toppingBox: yup.boolean(),
  quantity: yup
    .string()
    .required("Please select the number of pizzas you would like")
    .oneOf(
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      "Please select a quantity",
    ),
});
