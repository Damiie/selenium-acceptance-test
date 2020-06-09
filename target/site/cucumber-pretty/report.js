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
  "name": "user on Edit Account information page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on change password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter  \"\u003cCurrentpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters \"\u003cNewpassword\u003e\" on edit account information page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "users enter their \"\u003cConfirmNewpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click save",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Account Dashboard should displayed with validation message \"You saved the account information\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "customer-management;change-password;",
  "rows": [
    {
      "cells": [
        "Currentpassword",
        "Newpassword",
        "ConfirmNewpassword"
      ],
      "line": 18,
      "id": "customer-management;change-password;;1"
    },
    {
      "cells": [
        "Monday02",
        "Monday03",
        "Monday03"
      ],
      "line": 19,
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
  "duration": 1175981195,
  "error_message": "java.lang.NullPointerException\n\tat com.lamtech.luma.stepDefinition.AccountManagementSteps.lumaApplicationIsLaunched(AccountManagementSteps.java:26)\n\tat ✽.Given luma application is launched(CustomerManagement.feature:5)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
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
  "name": "user on Edit Account information page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on change password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enter  \"Monday02\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters \"Monday03\" on edit account information page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "users enter their \"Monday03\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click save",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Account Dashboard should displayed with validation message \"You saved the account information\"",
  "keyword": "Then "
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