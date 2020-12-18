import React from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Form from "./components/Form";

const App = () => {
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
