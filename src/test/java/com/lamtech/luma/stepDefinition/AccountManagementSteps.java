package com.lamtech.luma.stepDefinition;

import com.lamtech.luma.cucumber.Hooks;
import com.lamtech.luma.pageObject.CreateAccountPagePO;
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
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class AccountManagementSteps {
    WebDriver driver = Hooks.driver;
    //CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);

    @Given("^luma application is launched$")
    public void lumaApplicationIsLaunched() {
        // Use Firefox broswer
        //WebDriverManager.firefoxdriver().setup();
        //driver = new FirefoxDriver();
        //driver.get("http://demo-magento2.vuestorefront.io/");
    }

    @And("^user on create an account page$")
    public void userOnCreateAnAccountPage() throws Throwable {
        //driver.findElement(By.linkText("Create Account")).click();

        HomepagePO homepagePO = new HomepagePO(driver);
        homepagePO.clickCreateAccountLink();
    }

    @When("^user enter \"([^\"]*)\"$")
    public void userEnter(String Firstname) throws Throwable {
        //driver.findElement(By.id("firstname")).sendKeys(Firstname);

        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterFirstName(Firstname);

    }

    @And("^user enters \"([^\"]*)\"$")
    public void userEnters(String Lastname) throws Throwable {
        //driver.findElement(By.name("lastname")).sendKeys(Lastname);

        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterLastName(Lastname);
    }

    @And("^user enter their \"([^\"]*)\"$")
    public void userEnterTheir(String Email) throws Throwable {
        //driver.findElement(By.id("email_address")).sendKeys(Email);

        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterEmail(Email);
    }

    @And("^user enters their \"([^\"]*)\"$")
    public void userEntersTheir(String Password) throws Throwable {
        //driver.findElement(By.id("password")).sendKeys(Password);

        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterPassword(Password);
    }

    @And("^users enter \"([^\"]*)\"$")
    public void usersEnter(String Confirmpassword) throws Throwable {
        //driver.findElement(By.id("password-confirmation")).sendKeys(Confirmpassword);

        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterConfirmPassword(Confirmpassword);
    }

    @And("^user click create an account$")
    public void userClickCreateAnAccount() throws Throwable {
        //driver.findElement(By.cssSelector(".submit > span:nth-child(1)")).click();
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.clickCreateAnAccountButton();
    }

    @Then("^account dashboard is displayed$")
    public void accountDashboardIsDisplayed() throws Throwable {
        //driver.close();

    }

    @And("^user on login page$")
    public void userOnLoginPage() throws Throwable {

        //driver.findElement(By.linkText("Sign In")).click();
        HomepagePO homepagePO = new HomepagePO(driver);
        homepagePO.clickSignInLink();
    }

    @When("^user enter \"([^\"]*)\" on login page$")
    public void userEnterOnLoginPage(String Email) throws Throwable {
        //driver.findElement(By.id("email")).sendKeys(Email);
        LoginPagePO loginPagePO = new LoginPagePO(driver);
        loginPagePO.enterEmail(Email);
    }

    @And("^user enters \"([^\"]*)\" on login page$")
    public void userEntersOnLoginPage(String Password) throws Throwable {
        //driver.findElement(By.id("pass")).sendKeys(Password);
        LoginPagePO loginPagePO = new LoginPagePO(driver);
        loginPagePO.enterPassword(Password);
    }

    @And("^user click Login$")
    public void userClickLogin() throws Throwable {
        //driver.findElement(By.cssSelector("button.login > span:nth-child(1)")).click();
        LoginPagePO loginPagePO = new LoginPagePO(driver);
        loginPagePO.clickSignInButton();
    }

    @Then("^My account dashboard is displayed$")
    public void myAccountDashboardIsDisplayed() throws Throwable {
        //driver.close();
    }

}
