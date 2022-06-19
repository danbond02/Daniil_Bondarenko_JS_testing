import {Builder, WebDriver} from 'selenium-webdriver';
import 'mocha';
import { expect } from 'chai';

import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import CardPage from '../pages/CardPage';


describe("Order the Dell i7 8 gb laptop", function() {
        let webDriver : WebDriver;
        let loginPage : LoginPage;
        let mainPage : MainPage;
        let cardPage : CardPage;
        let url = "https://www.demoblaze.com/";

        before(async function(){
            webDriver = await new Builder().forBrowser('chrome').build();
            await webDriver.manage().window().maximize();
            loginPage = await new LoginPage(webDriver, url);
            mainPage = await new MainPage(webDriver, url);
            cardPage = await new CardPage(webDriver, url);
        });

        it("login check", async function() {
            await loginPage.login("danbond02", "qwerty12345");
            expect(await loginPage.isLogged());
        }).timeout(10000);

        it("find laptop", async function(){
            await mainPage.displayAllLaptops();
            expect(await mainPage.chekcName("Dell i7 8 gb"));
        }).timeout(10000);

        it("go to card page", async function(){
            await cardPage.goToCardPage();
            expect(await cardPage.getUrl()).to.equal("https://www.demoblaze.com/cart.html");
        }).timeout(10000);

        it("fill purchase order", async function(){
            await cardPage.completePlaceOrderForm("Dan Bond", "Ukraine", "Krivou Rog", "1234123412341234", "06", "2022");
            expect(await cardPage.isPopUpVisible());
        }).timeout(10000);

        it("go back to main page", async function () {
            await cardPage.goBackToMain();
            expect(await cardPage.getUrl()).to.equal("https://www.demoblaze.com/index.html");
        }).timeout(10000);

        after(async function (){
            await webDriver.quit();
        });
});

