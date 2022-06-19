import {WebDriver, Locator, By, until, WebElement} from 'selenium-webdriver';
import IPage from './IPage';

class MainPage extends IPage{

    private laptopButton : Locator = By.xpath('//*[@id="itemc"][2]');
    private laptop : Locator = By.xpath('(//*[@href="prod.html?idp_=12"])[2]');
    private name : Locator = By.xpath('//*[@class="name"]');

    constructor(webDriver : WebDriver, url : string){
        super(webDriver, url);
    };

    async displayAllLaptops(){
        try{
            await this.webDriver.findElement(this.laptopButton).click();
        } catch(e) {
            await this.webDriver.findElement(this.laptopButton).click();
        }
        await this.webDriver.wait(until.elementLocated(this.laptop), 2000);
        await this.webDriver.findElement(this.laptop).click();
    };

    async chekcName(name : string) : Promise<boolean>{
        await this.webDriver.wait(until.elementLocated(this.name), 2000);
        return (await this.webDriver.findElement(this.name).getText()).toString() === name;
    };

}

export default MainPage;