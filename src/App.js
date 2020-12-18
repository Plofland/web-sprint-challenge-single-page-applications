import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
// import axios from "axios";
import Form from "./components/Form";
import schema from "./formSchema";
import * as yup from "yup";

const initialPizzaFormValues = {
  pizzaSize: "",
  sauceChoice: "",
  pepperoni: false,
  dicedTomatoes: false,
  sausage: false,
  blackOlives: false,
  canadianBacon: false,
  roastedGarlic: false,
  spicyItalianSausage: false,
  artichokeHearts: false,
  grilledChicken: false,
  threeCheese: false,
  onions: false,
  pineapple: false,
  greenPepper: false,
  extraCheese: false,
  specialInstructions: "",
};

const initialPizzaFormErrors = {
  pizzaSize: "",
  sauceChoice: "",
};

const initialDisabled = true;

const App = () => {
  const [pizzaFormValues, setPizzaFormValues] = useState(
    initialPizzaFormValues,
  );
  const [formErrors, setFormErrors] = useState(initialPizzaFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setPizzaFormValues({
      ...setPizzaFormValues,
      [name]: value,
    });
  };

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to="/">Help</Link>
      </nav>
      <Route to="/">
        <Form
          values={pizzaFormValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
    </div>
  );
};
export default App;
