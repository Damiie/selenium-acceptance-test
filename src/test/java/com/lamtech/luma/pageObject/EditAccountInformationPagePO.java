package com.lamtech.luma.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EditAccountInformationPagePO {

    //Object locators

    @FindBy(linkText = "Account Information")
    public static WebElement accountInformationLink;

    @FindBy(css = "div.field:nth-child(7) > label:nth-child(2) > span:nth-child(1)")
    public static WebElement changePasswordRadioDial;

    @FindBy(id = "current-password")
    public static WebElement currentPasswordField;

    @FindBy(id = "password")
    public static WebElement newPasswordField;

    @FindBy(id = "password-confirmation")
    public static WebElement passwordConfirmationField;

    @FindBy(css = ".save > span:nth-child(1)")
    public static WebElement saveButton;

    //Initialised Elements
    public EditAccountInformationPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    //Page specific method

    public void clickAccountInformationLink(){accountInformationLink.click();}

    public void clickChangePasswordRadioDial(){changePasswordRadioDial.click();}

    public void enterCurrentPasswordField(String Currentpassword){
        currentPasswordField.sendKeys(Currentpassword);
    }
    public void enterNewPasswordFeild(String Newpassord){
        newPasswordField.sendKeys(Newpassord);
    }
    public  void enterPasswordConfirmationField(String ConfirmNewpassword){
        passwordConfirmationField.sendKeys(ConfirmNewpassword);
    }
    public void clickSaveButton(){clickSaveButton();}

    }





