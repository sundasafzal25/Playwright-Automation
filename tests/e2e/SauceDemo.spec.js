import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/Sauce Demo POM Files/loginPage.js';
import { InventoryPage } from '../../pages/Sauce Demo POM Files/inventoryPage.js';
import { ProductDetailsPage } from '../../pages/Sauce Demo POM Files/productDetailsPage.js';
import { CartPage } from '../../pages/Sauce Demo POM Files/cartPage.js';
import { CheckoutInfoPage } from '../../pages/Sauce Demo POM Files/CheckoutInformationPage.js';
import { CheckoutOverviewPage } from '../../pages/Sauce Demo POM Files/CheckoutOverviewPage.js';
import { CheckoutCompletePage } from '../../pages/Sauce Demo POM Files/CheckoutCompletePage.js';

import {allure} from 'allure-playwright'; 

test.describe('SauceDemo Functional Tests', () => {

    let loginPage, inventoryPage, productPage, cartPage, checkoutInfoPage, checkoutOverviewPage, checkoutCompletePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        productPage = new ProductDetailsPage(page);
        cartPage = new CartPage(page);
        checkoutInfoPage = new CheckoutInfoPage(page);
        checkoutOverviewPage = new CheckoutOverviewPage(page);
        checkoutCompletePage = new CheckoutCompletePage(page);

        await page.goto('https://www.saucedemo.com/');
    });

    // 1️⃣ Login Success
    test('Login Success', async ({page}) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.verifyInventoryPageLoaded();
         // await page.screenshot({ path: "tests/Screenshots/" + Date.now() + '_login_success.png' });
         await allure.attachment(
        'Login Success Screenshot',
        await page.screenshot(),
        'image/png'
    );
    });

    // 2️⃣ Login Failure
    test('Login Failure', async ({page}) => {
        await loginPage.enterCredentials('invalid_user', 'wrong_pass');
        await loginPage.clickLogin();
        await loginPage.verifyLoginError();
        //await page.screenshot({ path: "tests/Screenshots/" + Date.now() + '_login_failure_expected.png' });
        // Allure Screenshot
    await allure.attachment(
        'Login Failure Screenshot',
        await page.screenshot(),
        'image/png'
    );
    });

    // 3️⃣ Add Product to Cart
    test('Add Product to Cart', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.clickItem('Sauce Labs Backpack');
        await productPage.verifyAddToCartButtonVisible();
        await productPage.addToCart();
    });

    // 4️⃣ Remove Product from Cart
    test('Remove Product from Cart', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.clickItem('Sauce Labs Backpack');
        await productPage.addToCart();
        await productPage.goBack();
        await inventoryPage.openCart();
        const removeBtn = inventoryPage.page.locator('button[data-test*="remove-sauce-labs-backpack"]');
        await removeBtn.click();
        await expect(removeBtn).toHaveCount(0);
    });

    // 5️⃣ Verify Cart Count
    test('Verify Cart Count', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.clickItem('Sauce Labs Backpack');
        await productPage.addToCart();
        await productPage.goBack();
        await inventoryPage.clickItem('Sauce Labs Bike Light');
        await productPage.addToCart();
        const cartBadge = inventoryPage.page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('2');
    });

  // 6️⃣ Sort Products
test('Sort Products', async () => {
    // Login
    await loginPage.login('standard_user', 'secret_sauce');
    // Wait for inventory page to load fully
    await inventoryPage.page.waitForSelector('.inventory_list', { timeout: 10000 });
    await inventoryPage.page.waitForLoadState('networkidle');
    // Locate the sort dropdown
    //const sortDropdown = inventoryPage.page.locator('[data-test="product_sort_container"]');
    const sortDropdown = inventoryPage.page.locator("//select[@class='product_sort_container']");
    // Confirm it exists
    await expect(sortDropdown).toBeVisible({ timeout: 5000 });
    // Select "Z to A"
    await sortDropdown.selectOption('za');

    // Verify first product after sort
    const firstProduct = inventoryPage.page.locator('.inventory_item_name').first();
    await expect(firstProduct).toHaveText('Test.allTheThings() T-Shirt (Red)');
});


    // 7️⃣ Validate Product Details
    test('Validate Product Details', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.clickItem('Sauce Labs Backpack');
        const title = productPage.page.locator('.inventory_details_name');
        const desc = productPage.page.locator('.inventory_details_desc');
        await expect(title).toHaveText('Sauce Labs Backpack');
        await expect(desc).toBeVisible();
    });

    // 8️⃣ Checkout with Missing Info
    test('Checkout with Missing Info', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.clickItem('Sauce Labs Backpack');
        await productPage.addToCart();
        await productPage.goBack();
        await inventoryPage.openCart();
        await cartPage.clickCheckout();
        await checkoutInfoPage.fillInformation('', 'Doe', ''); // Missing first name and zip
        await checkoutInfoPage.clickContinue();
        const errorMsg = checkoutInfoPage.page.locator('[data-test="error"]');
        await expect(errorMsg).toBeVisible();
    });

    // 9️⃣ Successful Checkout
    test('Successful Checkout', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.clickItem('Sauce Labs Backpack');
        await productPage.addToCart();
        await productPage.goBack();
        await inventoryPage.openCart();
        await cartPage.clickCheckout();
        await checkoutInfoPage.completeCheckoutInfo('John', 'Doe', '12345');
        await checkoutOverviewPage.verifyOnOverviewPage();
        await checkoutOverviewPage.clickFinish();
        await checkoutCompletePage.verifyOrderSuccess();
    });

    // 🔟 Logout
    test('Logout', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        const menuBtn = inventoryPage.page.locator('#react-burger-menu-btn');
        await menuBtn.click();
        const logoutLink = inventoryPage.page.locator('#logout_sidebar_link');
        await logoutLink.click();
        await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/');
    });

});
