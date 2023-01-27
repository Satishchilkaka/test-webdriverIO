const { retry } = require("rxjs");

class NototificationPage {

    get notificationPopUp() {
        return $('.notification-box-top')
    }

}

module.exports = new NototificationPage()