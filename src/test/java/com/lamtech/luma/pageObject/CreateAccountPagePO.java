package com.lamtech.luma.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPagePO {

    //Object locators

    @FindBy(id = "firstname")
    public static WebElement firstNameField;

    @FindBy(name = "lastname")
    public static WebElement lastNameField;

    @FindBy(id = "email_address")
    public static WebElement emailAddressField;

    @FindBy(id = "password")
    public static WebElement passwordField;

    @FindBy(id = "password-confirmation")
    public static WebElement passwordConfirmationField;

    @FindBy(css = ".submit > span:nth-child(1)")
    public static WebElement createAnAccountButton;



    //Initialised Elements
    public CreateAccountPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }


    //Page specific method

    public void enterFirstName(String Firstname){firstNameField.sendKeys(Firstname);}

    public void enterLastName(String Lastname){lastNameField.sendKeys(Lastname);}

    public void enterEmail(String Email){emailAddressField.sendKeys(Email);}

    public void enterPassword(String Password){passwordField.sendKeys(Password);}

    public void  enterConfirmPassword(String Confirmpassword){passwordConfirmationField.sendKeys(Confirmpassword);}

    public void clickCreateAnAccountButton(){createAnAccountButton.click();}










}
