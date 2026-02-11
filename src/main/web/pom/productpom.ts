import { Locator, Page } from '@playwright/test';
import ProductInputDao from '../dao/inputdao/ProductInputDao';
import CartPOM from './cartpom';
import { time } from 'node:console';

export default class ProductPOM {
    private page: Page;
    private quantity: Locator;
    private addToCartButton: Locator;
    private shoppingCart: Locator
    private goToCart: Locator;
    private contentText: Locator;
    
    

    constructor(page: Page) {
        this.page = page;
        this.quantity = this.page.locator('#addtocart_31_EnteredQuantity');
        this.addToCartButton = this.page.locator(`//input[@id='add-to-cart-button-31']`);
        this.shoppingCart = this.page.locator(`//span[text()='Shopping cart']`);
        this.goToCart = this.page.locator(`input[type="button"][value="Go to cart"]`);
        this.contentText = this.page.locator(`//p[contains(normalize-space(), 'The product has been added to ')]`);
        
    }

    public async fillQuantity(productInputDao: ProductInputDao): Promise<ProductPOM> {
        await this.quantity.fill(productInputDao.getQuantity());
        return this;
    }

    public async clickAddToCart(): Promise<ProductPOM> {
        await this.addToCartButton.click();
        return this;
    }

    public async hoverShoppingCart(): Promise<ProductPOM> {
        await this.page.waitForLoadState('load');
        await this.contentText.waitFor({ state: 'visible', timeout: 5000 });
        await this.shoppingCart.hover();
        return this;
    }

    public async clickGoToCart(): Promise<CartPOM> {
        await this.goToCart.click();
        return new CartPOM(this.page);
    }

    // public async clickCheckoutLinkInHeader(): Promise<ProductPOM> {
    //     await this.checkoutLinkInHeader.click();
    //     return this;
    // }

    // public async clickCartTotalButton(): Promise<ProductPOM> {
    //     await this.cartTotalButton.click();
    //     return this;
    // }

    // public async clickViewCart(): Promise<ProductPOM> {
    //     await this.viewCart.click();
    //     return this;
    // }

    // public async clickCheckoutLinkInCartTotal(): Promise<ProductPOM> {
    //     await this.checkoutLinkInCartTotal.click();
    //     return this;
    // }       





}