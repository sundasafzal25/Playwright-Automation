import { test, expect } from '@playwright/test';

test('Hard Assertions', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  // HARD ASSERTION: Verify we are on the correct URL for registration
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  // HARD ASSERTION: Check the page title for "Register"
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  //Check logo 

  const logo = page.locator('.header-logo img');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('alt', 'nopCommerce demo store');


  // radio buttions checked and unchecked

  const maleRadioButton = page.locator('#gender-male');
  const femaleRadioButton = page.locator('#gender-female');


  await expect(maleRadioButton).toBeVisible();
  await expect(femaleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();

    await maleRadioButton.click();

    //It is just verifying that either radio button is checked or not
    await expect(maleRadioButton).toBeChecked();

    // negative scenario
    await expect(femaleRadioButton).not.toBeChecked();
});

test ('Soft assertions', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');
    //SoftAssertions
    // 1. Verify the URL (soft assertion)
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');
    // 2. Verify the page title (soft assertion)
    await expect.soft(page).toHaveTitle('nopCommerce demo store.');
    // 3. Verify the logo is visible (soft assertion)
    const logo = page.locator('.header-logo img');
    await expect.soft(logo).toBeVisible();
    await expect.soft(logo).toHaveAttribute('alt', 'nopCommerce demo store');
    

});