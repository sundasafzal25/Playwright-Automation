import { expect } from '@playwright/test';

export class CheckoutCompletePage {

    constructor(page) {
        this.page = page;

        this.successHeader = page.locator('.complete-header');
    }

    // Validations
    async verifyOrderSuccess() {
        await expect(this.successHeader).toHaveText('Thank you for your order!');
    }
}
