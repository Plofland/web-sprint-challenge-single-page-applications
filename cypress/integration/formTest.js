describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/form");
  });
  const sizeInput = () => cy.get('select[name="pizzaSize"]');
  const submitBtn = () => cy.get('button[type="submit"]');
  const sauceChoice = () => cy.get('input[name="sauceChoice"]');
  const tCB = () => cy.get('input[type="checkbox"]');
  const special = () => cy.get('input[name="specialInstructions"]');
  const quantity = () => cy.get('select[name="specialInstructions"]');
  it("can select a pizza size", () => {
    sizeInput().select("Small");
    submitBtn().should("not.be.disabled"); //fix the button to be disabled
    sizeInput().should("have.value", "Small");
  });
  it("can select a sauce", () => {
    sauceChoice().click("Red Sauce");
    submitBtn().should("not.be.disabled");
    sauceChoice().should("have.value", "redSauce");
  });
  it("can select multiple toppings", () => {
    tCB().check("Pepperoni");
    tCB().should("have.value", "pepperoni");
    tCB().check("dicedTomatoes");
    tCB().should("have.value", "dicedTomatoes");
  });
  it("can type in the special instructions", () => {
    special().type("Here are instructions");
    special().should("have.value", "Here are instructions");
  });
  it("can select a quantity of pizzas", () => {
    quantity().select("3");
    quantity().should("have.value", "3");
  });
  it("can submit a completed order", () => {
    sizeInput().select("Large");
    sizeInput().should("have.value", "Large");
    sauceChoice().click("Garlic Ranch");
    sauceChoice().should("have.value", "garlicSauce");
    tCB().check("Sausage");
    tCB().should("have.value", "sausage");
    special().type("Here are instructions");
    special().should("have.value", "Here are instructions");
  });
});
