import{test,expect} from "@playwright/test";

test('Nested iFrames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    // Step 1️⃣: Access Frame 3
    const frame3 = await page.locator({name:"name3"});
    console.log('Successfully located Frame 3.');
    // Step 2️⃣: Inside Frame 3, access the inner iframe
    const innerFrame = await frame3.frameLocator()
    // Step 3️⃣: Click the "I am a human" radio button inside the inner frame

    // Step 4️⃣: Assert that it is selected




})