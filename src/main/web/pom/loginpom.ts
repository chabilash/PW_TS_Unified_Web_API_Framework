import { Locator, Page } from "@playwright/test";
import AccountPOM from "./accountpom";
import LoginInputDao from "../dao/inputdao/LoginInputDao";
import HomePOM from "./homepom";

export default class LoginPOM {
    private page: Page;
    private usernameTB: Locator;
    private passwordTB: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTB = this.page.locator('#Email');
        this.passwordTB = this.page.locator('#Password');
        this.loginButton = this.page.locator(`input[type="submit"][value="Log in"]`);;
    }

    public async goTo(): Promise<LoginPOM> {
        await this.page.goto('login');
        return this;
    }

    public async fillUsername(username: string): Promise<LoginPOM> {
        await this.usernameTB.fill(username);
        return this;
    }

    public async fillPassword(password: string): Promise<LoginPOM> {
        await this.passwordTB.fill(password);
        return this;
    }

    public async clickLogin() {
        await this.loginButton.click();
        return this;
    }

    public async login(loginInputDao: LoginInputDao): Promise<HomePOM> {
        // await this.usernameTB.fill(username);
        // await this.passwordTB.fill(password);

        await this.fillUsername(loginInputDao.getUsername());
        await this.fillPassword(loginInputDao.getPassword());
        await this.clickLogin();
        return new HomePOM(this.page);
         
    }
}

// export default LoginPOM;