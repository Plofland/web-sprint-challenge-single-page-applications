import * as yup from "yup";

export default yup.object().shape({
  pizzaSize: yup
    .string()
    .oneOf(["small", "medium", "large"], "Please select a size"),
  sauceChoice: yup
    .string()
    .oneOf(
      ["redSauce", "garlicSauce", "bbqSauce", "spinSauce"],
      "Please select at least one type of sauce",
    ),

  pepperoni: yup.boolean(),
  dicedTomatoes: yup.boolean(),
  sausage: yup.boolean(),
  blackOlives: yup.boolean(),
  canadianBacon: yup.boolean(),
  roastedGarlic: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  artichokeHearts: yup.boolean(),
  grilledChicken: yup.boolean(),
  threeCheese: yup.boolean(),
  onions: yup.boolean(),
  pineapple: yup.boolean(),
  greenPepper: yup.boolean(),
  extraCheese: yup.boolean(),
});
