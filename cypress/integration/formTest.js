describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/form");
  });
  const sizeInput = () => cy.get('select[name="pizzaSize"]');
  const submitBtn = () => cy.get('button[type="submit"]');
  const sauceChoice = () => cy.get('input[name="sauceChoice"]');
  const sauceChoiceGar = () => cy.get('input[value="garlicSauce"]');
  const tCB = () => cy.get('input[type="checkbox"]');
  const tCBtomatoes = () => cy.get('input[value="dicedTomatoes"]');
  const special = () => cy.get('input[name="specialInstructions"]');
  const quantity = () => cy.get('select[name="quantity"]');
  // it("can select a pizza size", () => {
  //   sizeInput().select("Small");
  //   submitBtn().should("be.disabled"); //fix the button to be disabled
  //   sizeInput().should("have.value", "small");
  // });
  // it("can select a all sauces ", () => {
  //   sauceChoice().click({ multiple: true });
  //   submitBtn().should("be.disabled");
  //   sauceChoice().should("have.value", "redSauce");
  // });
  // it("can select multiple toppings", () => {
  //   tCB().click({ multiple: true });
  //   tCB().click({ multiple: true });
  //   tCBtomatoes().check("dicedTomatoes");
  //   tCBtomatoes().should("have.value", "dicedTomatoes");
  // });
  // it("can type in the special instructions", () => {
  //   special().type("Here are instructions");
  //   special().should("have.value", "Here are instructions");
  // });
  // it("can select a quantity of pizzas", () => {
  //   quantity().select("3");
  //   quantity().should("have.value", "3");
  // });
  it("can submit a completed order", () => {
    sizeInput().select("Large");
    sizeInput().should("have.value", "large");
    sauceChoiceGar().check("garlicSauce");
    sauceChoiceGar().should("have.value", "garlicSauce");
    tCBtomatoes().check("dicedTomatoes");
    tCBtomatoes().should("not.have.value", "sausage");
    special().type("Here are instructions");
    special().should("have.value", "Here are instructions");
    quantity().select("2");
    quantity().should("have.value", "2");
    submitBtn().should("be.not.disabled");
  });
});
