{
  /* <reference types="cypress" />; */
}

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it(".type() - type into a DOM element", () => {
    cy.get("#input-character-flat-atk").type("50");
    cy.get("#input-character-passive-atk").type("50");
    cy.get("#input-weapon-flat-atk").type("50");
    cy.get("#input-weapon-percentage-atk").type("50");
    cy.get("#input-artifact-flat-atk").type("50");
    cy.get("#input-artifact-percentage-atk").type("50");
    cy.get("#input-character-flat-dmg").type("50");
    cy.get("#input-critical-percentage-dmg").type("50");
    cy.get("#input-skill-percentage-dmg").type("50");
    cy.get("#input-character-level").type("50");
    cy.get("#input-enemy-level").type("50");
    cy.get("#input-enemy-resistance").type("50");
    cy.get("#input-enemy-resistance").type("50");
    cy.get("form").submit();
  });
});
