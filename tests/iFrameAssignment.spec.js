import{test,expect} from "@playwright/test";

test ("iFrames Assignment", async ({page})=> {
await page.goto("https://ui.vision/demo/webtest/frames/");
console.log('--Accessing Frame 3 using 1st Approach');
const FRAME_URL = 'https://ui.vision/demo/webtest/frames/frame_3.html';
try{
    const frameOne = await page.frame({url:FRAME_URL}); 
    if(frameOne) {
    const inputLocator = 'input[name="mytext3"]';
    const valueToFill = "Hello from approach 1";
    await frameOne.fill(inputLocator,valueToFill);
    console.log(`✅ Frame accessed using url & value entered: ${valueToFill}`);
    }
else {console.log('URL Not Found'); }
}
catch (e){
    console.log("There is an error using Approach 1", e);
}
await page.waitForTimeout(5000);
console.log('--Accessing Frame 3 using 2nd approach');
    const frameSelector = 'frame[src="frame_3.html"]';
    const elementInsideFrameSelector = 'input[name="mytext3"]';
    const valueToFill2 = "Hello from approach 2"; 
    try {
        const inputBoxLocator = page.frameLocator(frameSelector).locator(elementInsideFrameSelector);
        await inputBoxLocator.fill(valueToFill2);
        console.log(`✅ Frame Accessed using approach 2 & Value is: ${valueToFill2}`);
    }
    catch { console.log('There is an Error in approach 2'); }
    await page.waitForTimeout(5000);
})