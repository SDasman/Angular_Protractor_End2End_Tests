browser.waitForAngularEnabled(false);
describe('Enter User Credentials', function() {
 it('This will insert an userName', function() {
 browser.get('http://google.com');

 element(by.xpath('//*[@id="lst-ib"]')).sendKeys('what is protractor');
  var query = element(by.xpath('//*[@id="lst-ib"]'));
 
     expect(query = 'what is protractor');

  var button = element(by.xpath('//*[@id="tsf"]/div[2]/div[3]/center/input[1]'));
  button.click();
   browser.pause();
     });
});
