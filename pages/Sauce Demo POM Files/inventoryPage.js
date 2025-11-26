import { expect } from '@playwright/test';

export class InventoryPage {

    constructor(page) {
        this.page = page;

        this.cartIcon = page.locator('.shopping_cart_link');
        this.itemTitle = (name) => page.locator(`.inventory_item_name:text("${name}")`);
    }

    // Actions
    async clickItem(name) {
        await this.itemTitle(name).click();
        await this.page.waitForTimeout(500);
    }

    async openCart() {
        await this.cartIcon.click();
        await this.page.waitForTimeout(500);
    }

    // Validations
    async verifyInventoryPageLoaded() {
        await expect(this.page).toHaveURL(/inventory.html/);
    }
}
