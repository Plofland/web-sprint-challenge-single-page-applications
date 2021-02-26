import React from "react";
// import { Redirect } from "react-router-dom";
import pizzaImg from "./Assets/Pizza.jpg";
// import Congrats from "./Congrats";

export default function Form(props) {
  const { values, change, submit, disabled, errors } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
    // <Redirect to="/congrats" />;
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onClick = (event) => {
    window.location.href = "Congrats";
  };

  return (
    <div>
      <form className="container" onSubmit={onSubmit}>
        <div className="pizzaBuilder">
          <h3 id="byopH3">This could be yours</h3>
          <img id="formImg" src={pizzaImg} alt="pizza" />
          <h2 id="byopH2">How Do You Want Your Pizza?</h2>

          <label>
            <div className="inputTitle">Size</div>
            <select className="dropDown" name="pizzaSize" onChange={onChange}>
              <option value="">-Select-</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <div>{errors.pizzaSize}</div>
          </label>

          <div>
            <div className="inputTitle">Choice of Sauce</div>
            <div>
              <label>
                Red Sauce
                <input
                  type="radio"
                  name="sauceChoice"
                  value="redSauce"
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Garlic Ranch
                <input
                  type="radio"
                  name="sauceChoice"
                  value="garlicSauce"
                  onChange={onChange}
                ></input>
              </label>
              <label>
                BBQ Sauce
                <input
                  type="radio"
                  name="sauceChoice"
                  value="bbqSauce"
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Spinach Alfredo
                <input
                  type="radio"
                  name="sauceChoice"
                  value="spinSauce"
                  onChange={onChange}
                ></input>
              </label>
              <div>{errors.sauceChoice}</div>
            </div>
          </div>
          <div>
            <div className="inputTitle">Add Toppings</div>
            <div className="toppingCheckboxes">
              <label>
                Pepperoni
                <input
                  type="checkbox"
                  name="pepperoni"
                  value="pepperoni"
                  checked={values.pepperoni}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Diced Tomatoes
                <input
                  type="checkbox"
                  name="dicedTomatoes"
                  value="dicedTomatoes"
                  checked={values.dicedTomatoes}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Sausage
                <input
                  type="checkbox"
                  name="sausage"
                  value="sausage"
                  checked={values.sausage}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Black Olives
                <input
                  type="checkbox"
                  name="blackOlives"
                  value="blackOlives"
                  checked={values.blackOlives}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Canadian Bacon
                <input
                  type="checkbox"
                  name="canadianBacon"
                  value="canadianBacon"
                  checked={values.canadianBacon}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Roasted Garlic
                <input
                  type="checkbox"
                  name="roastedGarlic"
                  value="roastedGarlic"
                  checked={values.roastedGarlic}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Spicy Italian Sausage
                <input
                  type="checkbox"
                  name="spicyItalianSausage"
                  value="spicyItalianSausage"
                  checked={values.spicyItalianSausage}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Artichoke Hearts
                <input
                  type="checkbox"
                  name="artichokeHearts"
                  value="artichokeHearts"
                  checked={values.artichokeHearts}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Grilled Chicken
                <input
                  type="checkbox"
                  name="grilledChicken"
                  value="grilledChicken"
                  checked={values.grilledChicken}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Three Cheese
                <input
                  type="checkbox"
                  name="threeCheese"
                  value="threeCheese"
                  checked={values.threeCheese}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Onions
                <input
                  type="checkbox"
                  name="onions"
                  value="onions"
                  checked={values.onions}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Pineapple
                <input
                  type="checkbox"
                  name="pineapple"
                  value="pineapple"
                  checked={values.pineapple}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Green Pepper
                <input
                  type="checkbox"
                  name="greenPepper"
                  value="greenPepper"
                  checked={values.greenPepper}
                  onChange={onChange}
                ></input>
              </label>
              <label>
                Extra Cheese
                <input
                  type="checkbox"
                  name="extraCheese"
                  value="extraCheese"
                  checked={values.extraCheese}
                  onChange={onChange}
                ></input>
              </label>
            </div>
          </div>
          <label>
            <div className="inputTitle">What is your name?</div>
            <input
              type="text"
              name="orderName"
              value={values.orderName}
              placeholder="First Name"
              onChange={onChange}
            ></input>
            <div>{errors.orderName}</div>
          </label>
          {/* <label className="inputTitle switch">
            Choice of Substitute
            <div>{errors.substitute}</div>
            <input type="checkbox">Gluten Free Crust (+ $1.00)</input>
            <span class="slider"></span>
          </label> */}
          <label>
            <div className="inputTitle">Special Instructions</div>
            <input
              type="text"
              name="specialInstructions"
              value={values.instructions}
              placeholder="Health concerns?"
              onChange={onChange}
            ></input>
          </label>
        </div>
        <div>{errors.quantity}</div>
        <div>
          <select name="quantity" value={values.quantity} onChange={onChange}>
            <option value="">Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button type="submit" disabled={disabled} onClick={onClick}>
            Add to Order
          </button>
          {/* onClick={onClick} */}
        </div>
      </form>
    </div>
  );
}
