import {test, expect } from '@playwright/test';


test("Drag Col A to B & Verify Them", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    test.setTimeout(60000); 
    const ColA = page.locator("#column-a");
    const ColB = page.locator("#column-b");
    console.log(`Initial State: Column A text was '${await ColA.textContent()}' , Column B text was '${await ColB.textContent()}' `);
    //Drag & Drop 
    await ColA.dragTo(ColB);
    //Assertion to Verify A Dragged to B 
    await expect(ColA).toHaveText("B");
    await expect(ColB).toHaveText("A");

    console.log(`After State: Column A Text is '${await ColA.textContent()}', Column B text is '${await ColB.textContent()}'`);

} )

