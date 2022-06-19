import {WebDriver, Locator, By, until, WebElement} from 'selenium-webdriver';
import IPage from './IPage';

class LoginPage extends IPage{

    private loginButton : Locator = By.id("login2");
    private username : Locator = By.id("loginusername");
    private password : Locator = By.id("loginpassword");
    private submitButton : Locator = By.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]');
    private welcomeButton : Locator = By.id("nameofuser");

    constructor(webDriver : WebDriver, url : string){
        super(webDriver, url);
    }

    async login(username : string, password : string){
        await this.webDriver.findElement(this.loginButton).click();

        const usernameWebElement = await this.webDriver.findElement(this.username);
        await this.webDriver.wait(until.elementIsVisible(usernameWebElement), 2000);

        await usernameWebElement.sendKeys(username);
        await this.webDriver.findElement(this.password).sendKeys(password);
        await this.webDriver.findElement(this.submitButton).click();
    };


    async isLogged() : Promise<boolean>{
        return this.webDriver.findElement(this.welcomeButton).isDisplayed();
    };

}

export default LoginPage;