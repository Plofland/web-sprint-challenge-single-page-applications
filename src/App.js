import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

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
