import "@4tw/cypress-drag-drop";
const X2JS = require("x2js");
const { defineStep } = require("@badeball/cypress-cucumber-preprocessor");
import { should } from "chai";

/*
COOKIES
*/

defineStep("The cookie {string} exists", (cookieName: string) => {
  cy.getCookie(cookieName).should("exist");
});

defineStep("The cookies exists", () => {
  cy.getCookies().should("exist");
});

defineStep("I clear all cookies", () => {
  cy.clearAllCookies();
});

defineStep("I clear cookie {string}", (cookieName: string) => {
  cy.clearCookie(cookieName);
});

defineStep(
  "I set cookie name {string} and value {string}",
  (cookieName: string, cookieValue: string) => {
    cy.setCookie(cookieName, cookieValue);
  }
);

defineStep(
  "The cookie {string} property value is {string}",
  (cookieName: string, propValue: string) => {
    cy.getCookie(cookieName).should("have.property", "value", propValue);
  }
);

defineStep("There are {int} cookies", (cookiesNum) => {
  cy.getAllCookies().should("have.length", cookiesNum);
});

/*
LOCAL & SESSION STORAGE
*/

defineStep("I want to clear the loal storage", () => {
  cy.clearLocalStorage();
});

defineStep("I want to clear the session storage", () => {
  cy.clearAllSessionStorage();
});

/*
WAITING
*/

defineStep("I wait for {int} ms", (waitTime: number) => {
  cy.wait(waitTime);
});

/*
SITEMAP
*/

defineStep(
  "I verify that all URLs in the sitemap are resolved with HTTP code 200. Sitemap URL: {string}",
  (sitemapURL: string) => {
    cy.request(sitemapURL)
      .its("body")
      .then((body) => {
        const x2js = new X2JS();
        const json = x2js.xml2js(body);
        expect(json.urlset.url).to.be.an("array").and.have.length.gt(0);

        json.urlset.url.forEach((url) => {
          const parsed = new URL(url.loc);
          cy.log(parsed.pathname);
          cy.request("HEAD", url.loc).its("status").should("eq", 200);
        });
      });
  }
);

/*
API TESTING
*/

defineStep(
  "I send request with method {string} to URL: {string}. I expect status to be {int}",
  (requestMethod: string, requestURL: string, statusCode: number) => {
    cy.request({
      method: requestMethod.toUpperCase(),
      url: requestURL,
    }).then((resp) => {
      expect(resp.status).to.eq(statusCode);
    });
  }
);
