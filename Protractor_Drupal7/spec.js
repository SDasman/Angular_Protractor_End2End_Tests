browser.waitForAngularEnabled(false);
describe('Enter User Credentials', function() {
 it('This will insert an userName', function() {
 browser.get('http://drupal-7-56.dd:8083/');

 element(by.xpath('//*[@id="edit-name"]')).sendKeys('Sdasgupta');
  var username = element(by.xpath('//*[@id="edit-name"]'));
 
 element(by.xpath('//*[@id="edit-pass"]')).sendKeys('chicken');
     var password = element(by.xpath('//*[@id="edit-pass"]'));

     expect(username = 'Sdasgupta');
     expect(password = 'chicken');
     var login_button = element(by.xpath('//*[@id="edit-submit"]'));     
     login_button.click();
   browser.pause();
     });
});
