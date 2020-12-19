import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
// import axios from "axios";
import Form from "./components/Form";
// import Banner from "./components/Banner";
import schema from "./validation/formSchema";
import * as yup from "yup";
import pizzaImg from "./components/Assets/Pizza.jpg";

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
// const initialPizza = [];

const App = () => {
  // const [pizza, setPizza] = useState(initialPizza);
  const [pizzaFormValues, setPizzaFormValues] = useState(
    initialPizzaFormValues,
  );
  const [formErrors, setFormErrors] = useState(initialPizzaFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const postNewPizza;

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

  const formSubmit = () => {
    const newPizza = {
      pizzaSize: pizzaFormValues.pizzaSize,
      sauceChoice: pizzaFormValues.sauceChoice,
      pepperoni: pizzaFormValues.pepperoni,
      dicedTomatoes: pizzaFormValues.dicedTomatoes,
      sausage: pizzaFormValues.sausage,
      blackOlives: pizzaFormValues.blackOlives,
      canadianBacon: pizzaFormValues.canadianBacon,
      roastedGarlic: pizzaFormValues.roastedGarlic,
      spicyItalianSausage: pizzaFormValues.spicyItalianSausage,
      artichokeHearts: pizzaFormValues.artichokeHearts,
      grilledChicken: pizzaFormValues.grilledChicken,
      threeCheese: pizzaFormValues.threeCheese,
      onions: pizzaFormValues.onions,
      pineapple: pizzaFormValues.pineapple,
      greenPepper: pizzaFormValues.greenPepper,
      extraCheese: pizzaFormValues.extraCheese,
      specialInstructions: pizzaFormValues.specialInstructions,
    };
  };

  useEffect(() => {
    schema.isValid(pizzaFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [pizzaFormValues]);

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to="/home">Home</Link>
        <Link to="/help">Help</Link>
      </nav>
      <Route path="/form">
        <Form
          values={pizzaFormValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      {/* <Banner /> */}
      <h2>HEADER TEST</h2>
      <img src={pizzaImg} alt="magarita pizza" />
      <Link to="/form">Pizza?</Link>
    </div>
  );
};
export default App;
