import{test, expect} from '@playwright/test';
import { text } from 'stream/consumers';

test('Keyboard Actions', async({page})=> {
    await page.goto('https://gotranscript.com/text-compare');
    const textToCopy = 'This is testing Text by Sundas';
    const InputTextArea = page.locator('[name="text1"]');
    const OutputTexArea = page.locator('[name="text2"]'); 
    await InputTextArea.fill(textToCopy);
    console.log(`Text Entered Successfully -> ${textToCopy}`);
    //Ctrl + A 
    await page.keyboard.press('Control+A'); 
    console.log('Text Selected');
    //Ctrl + C
    await page.keyboard.press('Control+C');
    console.log('Text Coppied Successfully');
    // tab 
    await page.keyboard.press('Tab');
    console.log('Tab Pressed'); 
    //Ctrl + V 
    await page.keyboard.press('Control+V');
    console.log(`Text pasted Successfully ${textToCopy}`); 
    await page.waitForTimeout(5000);
})

test.only('Mouse Double Click', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //wait for the document loaded fully 
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    const copybutton = await page.locator('//button[normalize-space()="Copy Text"]'); 
    await copybutton.dblclick();
    const copyField = await page.locator('#field2'); 
    await expect(copyField).toHaveText('Hello World!'); 
    console.log('Text Copied by Double Click'); 


})