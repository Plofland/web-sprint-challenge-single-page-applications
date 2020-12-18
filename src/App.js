import React from "react";
import { Route, Link } from "react-router-dom";
// import axios from "axios";
import Form from "./components/Form";

const initialPizzFormValues = {
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

initialDisabled = true;

const App = () => {
  const [pizzaFormValues, setPizzaFormValues] = useState(
    initialPizzaFormValues,
  );
  const [formErrors, setFormErrors] = useState(initialPizzaFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to="/">Help</Link>
      </nav>
      <Route to="/">
        <Form />
      </Route>
    </div>
  );
};
export default App;
