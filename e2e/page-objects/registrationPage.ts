import { Page } from '@playwright/test';

export class RegistrationPage {
    urlPath = '/register#';

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private async setEmail(email: string) {
        await this.page.getByLabel('Your email').fill(email);
    }
    private async setPassword(password: string) {
        await this.page.getByLabel('Password', { exact: true }).fill(password);
    }
    private async setPasswordConfirm(password: string) {
        await this.page.getByLabel('Confirm password').fill(password);
    }
    private async setName(name: string) {
        await this.page.getByPlaceholder('Your Name').fill(name);
    }
    private async setPhone(phone: string) {
        await this.page.getByLabel('Phone Number').fill(phone);
    }
    private async setPin(pin: string) {
        await this.page.getByLabel('Create Wallet pin').fill(pin);
    }

    /**
     * Fill in registration form with passed data and click Create account button. All parameres are optional
     * @param email
     * @param password - valid value is min 6 characters
     * @param name
     * @param phone - valid value is string of 10 digits
     * @param pin - valid valuue is string of 6 digits
     */
    async fillInRegistrationFormAndClickCreateButton(email?: string, password?: string, name?: string, phone?: string, pin?: string) {
        if (email) await this.setEmail(email);
        if (password) {
            await this.setPassword(password);
            await this.setPasswordConfirm(password);
        }
        if (name) await this.setName(name);
        if (phone) await this.setPhone(phone);
        if (pin) await this.setPin(pin);
        await this.page.getByLabel('I accept theTerms and').check();
        await this.page.getByRole('button', { name: 'Create an account' }).click();
    }
}
