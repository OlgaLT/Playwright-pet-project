import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class InitialPage extends BasePage {

    constructor(page: Page) {
       super(page)
    }

    async clickCreateAccount() {
                    await this.page.getByText('Create account').click();
    }
}
