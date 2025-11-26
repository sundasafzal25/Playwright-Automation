import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMsg = page.locator('[data-test="error"]');
    }

    // Actions
    async enterCredentials(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.page.waitForTimeout(1000);
    }

    async clickLogin() {
        await this.loginButton.click();
        await this.page.waitForTimeout(1000);
    }

    // Validations / Assertions 
    async verifyLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory.html/);
    }

    async verifyLoginError() {
        await expect(this.errorMsg).toBeVisible();
    }

    // Combined Action
    async login(username, password) {
        await this.enterCredentials(username, password);
        await this.clickLogin();
        await this.verifyLoginSuccess();
    }
}
