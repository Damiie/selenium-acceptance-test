package com.lamtech.luma.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EditAccountInformationPagePO {

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

    @FindBy(css = ".save > span:nth-child(1)")
    public static WebElement saveButton;

    //Initialised Elements
    public EditAccountInformationPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    //Page specific method

    public void clickAccountInformationLink(){accountInformationLink.click();
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

    public void clickSaveButton(){clickSaveButton();}


    }





