import {test,expect} from '@playwright/test';
import { Console } from 'console';

const Test_URL = "https://ui.vision/demo/webtest/frames/";

test ("Handle Frames/iFrames in Playwright", async ({page}) => {

    await page.goto(Test_URL);
    // Finding Total Number of Frames 
    console.log("--Checking Frames Count---");
    const allFrames = await page.frames();
    const numberOfFrames = allFrames.length;
    //Print Total Count of Frames 
    console.log(`--Total Frames Are: ${numberOfFrames}`);
    //Assertion 
    await expect(numberOfFrames).toBe(7);
    //Part 2: We will use Approach 1 Using Frame with URL or Name 
    console.log("--Accessing Frame Using Approach 1 with URL");
    const FRAME_URL = "https://ui.vision/demo/webtest/frames/frame_1.html";
    try{
        const frameOne = await page.frame({url:FRAME_URL});
        if(frameOne){
            const inputLocator = "input[name='mytext1']"; 
            const valueToFill = "Hey From Approach 1";
            await frameOne.fill(inputLocator,valueToFill);
            console.log(`Successfully Value filled in Text Field: ${valueToFill}`);
        }
        else {
            console.log(`Frame url not found: ${FRAME_URL}`);
        }
    }
    catch (e){
        console.log("Error during approach 1", e);
    }
     await page.waitForTimeout(5000);

console.log("--Accessing Frames using Approach 2: page.frameLocator() with Selector--")
const frameSelector = 'frame[src="frame_1.html"]';
const elementInsideFrameSelector = 'input[name="mytext1"]'; 
const valueToFill2 = 'Hello from approach 2';

try {
        const inputBoxLocator = page.frameLocator(frameSelector).locator(elementInsideFrameSelector);
        await inputBoxLocator.fill(valueToFill2);
        console.log(`Successfully filled input box in frame via frameLocator: ${valueToFill2}`);
    } catch (e) {
        console.error('Error during Approach 2 (frameLocator):', e.message);
    }

 await page.waitForTimeout(5000);    

})