import React from "react";

export default function Form() {
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
    </form>
  );
}
