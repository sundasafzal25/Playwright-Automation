
import { test, expect } from '@playwright/test';

test('Update My Info in OrangeHRM', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 2: Login with valid credentials
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin'); // Enter username
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123'); // Enter password
  await page.getByRole('button', { name: 'Login' }).click(); // Click login button

  // Step 3: Navigate to "My Info" section
  await page.getByRole('link', { name: 'My Info' }).click();

  // Step 4: Fill employee details
  await page.getByRole('textbox', { name: 'First Name' }).fill('sundas'); // First Name
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('A');    // Middle Name
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Admin');  // Last Name

  // Step 5: Fill Employee ID
  // Instead of using complex locators, we directly target by role/name if possible.
  await page.getByRole('textbox', { name: 'Employee Id' }).fill('emp12');

  // Step 6: Fill Driver’s License
  await page.getByRole('textbox', { name: "Driver's License Number" }).fill('56788yu');

  // Step 7: Pick License Expiry Date (Example: 31st of current month)
  await page.getByRole('textbox', { name: 'License Expiry Date' }).click();
  await page.getByRole('option', { name: '31' }).click();

  // Step 8: Select Nationality (Dropdown → Pakistani)
  await page.getByRole('combobox', { name: 'Nationality' }).click();
  await page.getByText('Pakistani').click();

  // Step 9: Select Gender (Radio button → Female)
  await page.getByLabel('Female').check();

  // Step 10: Save the form
  await page.getByRole('button', { name: 'Save' }).click();

  // Step 11: Assert that changes were saved (basic check)
  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue('sundas');
});


/* import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).dblclick();
  await page.getByRole('textbox', { name: 'First Name' }).fill('sundas');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('A');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Admin');
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first().click();
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first().fill('emp12');
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByRole('textbox').first().click();
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByRole('textbox').first().fill('56788yu');
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).locator('i').click();
  await page.getByText('31').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(1).click();
  await page.getByText('Pakistani').first().click();
  
  await page.locator('label').filter({ hasText: 'Female' }).locator('span').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
});*/ 
