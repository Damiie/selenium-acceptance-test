package com.lamtech.luma.stepDefinition;

import com.lamtech.luma.pageObject.HomepagePO;
import com.lamtech.luma.pageObject.LoginPagePO;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class CustomerManagementSteps {

    WebDriver driver;


    @And("^user on Edit Account information page$")
    public void userOnEditAccountInformationPage() {

        driver.findElement(By.linkText("Account Information")).click();

    }

    @When("^user click on change password$")
    public void userClickOnChangePassword() {
        driver.findElement(By.cssSelector("div.field:nth-child(7)")).click();
    }

    @And("^user enter  \"([^\"]*)\"$")
    public void userEnter(String Currentpassword) throws Throwable {
        driver.findElement(By.id("current-password")).sendKeys(Currentpassword);

    }

    @And("^user enters \"([^\"]*)\" on edit account information page$")
    public void userEntersOnEditAccountInformationPage(String Newpassword) throws Throwable {
        driver.findElement(By.id("password")).sendKeys(Newpassword);

    }

    @And("^users enter their \"([^\"]*)\"$")
    public void usersEnterTheir(String ConfirmNewpassword) throws Throwable {
        driver.findElement(By.id("password-confirmation")).sendKeys(ConfirmNewpassword);
    }

    @And("^user click save$")
    public void userClickSave() {
        driver.findElement(By.cssSelector(".save > span:nth-child(1)")).click();
    }

    @Then("^Account Dashboard should displayed with validation message \"([^\"]*)\"$")
    public void accountDashboardShouldDisplayedWithValidationMessage(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }



}
