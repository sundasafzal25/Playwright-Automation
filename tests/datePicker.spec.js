import{test, expect} from '@playwright/test';

test('Handle Date Picker by Navigation & Selection', async({page})=> {
    const targetYear = '2025';
    const targetDate = '30';
    const targetMonth = 'October';
    // ✅ Step 1: Navigate and wait for DOM to load

    const URL = 'https://testautomationpractice.blogspot.com/';
    console.log(`Attempting to select Date: ${targetDate} ${targetMonth} ${targetYear}`);
    await page.goto(URL);
      //wait for the document loaded fully 
    await page.waitForLoadState('domcontentloaded');
    // Step : Scroll to datepicker just to show clear steps in Headed Mode 
    await page.evaluate(() => {
        document.querySelector('#datepicker').scrollIntoView();
    });
    await page.waitForTimeout(2000);
     
    // ✅ Step 2: Wait for date picker input to be visible before clicking
    await page.waitForSelector('#datepicker', { state: 'visible', timeout: 40000 });
    await page.locator('#datepicker').click();
await page.waitForTimeout(2000);
    // ✅ Step 3: Wait for the date picker calendar to appear
    await page.waitForSelector('.ui-datepicker', {timeout: 40000}); 

    //to select some date from previous or next we are writing loop 
      // ✅ Step 4: Navigate to correct month & year
    while(true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        await page.waitForTimeout(2000);

        if (currentMonth=== targetMonth && currentYear===targetYear){
            console.log(`Found the Targeted Date ${currentMonth}/${currentYear}`);
            break;
    
        }
        else {
            await page.locator('a[title="Next"]').click();
            //to click previous button 
            //await page.locator('a[title="prev"]').click(); 
        }}

})

test("Print all dates from current month", async ({ page }) => {
  const URL = "https://testautomationpractice.blogspot.com/";
  await page.goto(URL);
  await page.waitForLoadState("domcontentloaded");


  // Scroll to make date picker visible
  await page.evaluate(() => {
    document.querySelector("#datepicker").scrollIntoView();
  });
  await page.waitForTimeout(1000);

  // Open the date picker
  await page.locator("#datepicker").click();

  // Wait for the calendar to appear
  await page.waitForSelector(".ui-datepicker-calendar");

  // Locate all date elements in the current visible month
  const allDateElements = await page.locator(".ui-datepicker-calendar td a").allInnerTexts();

  // Join them with commas
  const dateList = allDateElements.join(", ");

  // Print to console
  console.log(`📅 Dates in current month: ${dateList}`);

  // Optional: Assertion that the list is not empty
  await expect(allDateElements.length).toBeGreaterThan(0);
});

test.only("Selected Date", async({page})=> {
const targetYear = '2025';
    const targetDate = '30';
    const targetMonth = 'October';
    const URL = 'https://testautomationpractice.blogspot.com/';
    console.log(`Attempting to select Date: ${targetDate} ${targetMonth} ${targetYear}`);
    await page.goto(URL);
      //wait for the document loaded fully 
    await page.waitForLoadState('domcontentloaded');
    // Step : Scroll to datepicker just to show clear steps in Headed Mode 
    await page.evaluate(() => {
        document.querySelector('#datepicker').scrollIntoView();
    });
    await page.waitForTimeout(2000);
    await page.waitForSelector('#datepicker', { state: 'visible', timeout: 40000 });
    await page.locator('#datepicker').click();
    await page.waitForTimeout(2000);

    // ✅ Step 3: Wait for the date picker calendar to appear
    await page.waitForSelector('.ui-datepicker', {timeout: 40000}); 

    let selectedDate = false;
    try {
     await page.locator(`//a[@class="ui-state-default" and text()="${targetDate}"]`).click({timeout: 30000 });
    selectedDate = true;
    console.log(`✅ Date ${targetDate} selected using X path`);
    } 
    catch (error){
        console.log('Xpath Strategy failed.');}

let selectedDate2 = false; 
try{
    await page.locator(`.ui-datepicker-calendar td a:text-is("${targetDate}")`).click({timeout: 30000});
    selectedDate2 = true;
    console.log(`✅ Date ${targetDate} ${targetMonth} ${targetYear} Selected using CSS Selector`);
}
catch(error){
    console.log('Date not selected using CSS Selector');
}

})



