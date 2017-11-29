browser.waitForAngularEnabled(false);
describe('Enter User Credentials', function() {
 it('This will insert a test account that works', function() {
 browser.get('http://drupal-7-56.dd:8083/');

 element(by.xpath('//*[@id="edit-name"]')).sendKeys('testuser');
  var username = element(by.xpath('//*[@id="edit-name"]'));
  browser.sleep(1500);  
 element(by.xpath('//*[@id="edit-pass"]')).sendKeys('testpassword');
     var password = element(by.xpath('//*[@id="edit-pass"]'));

     expect(username = 'testuser');
     expect(password = 'testpassword');
     var login_button = element(by.xpath('//*[@id="edit-submit"]'));     
     browser.sleep(1500);
     login_button.click();
   browser.sleep(1500);
   browser.pause();
     });
});
