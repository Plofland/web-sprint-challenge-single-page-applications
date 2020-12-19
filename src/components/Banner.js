import React from "react";
import { Route, Link } from "react-router-dom";
import pizzaImg from "./Assets/Pizza.jpg";
import Form from "./Form";

export default function Banner() {
  return (
    <div>
      <h2>HEADER TEST</h2>
      <img src={pizzaImg} alt="magarita pizza" />
      <Link to="/form">Pizza?</Link>
      {/* <Route>
        <Form />
      </Route> */}
    </div>
  );
}
