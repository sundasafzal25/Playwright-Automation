import {expect} from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginbutton = page.locator(''); 
        
    }

}