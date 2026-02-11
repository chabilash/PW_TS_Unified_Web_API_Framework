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
import CartInputDao from '../../main/web/dao/inputdao/CartInputDao';
import CartPOM from '../../main/web/pom/cartpom';
import CheckoutInputDao from '../../main/web/dao/inputdao/CheckoutInputDao';
import CheckoutPOM from '../../main/web/pom/checkoutpom';

test('e2e work flow', async ({page}) => {

    let loginPOM : LoginPOM = new LoginPOM(page);

    const testData = readJSONDataFromTestCase('src/main/web/testdata/e2e.json', 'TC1');

    const logindata: LoginDataLayer = testData["login"];
    const homeData: HomeDataLayer = testData["home"];
    const productData: ProductDataLayer = testData["product"];
    const cartData: CartDataLayer = testData["shoppingcart"];
    const checkoutData: CheckoutDataLayer = testData["checkout"];
    
    let loginInputDao: LoginInputDao = new LoginInputDao(logindata);
    let homeInputDao: HomeInputDao = new HomeInputDao(homeData);
    let productInputDao: ProductInputDao = new ProductInputDao(productData);
    let cartInputDao: CartInputDao = new CartInputDao(cartData);
    let checkoutInputDao: CheckoutInputDao = new CheckoutInputDao(checkoutData);
    
    await loginPOM.goTo();  
    // let accountPOM: AccountPOM = await loginPOM.login(loginInputDao);
    // await accountPOM.verifyAccountPage();
    let homePOM: HomePOM = await loginPOM.login(loginInputDao);
    let productPOM: ProductPOM = await homePOM.clickProduct(homeInputDao); 
    await productPOM.fillQuantity(productInputDao);
    await productPOM.clickAddToCart();
    await productPOM.hoverShoppingCart();
    let cartPOM: CartPOM = await productPOM.clickGoToCart();

    // await cartPOM.updateItemQuantity(cartInputDao);
    await cartPOM.selectCountry(cartInputDao);
    await cartPOM.selectState(cartInputDao);
    await cartPOM.clickEstimateShippingButton();
    await cartPOM.clickTermsofServiceCheckbox();
    let checkoutPOM: CheckoutPOM = await cartPOM.clickCheckoutButton();
    await checkoutPOM.selectBillingAddress(checkoutInputDao);
    await checkoutPOM.selectCountry(checkoutInputDao);
    await checkoutPOM.selectState(checkoutInputDao);
    await checkoutPOM.fillCity(checkoutInputDao);
    await checkoutPOM.fillAddress1(checkoutInputDao);
    await checkoutPOM.fillAddress2(checkoutInputDao);
    await checkoutPOM.fillZipPostalCode(checkoutInputDao);
    await checkoutPOM.fillPhoneNumber(checkoutInputDao);
    await checkoutPOM.clickBillingContinueButton();
    await checkoutPOM.clickShippingAddressContinueButton();
    await checkoutPOM.clickShippingMethodContinueButton();
    await checkoutPOM.clickPaymentMethodContinueButton();
    await checkoutPOM.clickPaymentInformationContinueButton();
    await checkoutPOM.clickConfirmOrderButton();
  

})
