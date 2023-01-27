
const homePage = require('../pageobjects/home.page')
const AutocompletePage = require('../pageobjects/dropdown.page')
const addToCartPage = require('../pageobjects/addToCart.page')
const { async } = require('rxjs')
const notificationPage = require('../pageobjects/notification.page')

describe('Search Iphone', () => {
    beforeEach(async function () {
        await homePage.open()
    })
    it('should iphone in search bar', async () => {
        await homePage.search('iphone')
        await expect(AutocompletePage.autoCompleteMenu).toBeExisting()
        await expect(AutocompletePage.autoCompleteMenu).toHaveTextContaining(
            'iPhone')
    })

    it('Select iphone from drop down', async () => {
        await homePage.search('iphone')
        const listLength = await AutocompletePage.autoCompleteMenu.getSize();
        console.log('length is', listLength)
        await AutocompletePage.selectProduct()
        await expect(addToCartPage.addToCart).toBeExisting()
    })

    it('Add to cart', async () => {
        await homePage.search('apple')
        await expect(AutocompletePage.autoCompleteMenu).toBeExisting()
        await expect(AutocompletePage.autoCompleteMenu).toHaveTextContaining(
            'Apple Cinema 30')
        // await AutocompletePage.selectProduct()
        // await addToCartPage.clickAddToCart()
       // await expect(notificationPage.notificationPopUp).isDisplayed()


    } )
    it('Add to cart', async () => {
        await homePage.search('apple')
    
         await AutocompletePage.selectProduct()
         await expect(addToCartPage.addToCart).toBeExisting()
       //  await addToCartPage.clickAddToCart()
       // await expect(notificationPage.notificationPopUp).isDisplayed()


    } )
    it.skip('Add to cart', async () => {
        await homePage.search('apple')
    
         await AutocompletePage.selectProduct()
         await addToCartPage.clickAddToCart()
       // await expect(notificationPage.notificationPopUp).isDisplayed()


    } )
    it('should fetch the project title', async () => {
        await browser.url('https://webdriver.io')
        await browser.addLocatorStrategy('myStrat', (selector) => {
            return document.querySelectorAll(selector)
        })
    
        const header = await browser.custom$('myStrat', 'header')
        const projectTitle = await header.custom$('myStrat', '.projectTitle')
    
        console.log(projectTitle.getText()) // WEBDRIVER I/O
    })
})



   