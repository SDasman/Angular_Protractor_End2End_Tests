const httpGet = require("./httpGet");

const TEST_URL = "https://www.ask.com/";

browser.waitForAngularEnabled(false);
describe("Clicks on the correct Drupal hyperlink", () => {
  beforeAll(() => browser.get(TEST_URL));

  it("should find all links", () => {
    const allLinks = element.all(by.tagName("a"));
    allLinks.count().then(link_tally => {
      console.log(`This page contains ${link_tally} links with proper tags.`);
    });

    allLinks.each(link => {
      link
        .getAttribute("href")
        .then(url => {
          console.log(`Checking: ${url}`);
          return httpGet(url);
        })
        .then(({ status, body }) => {
          expect(status).toBeGreaterThanOrEqual(200);
          expect(status).toBeLessThan(400);
          // expect(body.length).toBeGreaterThan(0);
        })
        .catch(error => fail(error.stack));
    });
  });
});
