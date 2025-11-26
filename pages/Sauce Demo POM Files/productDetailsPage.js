import { expect } from '@playwright/test';

export class ProductDetailsPage {

    constructor(page) {
        this.page = page;
        this.addToCartBtn = page.locator('button[data-test*="add-to-cart"]');
        this.backBtn = page.locator('#back-to-products');
    }

    // Actions
    async addToCart() {
        await this.addToCartBtn.click();
        await this.page.waitForTimeout(500);
    }

    async goBack() {
        await this.backBtn.click();
        await this.page.waitForTimeout(500);
    }

    // Validations
    async verifyAddToCartButtonVisible() {
        await expect(this.addToCartBtn).toBeVisible();
    }
}
