browser.waitForAngularEnabled(false);
describe('Enter Search Term', function() {
 it('This will insert into the text field in google.com', function() {
 browser.get('www.google.com');
 element(by.xpath('//*[@id="q"]')).sendKeys('What is Protractor?');
  var query = element(by.xpath('//*[@id="q"]'));
expect(query = 'What is Protractor?');
browser.pause();
  });
});
