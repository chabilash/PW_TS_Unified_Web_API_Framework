

export default class CartInputDao {

    private itemQuantity: string;
    private country: string;
    private state: string;
    private zipPostalCode: string;
    
    constructor(cartDataLayer: CartDataLayer) {
        this.itemQuantity = cartDataLayer.itemQuantity;
        this.country = cartDataLayer.country;
        this.state = cartDataLayer.state;
        this.zipPostalCode = cartDataLayer.zipPostalCode;
    }

    public getItemQuantity() {
        return this.itemQuantity;
    }

    public getCountry() {
        return this.country;
    }

    public getState() {
        return this.state;
    }

    public getZipPostalCode() {
        return this.zipPostalCode;
    }

}