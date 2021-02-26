import React from "react";
import pizzaRat from "./Assets/pizzaRat.gif";

export default function Congrats() {
  return (
    <div>
      <div className="congrats">
        Congrats! Your pizza is on its way!
        <img src={pizzaRat} alt="pizza rat" />
      </div>
    </div>
  );
}
