browser.waitForAngularEnabled(false);
describe('Enter Search Query', function() {
 it('This will insert a query', function() {
     browser.get(browser.baseUrl);

     element(by.xpath('//*[@id="search-box"]')).sendKeys('What is protractor');
     var query = element(by.xpath('//*[@id="search-box"]'));
     browser.pause(1500);

     expect(query = 'What is protractor');

     var button = element(by.xpath('//*[@id="sbut"]'));
     button.click();
     browser.pause(1500);
     });
});