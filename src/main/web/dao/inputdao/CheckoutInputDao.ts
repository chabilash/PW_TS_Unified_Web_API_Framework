

export default class CheckoutInputDao {
    private selectbillingaddress: string;
    private country: string;
    private state: string;
    private firstName: string;
    private lastName: string;
    private zipPostalCode: string;
    private address1: string;
    private address2: string;
    private city: string;
    private phoneNumber: string;
    private email: string;

    

    constructor(checkoutDataLayer: CheckoutDataLayer) {
        this.selectbillingaddress = checkoutDataLayer.selectbillingaddress;
        this.country = checkoutDataLayer.country;
        this.state = checkoutDataLayer.state;
        this.firstName = checkoutDataLayer.firstName;
        this.lastName = checkoutDataLayer.lastName;
        this.zipPostalCode = checkoutDataLayer.zipPostalCode;
        this.address1 = checkoutDataLayer.address1;
        this.address2 = checkoutDataLayer.address2;
        this.city = checkoutDataLayer.city;
        this.phoneNumber = checkoutDataLayer.phoneNumber;
        this.email = checkoutDataLayer.email;
    }

    public getSelectBillingAddress() {
        return this.selectbillingaddress;
    }

    public getCountry() {
        return this.country;
    }

    public getState() {
        return this.state;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }

    public getEmail() {
        return this.email;
    }

    public getZipPostalCode() {
        return this.zipPostalCode;
    }

    public getAddress1() {
        return this.address1;
    }

    public getAddress2() {
        return this.address2;
    }

    public getCity() {
        return this.city;
    }

    public getPhoneNumber() {
        return this.phoneNumber;
    }
}