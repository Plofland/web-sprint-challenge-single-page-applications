describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/form");
  });
  const sizeInput = () => cy.get('select[name="pizzaSize"]');
  const submitBtn = () => cy.get('button[type="submit"]');
  const sauceChoice = () => cy.get('input[name="sauceChoice"]');
  it("can select a pizza size", () => {
    sizeInput().select("Small");
    submitBtn().should("not.be.disabled"); //fix the button to be disabled
    sauceChoice().click("Red Sauce");
    sauceChoice().should("have.value", "redSauce");
  });
});
