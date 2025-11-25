import {test,expect} from '@playwright/test'; 
import {LoginPage} from '../pages/login.js';  
import {LogoutPage} from '../pages/logout.js';
import {ProductPage} from '../pages/product.js';
const TEST_USERNAME = 'sundas1';
const TEST_PASSWORD = 'sundas123';

test.describe('Demoblaze Testing with POM', ()=> {
    test ('Complete Flow: Login -> Add to Cart -> Logout', async({page}) => {
        //navigate to demoblaze 
        await page.goto('https://www.demoblaze.com/');
        await page.waitForLoadState('domcontentloaded');
        //initializing page objects 
        const loginpage = new LoginPage (page);
        const logoutPage = new LogoutPage (page);
        const productPage = new ProductPage (page);
        //Step 1: Login 
        console.log('📝 Step 1: Logging in...');
        await loginpage.login(TEST_USERNAME,TEST_PASSWORD);
        console.log('✅ Login successful');
        //Step 2: Select Laptop category  
        console.log('📝 Step 2: Selecting Laptops category...');
        await productPage.selectLaptopsCategory();
        console.log('✅ Laptops category selected');
        // Step 3: Select a Product (Sony vaio i5)
        const productName = 'Sony vaio i5';
        await productPage.selectProduct(productName);
        console.log(` ✅ Prodcut ${productName} is selected--`);
        //Step 4: Add to cart 
        console.log('📝 Step 4: Add to cart...');
        await productPage.addToCart(); 
        console.log('✅ Product added to cart');
        //Step 5: Go to Cart 
        console.log("📝 Step 5: Verifying product in cart...");
        await productPage.goToCart();
        await productPage.verifyProductInCart(productName);
        console.log('✅ Product verified in cart');
        //Step 6: Logout
        await logoutPage.logout();
        await logoutPage.verifyLogoutSuccess();
        console.log('✅ Logout successful');
        console.log('🎉 Test completed successfully!');


    })
})