import { Page, Locator } from '@playwright/test';
import ProductPOM from './productpom';
import HomeInputDao from '../dao/inputdao/HomeInputDao';

export default class HomePOM {
    private page: Page;
    private productLink: string;
    
    constructor(page: Page) {
        this.page = page;
        this.productLink = "//a[normalize-space()='$$$']";
    }

    public createProductLocator(productName: string){
        return this.page.locator(this.productLink.replace('$$$', productName));    
    }

    public async clickProduct(homeInputDao: HomeInputDao): Promise<ProductPOM> {
        await this.createProductLocator(homeInputDao.getProductName()).click();
        return new ProductPOM(this.page);
    }

}