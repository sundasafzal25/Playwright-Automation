import { expect } from '@playwright/test';

export class CheckoutOverviewPage {

    constructor(page) {
        this.page = page;

        this.finishBtn = page.locator('#finish');
    }

    // Actions
    async clickFinish() {
        await this.finishBtn.click();
        await this.page.waitForTimeout(500);
    }

    // Validations
    async verifyOnOverviewPage() {
        await expect(this.page).toHaveURL(/checkout-step-two.html/);
    }
}
