import {expect, test} from '@playwright/test';
// import { LoginPOM } from '../../main/web/pom/loginpom';
import LoginPOM from '../../main/web/pom/loginpom';
import AccountPOM from '../../main/web/pom/accountpom';
import HomePOM from '../../main/web/pom/homepom';
import { readJSONDataFromTestCase } from '../../main/web/util/fileUtils';
import LoginInputDao from '../../main/web/dao/inputdao/LoginInputDao';
import ProductPOM from '../../main/web/pom/productpom';
import HomeInputDao from '../../main/web/dao/inputdao/HomeInputDao';
import ProductInputDao from '../../main/web/dao/inputdao/ProductInputDao';

test('e2e work flow', async ({page}) => {

    let loginPOM : LoginPOM = new LoginPOM(page);

    const testData = readJSONDataFromTestCase('src/main/web/testdata/e2e.json', 'TC1');

    const logindata: LoginDataLayer = testData["login"];
    const homeData: HomeDataLayer = testData["home"];
    const productData: ProductDataLayer = testData["product"];
    
    let loginInputDao: LoginInputDao = new LoginInputDao(logindata);
    let homeInputDao: HomeInputDao = new HomeInputDao(homeData);
    let productInputDao: ProductInputDao = new ProductInputDao(productData);

    
    await loginPOM.goTo();  
    let accountPOM: AccountPOM = await loginPOM.login(loginInputDao);
    await accountPOM.verifyAccountPage();
    let homePOM: HomePOM = await accountPOM.clickHomeIcon();
    let productPOM: ProductPOM = await homePOM.clickProduct(homeInputDao); 
    await productPOM.fillQuantity(productInputDao);
    await productPOM.clickAddToCart();
    await productPOM.clickCartTotalButton();
    await productPOM.clickViewCart();
  

})
