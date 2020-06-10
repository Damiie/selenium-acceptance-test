$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CustomerManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Customer Management",
  "description": "",
  "id": "customer-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@customerManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Change password",
  "description": "",
  "id": "customer-management;change-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@changePassword"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user on login page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cEmail\u003e\" on login page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cPassword\u003e\" on login page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user on Edit Account information page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click on change password",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter  \"\u003cCurrentpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cNewpassword\u003e\" on edit account information page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "users enter their \"\u003cConfirmNewpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click save",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Account Dashboard should displayed with validation message \"You saved the account information\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "customer-management;change-password;",
  "rows": [
    {
      "cells": [
        "Currentpassword",
        "Newpassword",
        "ConfirmNewpassword",
        "Email",
        "Password"
      ],
      "line": 22,
      "id": "customer-management;change-password;;1"
    },
    {
      "cells": [
        "Monday02",
        "Monday03",
        "Monday03",
        "devondash01@yahoo.co.uk",
        "Monday02"
      ],
      "line": 23,
      "id": "customer-management;change-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "luma application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountManagementSteps.lumaApplicationIsLaunched()"
});
formatter.result({
  "duration": 1535483771,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Change password",
  "description": "",
  "id": "customer-management;change-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@customerManagement"
    },
    {
      "line": 7,
      "name": "@changePassword"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user on login page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"devondash01@yahoo.co.uk\" on login page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Monday02\" on login page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user on Edit Account information page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click on change password",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter  \"Monday02\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters \"Monday03\" on edit account information page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "users enter their \"Monday03\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click save",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Account Dashboard should displayed with validation message \"You saved the account information\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userOnLoginPage()"
});
formatter.result({
  "duration": 218088074,
  "error_message": "java.lang.NullPointerException\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat com.lamtech.luma.pageObject.HomepagePO.clickSignInLink(HomepagePO.java:29)\n\tat com.lamtech.luma.stepDefinition.AccountManagementSteps.userOnLoginPage(AccountManagementSteps.java:97)\n\tat ✽.And user on login page(CustomerManagement.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "devondash01@yahoo.co.uk",
      "offset": 12
    }
  ],
  "location": "AccountManagementSteps.userEnterOnLoginPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday02",
      "offset": 13
    }
  ],
  "location": "AccountManagementSteps.userEntersOnLoginPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountManagementSteps.userClickLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerManagementSteps.userOnEditAccountInformationPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerManagementSteps.userClickOnChangePassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday02",
      "offset": 13
    }
  ],
  "location": "CustomerManagementSteps.userEnter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday03",
      "offset": 13
    }
  ],
  "location": "CustomerManagementSteps.userEntersOnEditAccountInformationPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday03",
      "offset": 19
    }
  ],
  "location": "CustomerManagementSteps.usersEnterTheir(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerManagementSteps.userClickSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "You saved the account information",
      "offset": 60
    }
  ],
  "location": "CustomerManagementSteps.accountDashboardShouldDisplayedWithValidationMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});