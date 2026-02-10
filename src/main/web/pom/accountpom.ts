import { expect, Locator, Page } from "@playwright/test";
import HomePOM from "./homepom";

export default class AccountPOM {
    private page: Page;
    private myAffiliateAccountText: Locator;
    private myOrdersText: Locator;
    private homeIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAffiliateAccountText = this.page.locator('//*[@id="content"]/h2[3]');
        this.myOrdersText = this.page.locator('//*[@id="content"]/h2[2]');
        this.homeIcon = this.page.locator('.fa.fa-home');
    }

    public async verifyAccountPage(): Promise<AccountPOM> {
        await expect(this.myAffiliateAccountText).toHaveText('My Affiliate Account');
        await expect(this.myOrdersText).toHaveText('My Orders');
        return this;
    }
        
    public async clickHomeIcon(): Promise<HomePOM> {
        await this.homeIcon.click();
        return new HomePOM(this.page);
    }
   
}

// export default AccountPOM;

