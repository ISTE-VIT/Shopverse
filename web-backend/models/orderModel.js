class Order {
    constructor(userId, name, quantity,product, shopId) {
        this.name = name;
        this.userId = userId;
        this.quantity = quantity;
        this.product=product;
        this.shopId = shopId;
    }
}

module.exports = Order