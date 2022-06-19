import {WebDriver, Locator, By, until, WebElement} from 'selenium-webdriver';
import IPage from './IPage';

class CardPage extends IPage{

    private addToCardButton : Locator = By.xpath('//*[@class="btn btn-success btn-lg"]');
    private cardButton : Locator = By.xpath('//*[@class="container"]/div/ul/li[4]/a');

    private placeOrderButton : Locator = By.xpath('//*[@id="page-wrapper"]/div/div[2]/button');
    private placeOrderFields : Locator = By.xpath('//*[@class="modal fade show"]/div/div/div[2]/form/div/input');

    private purchaseButton : Locator = By.xpath('//*[@class="modal fade show"]/div/div/div[3]/button[2]');

    private popUpMessage : Locator = By.xpath('//*[@class="sweet-alert  showSweetAlert visible"]/h2');
    private OKButton : Locator = By.xpath('//*[@class="sweet-alert  showSweetAlert visible"]/div[7]/div/button');

    constructor(webDriver : WebDriver, url : string){
        super(webDriver, url);
    }

    async goToCardPage(){
        await this.webDriver.findElement(this.addToCardButton).click();
        await this.webDriver.wait(until.elementLocated(this.cardButton), 2000);
        await this.webDriver.findElement(this.cardButton).click();
    }

    async completePlaceOrderForm(name : string, 
                                country : string, 
                                city : string, 
                                creditCard : string,
                                month : string,
                                year : string) {
        
        await this.webDriver.wait(until.elementLocated(this.placeOrderButton), 2000);                            
        await this.webDriver.findElement(this.placeOrderButton).click();
        
        await this.webDriver.wait(until.elementsLocated(this.placeOrderFields), 2000);
        const fields = await this.webDriver.findElements(this.placeOrderFields);
        
        await fields[0].sendKeys(name);
        await fields[1].sendKeys(country);
        await fields[2].sendKeys(city);
        await fields[3].sendKeys(creditCard);
        await fields[4].sendKeys(month);
        await fields[5].sendKeys(year);

        await this.webDriver.findElement(this.purchaseButton).click();
    };

    async isPopUpVisible() : Promise<boolean>{
        await this.webDriver.wait(until.elementLocated(this.OKButton), 2000);
        return (await this.webDriver.findElement(this.popUpMessage).getText()).toString() === "Thank you for your purchase!";
    };

    async goBackToMain(){
        await this.webDriver.wait(until.elementLocated(this.OKButton), 2000);
        await this.webDriver.findElement(this.OKButton).click();
    };
}

export default CardPage;