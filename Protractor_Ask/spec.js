const timeout = require("../timeout");

browser.waitForAngularEnabled(false);
describe("Enter Search Query", function() {
  it("This will insert a query", async function() {
    await browser.get(browser.baseUrl);
    const searchBox = await element(by.xpath('//*[@id="search-box"]'));

    await searchBox.sendKeys("What is protractor");

    expect(await searchBox.getAttribute("value")).toEqual("What is protractor");

    const button = await element(by.xpath('//*[@id="sbut"]'));
    button.click();
    await timeout(2000);
  });
});
