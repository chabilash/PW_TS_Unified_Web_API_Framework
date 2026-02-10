import { Locator, Page } from '@playwright/test';
import ProductInputDao from '../dao/inputdao/ProductInputDao';

export default class ProductPOM {
    private page: Page;
    private quantity: Locator;
    private addToCartButton: Locator;
    private checkoutLinkInHeader: Locator;
    private cartTotalButton: Locator;
    private viewCart: Locator;
    private checkoutLinkInCartTotal: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.quantity = this.page.locator('#input-quantity');
        this.addToCartButton = this.page.locator('#button-cart');
        this.checkoutLinkInHeader = page.locator(`//span[normalize-space()='Checkout']`);
        this.cartTotalButton = this.page.locator('#cart-total');
        this.viewCart = this.page.locator(`//strong[normalize-space()='View Cart']`);
        this.checkoutLinkInCartTotal = this.page.locator(`//strong[normalize-space()='Checkout']`);
        
    }

    public async fillQuantity(productInputDao: ProductInputDao): Promise<ProductPOM> {
        await this.quantity.fill(productInputDao.getQuantity());
        return this;
    }

    public async clickAddToCart(): Promise<ProductPOM> {
        await this.addToCartButton.click();
        return this;
    }

    // public async clickCheckoutLinkInHeader(): Promise<ProductPOM> {
    //     await this.checkoutLinkInHeader.click();
    //     return this;
    // }

    public async clickCartTotalButton(): Promise<ProductPOM> {
        await this.cartTotalButton.click();
        return this;
    }

    public async clickViewCart(): Promise<ProductPOM> {
        await this.viewCart.click();
        return this;
    }

    // public async clickCheckoutLinkInCartTotal(): Promise<ProductPOM> {
    //     await this.checkoutLinkInCartTotal.click();
    //     return this;
    // }       





}