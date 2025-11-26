import { expect } from '@playwright/test';

export class CheckoutInfoPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zip = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
    }

    // Actions
    async fillInformation(first, last, postal) {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.zip.fill(postal);
        await this.page.waitForTimeout(500);
    }

    async clickContinue() {
        await this.continueBtn.click();
        await this.page.waitForTimeout(500);
    }

    // Combined Action
    async completeCheckoutInfo(first, last, postal) {
        await this.fillInformation(first, last, postal);
        await this.clickContinue();
    }
}
