import React from "react";
import * from "./Assets/Pizza.jpg";

export default function Form() {


  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  }

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };




  return (
    <form className="containter" onSubmit={onSubmit}>
      <div className="formHeader">
        <h2>Lambda Eats</h2>
        <div className="linkBtn">
          <a href="/app.js">Home</a>
        </div>
        <div className="linkBtn">
          <a href="/">Help</a>
        </div>
      </div>
      <div className="pizzaBuilder">
        <h3 id="byopH3">Build Your Own Pizza</h3>
        <img id="formImg" src="pizzaImg.jpg" alt="pizza" />
        <h2 id="byopH2">Build Your Own Pizza</h2>
        <label className="inputTitle">
          Choice of Size
          <div>{errors.sizeErr}</div>
          <select className="dropDown">
            <option value="">-Select-</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label className="inputTitle">
          Choice of Sauce
          <div>{errors.sauceErr}</div>
          <div>
            <input type="radio">Original Red</input>
            <input type="radio">Garlic Ranch</input>
            <input type="radio">BBQ Sauce</input>
            <input type="radio">Spinach Alfredo</input>
          </div>
        </label>
        <label className="inputTitle">
          Add Toppings
          <div>{errors.toppingsErr}</div>
          <div className="toppingCheckboxes">
            <input type="checkbox" name="toppings" value="pepperoni">
              Pepperoni
            </input>
            <input type="checkbox" name="toppings" value="dicedTomatoes">
              Diced Tomatoes
            </input>
            <input type="checkbox" name="toppings" value="sausage">
              Sausage
            </input>
            <input type="checkbox" name="toppings" value="blackOlives">
              Black Olives
            </input>
            <input type="checkbox" name="toppings" value="canadianBacon">
              Canadian Bacon
            </input>
            <input type="checkbox" name="toppings" value="roastedGarlic">
              Roasted Garlic
            </input>
            <input type="checkbox" name="toppings" value="spicyItalianSausage">
              Spicy Italian Sausage
            </input>
            <input type="checkbox" name="toppings" value="artichokeHearts">
              Artichoke Hearts
            </input>
            <input type="checkbox" name="toppings" value="grilledChicken">
              Grilled Chicken
            </input>
            <input type="checkbox" name="toppings" value="threeCheese">
              Three Cheese
            </input>
            <input type="checkbox" name="toppings" value="onions">
              Onions
            </input>
            <input type="checkbox" name="toppings" value="pineapple">
              Pineapple
            </input>
            <input type="checkbox" name="toppings" value="greenPepper">
              Green Pepper
            </input>
            <input type="checkbox" name="toppings" value="extraCheese">
              Extra Cheese
            </input>
          </div>
        </label>
        <label className="inputTitle switch">
          Choice of Substitute
          <div>{errors.substituteErr}</div>
          <input type="checkbox">Gluten Free Crust (+ $1.00)</input>
          <span class="slider"></span>
        </label>
        <label className="inputTitle">
          Special Instructions
          <input
            type="text"
            placeholder="Anything else you'd like to add?"
          ></input>
        </label>
      </div>
      <div>
        <select type='' name='quantity'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <button type='submit' disabled={disabled}>
          Add to Order
        </button>
      </div>
    </form>
  );
}

{
  /* ~~~Switch Styling~~~
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
} */
}
