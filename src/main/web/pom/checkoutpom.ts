import { Page, Locator } from '@playwright/test';
import CheckoutInputDao from '../dao/inputdao/CheckoutInputDao';

export default class CheckoutPOM {

    private page: Page;
    private billingaddressidDropdown: Locator;
    private countryDropdown: Locator;
    private stateDropdown: Locator;
    private firstNameTB: Locator;
    private lastNameTB: Locator;
    private emailTB: Locator;
    private zippostalCodeTB: Locator;
    private address1TB: Locator;
    private address2TB: Locator;
    private cityTB: Locator;
    private phoneNumberTB: Locator;
    private billingcontinueButton: Locator;
    private shippingAddresscontinueButton: Locator;
    private shippingMethodcontinueButton: Locator;
    private paymentMethodcontinueButton: Locator;
    private paymentInformationcontinueButton: Locator;
    private confirmOrderButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.billingaddressidDropdown = this.page.locator('#billing-address-select');
        this.countryDropdown = this.page.locator('#BillingNewAddress_CountryId');
        this.stateDropdown = this.page.locator('#BillingNewAddress_StateProvinceId');
        this.firstNameTB = this.page.locator('#BillingNewAddress_FirstName');
        this.lastNameTB = this.page.locator('#BillingNewAddress_LastName');
        this.emailTB = this.page.locator('#BillingNewAddress_Email');
        this.zippostalCodeTB = this.page.locator('#BillingNewAddress_ZipPostalCode');
        this.address1TB = this.page.locator('#BillingNewAddress_Address1');
        this.address2TB = this.page.locator('#BillingNewAddress_Address2');
        this.cityTB = this.page.locator('#BillingNewAddress_City');
        this.phoneNumberTB = this.page.locator('#BillingNewAddress_PhoneNumber');
        this.billingcontinueButton = this.page.locator('#billing-buttons-container').getByRole('button', { name: 'Continue' });
        this.shippingAddresscontinueButton = this.page.locator('#shipping-buttons-container').getByRole('button', { name: 'Continue' });
        this.shippingMethodcontinueButton = this.page.locator('#shipping-method-buttons-container').getByRole('button', { name: 'Continue' });
        this.paymentMethodcontinueButton = this.page.locator('#payment-method-buttons-container').getByRole('button', { name: 'Continue' });
        this.paymentInformationcontinueButton = this.page.locator('#payment-info-buttons-container').getByRole('button', { name: 'Continue' });
        this.confirmOrderButton = this.page.locator('#confirm-order-buttons-container').getByRole('button', { name: 'Confirm' });
        
    }

    public async selectBillingAddress(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
        await this.billingaddressidDropdown.selectOption({ label: checkoutInputDao.getSelectBillingAddress() });
        return this;
    }

    public async selectCountry(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
        await this.countryDropdown.selectOption({ label: checkoutInputDao.getCountry() });
        return this;
    }

    public async selectState(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
        await this.stateDropdown.selectOption({ label: checkoutInputDao.getState() });
        return this;
    }

    // public async fillFirstName(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
    //     await this.firstNameTB.fill(checkoutInputDao.getFirstName());
    //     return this;
    // }

    // public async fillLastName(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
    //     await this.lastNameTB.fill(checkoutInputDao.getLastName());
    //     return this;
    // }

    // public async fillEmail(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
    //     await this.emailTB.fill(checkoutInputDao.getEmail());
    //     return this;
    // }

    public async fillZipPostalCode(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
        await this.zippostalCodeTB.fill(checkoutInputDao.getZipPostalCode());
        return this;
    }

    public async fillAddress1(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
        await this.address1TB.fill(checkoutInputDao.getAddress1());
        return this;
    }

    public async fillAddress2(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
        await this.address2TB.fill(checkoutInputDao.getAddress2());
        return this;
    }

    public async fillCity(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
        await this.cityTB.fill(checkoutInputDao.getCity());
        return this;
    }

    public async fillPhoneNumber(checkoutInputDao: CheckoutInputDao): Promise<CheckoutPOM> {
        await this.phoneNumberTB.fill(checkoutInputDao.getPhoneNumber());
        return this;
    }

    public async clickBillingContinueButton(): Promise<CheckoutPOM> {
        await this.billingcontinueButton.click();
        return this;
    }

    public async clickShippingAddressContinueButton(): Promise<CheckoutPOM> {
        await this.shippingAddresscontinueButton.click();
        return this;
    }

    public async clickShippingMethodContinueButton(): Promise<CheckoutPOM> {
        await this.shippingMethodcontinueButton.click();
        return this;
    }

    public async clickPaymentMethodContinueButton(): Promise<CheckoutPOM> {
        await this.paymentMethodcontinueButton.click();
        return this;
    }

    public async clickPaymentInformationContinueButton(): Promise<CheckoutPOM> {
        await this.paymentInformationcontinueButton.click();
        return this;
    }

    public async clickConfirmOrderButton(): Promise<CheckoutPOM> {
        await this.confirmOrderButton.click();
        return this;
    }

}