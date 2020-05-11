package com.lamtech.luma.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomepagePO {

    //Object locators
    @FindBy(linkText ="Create an Account" )
    public static WebElement createAnAccountLink;
    @FindBy(linkText = "Sign In")
    public static WebElement signInLink;


    //Initialised Elements
    public HomepagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }


    //Page specific method
    public void clickCreateAccountLink(){
        createAnAccountLink.click();
    }

    public void clickSignInLink(){
        signInLink.click();
    }









}
