import{ test, expect } from '@playwright/test';


test("Login Test Demoblaze Website", async ({page}) => {
await page.goto("https://demoblaze.com/");
await expect(page.locator("#login2")).toBeVisible();
await page.click("#login2");

const loginModal = page.locator("#logInModal"); 
await expect(loginModal).toBeVisible();
await loginModal.locator("#loginusername").fill("sundasadmin1");
await loginModal.locator("#loginpassword").fill("1234567a");
await loginModal.getByRole("Button", {name: "Log in"}).click();
await page.waitForTimeout(5000);
await expect(page.locator("#nameofuser")).toHaveText("Welcome sundasadmin1");
//Assignment #2: To add 1 item in the cart 
await page.getByRole("link", {name: "Samsung galaxy s6"}).click();
// Wait until product page loads
await expect(page.getByRole("heading", {name: "Samsung galaxy s6"})).toBeVisible();
// Step 4: Click "Add to cart"
  await page.getByRole("link", { name: "Add to cart" }).click();
  // Handle alert popup that confirms item added
  
  
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  });
  
  //to check item is added to cart 
  
  await page.locator("#cartur").click();

  await expect(page.locator("table tbody")).toContainText("Samsung galaxy s6");





});
