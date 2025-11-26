import{test, expect} from '@playwright/test';
import { timeStamp } from 'console';

const BASE_URL = 'https://www.demoblaze.com/';

test.describe('Testcase Grouping by Hooks', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(BASE_URL);
        await page.waitForLoadState('domcontentloaded');
        await page.locator('#login2').click();
        await page.locator('#loginusername').fill('sundas');
        await page.locator('#loginpassword').fill('1234567');
        await page.locator('//button[normalize-space()="Log in"]').click();
        console.log("Before Each Hook Executed: Login")

    })
    test.afterEach(async ({page}) => {
        await page.locator('#logout2').click();
        console.log('After Each Hook Executed: Logout'); 
    })
    test('Testcase 1', async({page}) => {
        console.log('TestCase 1 is Executing : Select phones');
        await page.locator('//div[@id="contcont"]//a[2]').click();

    })
    test ('Testcase 2', async ({page}) => {
        console.log('TestCase 2 is Executing : Select Laptops');
        await page.locator('(//a[normalize-space()="Laptops"])[1]').click();

    })
})