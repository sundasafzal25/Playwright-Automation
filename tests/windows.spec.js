import { test, expect , chromium } from '@playwright/test'; 

test('Handle Multiple Pages', async({})=> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    //Create as many pages as you want 
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const allPages = context.pages();
    console.log('No of Pages:', allPages.length);
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');
    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

})
test.only('Book a Free Demo', async({page}) =>{
    test.setTimeout(60000); 
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect(page).toHaveTitle('OrangeHRM');
const newPagePromise = page.context().waitForEvent('page');
const linkLocator = page.locator('//a[normalize-space()="OrangeHRM, Inc"]');
await linkLocator.click();
const newpage = await newPagePromise;
await expect(newpage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');
await newpage.locator('//button[contains(text(),"Book a Free Demo")]').click();
await expect(newpage).toHaveTitle('Book a Free HRMS Demo | HR Software | HRMS | OrangeHRM');
await newpage.getByRole('textbox', { name: 'Full Name' }).click();
  await newpage.getByRole('textbox', { name: 'Full Name' }).fill('sundas a');
  await newpage.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await newpage.getByRole('textbox', { name: 'Email' }).fill('sundas@gmail.com');
  await newpage.getByRole('textbox', { name: 'Email' }).press('Tab');
  await newpage.getByRole('textbox', { name: 'Phone Number' }).fill('03334233456');
  await newpage.getByLabel('Country').selectOption('Pakistan');
  await newpage.getByRole('textbox', { name: 'Company Name' }).click();
  await newpage.getByRole('textbox', { name: 'Company Name' }).fill('test');
  await newpage.getByRole('textbox', { name: 'Job title' }).click();
  await newpage.getByRole('textbox', { name: 'Job title' }).fill('qa engineer');
  await newpage.getByLabel('No Of Employees').selectOption('11 - 50');
  console.log("⚠️ CAPTCHA step bypassed for automation.");
  // await newpage.locator('iframe[name="a-uy517tyox4pk"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await newpage.getByRole('button', { name: 'Get a Free Demo' }).click();

  //await expect(newpage).toHaveTitle('Your Free Demo Is Confirmed! | OrangeHRM'); 

})