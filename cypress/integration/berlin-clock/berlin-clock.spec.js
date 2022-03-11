/// <reference types="cypress" />

describe("berlin clock", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });

  describe("seconds circle", () => {
    it("should fill circle orange on odd seconds", () => {
      cy.clock(new Date().setSeconds(1));

      cy.get(".second").should(
        "have.css",
        "background-color",
        "rgb(255, 165, 0)"
      );
    });

    it("should not fill circle on even seconds", () => {
      cy.clock(new Date().setSeconds(2));

      cy.get(".second").should(
        "have.css",
        "background-color",
        "rgba(0, 0, 0, 0)"
      );
    });
  });

  describe("five hour row", () => {
    it("should fill 1 element red on 5 hours", () => {
      cy.clock(new Date().setHours(5));

      cy.get("#five-hour-row > :nth-child(1)").should(
        "have.css",
        "background-color",
        "rgb(255, 0, 0)"
      );
      cy.get("#five-hour-row > :nth-child(2)").should(
        "have.css",
        "background-color",
        "rgba(0, 0, 0, 0)"
      );
    });

    it("should not fill any element on 4 hours", () => {
      cy.clock(new Date().setHours(4));

      cy.get("#five-hour-row").each((element) => {
        cy.get(element).should(
          "have.css",
          "background-color",
          "rgba(0, 0, 0, 0)"
        );
      });
    });
  });

  describe("single hour row", () => {
    it("should fill 1 element red on 1 hour", () => {
      cy.clock(new Date().setHours(1));

      cy.get("#single-hour-row > :nth-child(1)").should(
        "have.css",
        "background-color",
        "rgb(255, 0, 0)"
      );
      cy.get("#single-hour-row > :nth-child(2)").should(
        "have.css",
        "background-color",
        "rgba(0, 0, 0, 0)"
      );
    });

    it("should not fill any element on 5 hours", () => {
      cy.clock(new Date().setHours(5));

      cy.get("#single-hour-row").each((element) => {
        cy.get(element).should(
          "have.css",
          "background-color",
          "rgba(0, 0, 0, 0)"
        );
      });
    });
  });

  describe("five minute row", () => {
    it("should fill 2 elements orange on 14 minutes", () => {
      cy.clock(new Date().setMinutes(14));

      cy.get("#five-minute-row > :nth-child(1)").should(
        "have.css",
        "background-color",
        "rgb(255, 165, 0)"
      );
      cy.get("#five-minute-row > :nth-child(2)").should(
        "have.css",
        "background-color",
        "rgb(255, 165, 0)"
      );

      cy.get("#five-minute-row > :nth-child(3)").should(
        "have.css",
        "background-color",
        "rgba(0, 0, 0, 0)"
      );
    });

    it("should fill third element red on 15 minutes", () => {
      cy.clock(new Date().setMinutes(15));

      cy.get("#five-minute-row > :nth-child(3)").should(
        "have.css",
        "background-color",
        "rgb(255, 0, 0)"
      );
    });

    it("should not fill any element on 0 minutes", () => {
      cy.clock(new Date().setMinutes(0));

      cy.get("#five-minute-row").each((element) => {
        cy.get(element).should(
          "have.css",
          "background-color",
          "rgba(0, 0, 0, 0)"
        );
      });
    });
  });

  describe("single minute row", () => {
    it("should fill 1 element orange on 1 minute", () => {
      cy.clock(new Date().setMinutes(1));

      cy.get("#single-minute-row > :nth-child(1)").should(
        "have.css",
        "background-color",
        "rgb(255, 165, 0)"
      );
      cy.get("#single-minute-row > :nth-child(2)").should(
        "have.css",
        "background-color",
        "rgba(0, 0, 0, 0)"
      );
    });

    it("should not fill any element on 0 minutes", () => {
      cy.clock(new Date().setMinutes(0));

      cy.get("#single-minute-row").each((element) => {
        cy.get(element).should(
          "have.css",
          "background-color",
          "rgba(0, 0, 0, 0)"
        );
      });
    });
  });
});
