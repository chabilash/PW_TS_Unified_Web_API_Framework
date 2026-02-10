

export default class ProductInputDao {
    private quantity: string;
    

    constructor(productDataLayer: ProductDataLayer) {
        this.quantity = productDataLayer.quantity;
        
    }

    public getQuantity() {
        return this.quantity;
    }

}