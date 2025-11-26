import { expect } from '@playwright/test';

export class CartPage {

    constructor(page) {
        this.page = page;

        this.checkoutBtn = page.locator('#checkout');
    }

    // Actions
    async clickCheckout() {
        await this.checkoutBtn.click();
        await this.page.waitForTimeout(500);
    }

    // Validations
    async verifyCartPageLoaded() {
        await expect(this.page).toHaveURL(/cart.html/);
    }
}
