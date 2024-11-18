import { Page } from "@playwright/test";

 export class BasePage {
    protected page: Page;

    constructor(page) {
        this.page = page;
    }

    // TODO: Сюда вынести метод открытия страницы

     public getById =(element: string) => {
        return this.page.locator(`[test-id]=${element}`)

    }
}


