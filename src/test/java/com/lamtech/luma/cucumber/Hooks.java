package com.lamtech.luma.cucumber;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Hooks {

    public static WebDriver driver;

    @Before
    public void beforeScenario() {
           // Use Firefox broswer
        WebDriverManager.firefoxdriver().setup();
        driver = new FirefoxDriver();
        driver.get("http://demo-magento2.vuestorefront.io/");
    }

    @After
    public void afterScenario(Scenario scenario){

        //driver.close();
        //driver.quit();
    }

}
