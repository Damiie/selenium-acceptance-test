package com.lamtech.luma.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPagePO {

    //Object locators

    @FindBy(id ="email" )
    public static WebElement emailField;

    @FindBy(id ="pass" )
    public static WebElement passwordField;

    @FindBy(css = "button.login > span:nth-child(1)")
    public static WebElement SignInButton;


    //Initialised Elements
    public LoginPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }


    //Page specific method
    public void enterEmail(String Email){
        emailField.sendKeys(Email);
    }
    public void enterPassword(String Password){
        passwordField.sendKeys(Password);
    }

    public void clickSignInButton(){
        SignInButton.click();
    }







}
