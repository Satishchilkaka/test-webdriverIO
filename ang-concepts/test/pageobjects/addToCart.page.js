class ProductAddToCart {
    get addToCart() {
        return $('.button-cart')
    }

   async clickAddToCart() {

    await this.addToCart.click()

   }
}

module.exports = new ProductAddToCart();