import { test, expect } from '@playwright/test';
import { log } from 'console';

test('Screenshot', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil: "domcontentloaded"});
  await page.screenshot({path:"tests/Screenshots/" + Date.now() + 'screenshot.png'});
    console.log('✅ screenshot is taken & Saved Successfully');

})
test ('Full Screenshot', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil: "domcontentloaded"});
  await page.waitForTimeout(3000);
  await page.screenshot({path:"tests/Screenshots/" + Date.now() + 'fullscreenshot.png', fullPage: true});
console.log('✅ Full Screenshot is taken & Saved Successfully'); 
})
test('Specific Logo Screenshot', async ({ page }) => {

  await page.goto('https://playwright.dev/', {waitUntil: "domcontentloaded"});
  await page.waitForTimeout(3000);
  const logo = page.locator('.navbar__logo').first();
  await logo.waitFor({state: 'visible', timeout: 5000});
  await logo.screenshot({path:"tests/Screenshots/" + 'logo.png'});
    console.log('✅ Specific Logo screenshot is taken & Saved Successfully');
})