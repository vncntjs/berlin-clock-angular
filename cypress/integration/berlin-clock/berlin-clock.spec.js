/// <reference types="cypress" />

describe("berlin clock", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });

  describe("seconds circle", () => {
    it("should ink circle orange on odd seconds", () => {
      cy.clock(new Date().setSeconds(1));

      cy.get(".second").should(
        "have.css",
        "background-color",
        "rgb(255, 165, 0)"
      );
    });

    it("should not ink circle on even seconds", () => {
      cy.clock(new Date().setSeconds(2));

      cy.get(".second").should(
        "have.css",
        "background-color",
        "rgba(0, 0, 0, 0)"
      );
    });
  });

  describe("five hour row", () => {
    it("should ink 1 element red", () => {
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

    it("should not ink any element", () => {
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
    it("should ink 1 element red", () => {
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

    it("should not ink any element", () => {
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
    it("should ink 2 elements orange", () => {
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

    it("should ink third element red", () => {
      cy.clock(new Date().setMinutes(15));

      cy.get("#five-minute-row > :nth-child(3)").should(
        "have.css",
        "background-color",
        "rgb(255, 0, 0)"
      );
    });

    it("should not ink any element", () => {
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
    it("should ink 1 element orange", () => {
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

    it("should not ink any element", () => {
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
