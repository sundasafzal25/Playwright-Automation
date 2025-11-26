import{test,expect} from "@playwright/test";

test ("Upload Multiple Files", async ({page})=> {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    const fileName1 = "Playwright_Installation_Windows.pdf";
    const fileName2 = "Playwright doc file.pdf";

    const filesPath = ["tests/Upload file/Playwright_Installation_Windows.pdf","tests/Upload file/Playwright doc file.pdf"];
    await page.waitForTimeout(3000); 

    await page.locator("#filesToUpload").setInputFiles(filesPath);
    
    //Assertion that file is uploaded 
    await expect(page.locator("#fileList")).toContainText(fileName1);
    await expect(page.locator("#fileList")).toContainText(fileName2);


})

test ("Download File", async ({page})=> { 

   await page.goto("https://the-internet.herokuapp.com/download");

    // Start waiting for download before clicking. Note no await.
const downloadPromise = page.waitForEvent('download');
await page.getByText('some-file.txt').click();
await page.waitForTimeout(3000); 
const download = await downloadPromise;


// Wait for the download process to complete and save the downloaded file somewhere.
await download.saveAs('C:/Users/Sundas Afzal/OneDrive/Desktop/Playwright Automation/testsUpload file' + download.suggestedFilename());
    

})
