

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AutocompletePage extends Page {
    /**
     * define selectors using getter methods
     */
    get autoCompleteMenu () {
        return $('.autocomplete');
    }
    get selectProductFromList() {
        return $('.product-thumb');
    }

    async selectProduct() {
      await this.selectProductFromList.click()
    }
  
}

module.exports = new AutocompletePage();
