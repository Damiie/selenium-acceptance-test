package com.lamtech.luma.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class EditAccountInformationPagePO {

    //Declare Webdriver variable
     WebDriverWait wait;

    //Object locators

    @FindBy(linkText = "Account Information")
    public static WebElement accountInformationLink;

    @FindBy(id = "change-password")
    public static WebElement changePasswordTickBox;

    @FindBy(id = "current-password")
    public static WebElement currentPasswordField;

    @FindBy(id = "password")
    public static WebElement newPasswordField;

    @FindBy(id = "password-confirmation")
    public static WebElement passwordConfirmationField;

    @FindBy( css = ".save > span:nth-child(1)")
    public static WebElement saveButton;


    //Initialised Elements
    public EditAccountInformationPagePO(WebDriver driver){
        wait = new WebDriverWait(driver, 10);
        PageFactory.initElements(driver, this);
    }

    //Page specific method

    public void clickAccountInformationLink(){
        //wait.until(ExpectedConditions.elementToBeClickable(accountInformationLink));
        //wait.until(ExpectedConditions.elementToBeClickable(accountInformationLink));

        wait.until(ExpectedConditions.elementToBeClickable(accountInformationLink));

        accountInformationLink.click();
    }



    public void clickChangePasswordTickBox(){changePasswordTickBox.click();
    }
    public void enterCurrentPassword(String Currentpassword){
        currentPasswordField.sendKeys(Currentpassword);
    }
    public void enterNewPassword(String Newpassword){
        newPasswordField.sendKeys(Newpassword);
    }
    public  void enterPasswordConfirmation(String ConfirmNewpassword){
        passwordConfirmationField.sendKeys(ConfirmNewpassword);
    }
    public void clickSaveButton(){
        saveButton.click();
    }

    }





