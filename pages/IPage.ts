import {WebDriver} from 'selenium-webdriver';

class IPage {

    protected webDriver : WebDriver;
    protected url : string;

    constructor(webDriver : WebDriver,
                url : string){
        this.webDriver = webDriver;
        this.url = url;
        this.webDriver.get(url);            
    }
    
    public getUrl(){
        return this.webDriver.getCurrentUrl();
    }

}

export default IPage;