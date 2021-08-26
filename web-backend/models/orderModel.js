class Order {
    constructor(userId, name, quantity, shopId) {
        this.userId = userId;
        this.name = name;
        this.quantity = quantity;
        this.shopId = shopId;
    }
}

module.exports = Order