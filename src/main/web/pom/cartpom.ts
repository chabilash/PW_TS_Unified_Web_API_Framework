

import { Page, Locator } from '@playwright/test';
import CartInputDao from '../dao/inputdao/CartInputDao';
import CheckoutPOM from './checkoutpom';

export default class CartPOM {
    private page: Page;
    private itemQuantity: Locator;
    private updateCartButton: Locator;
    private selectCountryDropdown: Locator;
    private selectStateDropdown: Locator;
    private zipPostalCodeInput: Locator;
    private estimateShippingButton: Locator;
    private termsofServiceCheckbox: Locator;
    private checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemQuantity = this.page.locator('[name="itemquantity6315875"]');
        this.updateCartButton = this.page.locator(`//input[@name='updatecart']`);
        this.selectCountryDropdown = this.page.locator('#CountryId');
        this.selectStateDropdown = this.page.locator('#StateProvinceId');
        this.zipPostalCodeInput = this.page.locator('#ZipPostalCode');
        this.estimateShippingButton = this.page.getByRole('button', { name: 'Estimate shipping' });
        this.termsofServiceCheckbox = this.page.locator('#termsofservice');
        this.checkoutButton = this.page.locator('#checkout');
    }

    public async updateItemQuantity(cartInputDao: CartInputDao): Promise<CartPOM> {
        await this.page.waitForLoadState('load');
        // await this.itemQuantity.waitFor({ state: 'visible', timeout: 5000 });
        await this.itemQuantity.clear();
        await this.page.waitForLoadState('load');
        // await this.itemQuantity.waitFor({ state: 'visible', timeout: 5000 });
        await this.itemQuantity.fill(cartInputDao.getItemQuantity());
        await this.updateCartButton.click();
        return this;
    }

    public async selectCountry(cartInputDao: CartInputDao): Promise<CartPOM> {
        await this.selectCountryDropdown.selectOption({ label: cartInputDao.getCountry() });
        return this;
    }

    public async selectState(cartInputDao: CartInputDao): Promise<CartPOM> {
        await this.selectStateDropdown.selectOption({ label: cartInputDao.getState() });
        return this;
    }

    public async enterZipPostalCode(cartInputDao: CartInputDao): Promise<CartPOM> {
        await this.zipPostalCodeInput.fill(cartInputDao.getZipPostalCode());
        return this;
    }

    public async clickEstimateShippingButton(): Promise<CartPOM> {
        await this.estimateShippingButton.click();
        return this;
    }

    public async clickTermsofServiceCheckbox(): Promise<CartPOM> {
        await this.termsofServiceCheckbox.click();
        return this;
    }

    public async clickCheckoutButton(): Promise<CheckoutPOM> {
        await this.checkoutButton.click();
        return new CheckoutPOM(this.page);
    }



}