import { Page, Locator } from '@playwright/test';
import ProductPOM from './productpom';
import HomeInputDao from '../dao/inputdao/HomeInputDao';

export default class HomePOM {
    private page: Page;
    private productLink: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.productLink = this.page.getByRole('link', { name: '14.1-inch Laptop', exact: true });
        
    }

    // public createProductLocator(productName: string){
    //     return this.page.locator(this.productLink.replace('$$$', productName));    
    // }

    public async clickProduct(homeInputDao: HomeInputDao): Promise<ProductPOM> {
        // await this.createProductLocator(homeInputDao.getProductName()).click();
        // const targetElement = this.createProductLocator(homeInputDao.getProductName());
        await this.productLink.scrollIntoViewIfNeeded();
        await this.productLink.click();
        return new ProductPOM(this.page);
    }

}