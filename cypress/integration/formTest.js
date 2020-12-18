describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/form");
  });
  const sauceInput = () => cy.get('select[name="pizzaSize"]');
  const submitBtn = () => cy.get('button[type="submit"]');
  it("can select a pizza size", () => {
    sauceInput().select("Small");
    submitBtn().should("be.disabled");
  });
});
