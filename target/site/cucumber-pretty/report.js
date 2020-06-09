$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Create an account with a valid email",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user on create an account page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cFirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter their \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters their \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "users enter \"\u003cConfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click create an account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "account dashboard is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "Password",
        "Confirmpassword"
      ],
      "line": 18,
      "id": "account-management;create-an-account-with-a-valid-email;;1"
    },
    {
      "cells": [
        "lilian",
        "Farner",
        "Lilian.farner01@yahoo.com",
        "Monday03",
        "Monday03"
      ],
      "line": 19,
      "id": "account-management;create-an-account-with-a-valid-email;;2"
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
  "duration": 13303831180,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create an account with a valid email",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    },
    {
      "line": 7,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user on create an account page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"lilian\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Farner\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter their \"Lilian.farner01@yahoo.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters their \"Monday03\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "users enter \"Monday03\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click create an account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "account dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 845576492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lilian",
      "offset": 12
    }
  ],
  "location": "AccountManagementSteps.userEnter(String)"
});
formatter.result({
  "duration": 356771978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Farner",
      "offset": 13
    }
  ],
  "location": "AccountManagementSteps.userEnters(String)"
});
formatter.result({
  "duration": 141815617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lilian.farner01@yahoo.com",
      "offset": 18
    }
  ],
  "location": "AccountManagementSteps.userEnterTheir(String)"
});
formatter.result({
  "duration": 140122182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday03",
      "offset": 19
    }
  ],
  "location": "AccountManagementSteps.userEntersTheir(String)"
});
formatter.result({
  "duration": 231580486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday03",
      "offset": 13
    }
  ],
  "location": "AccountManagementSteps.usersEnter(String)"
});
formatter.result({
  "duration": 446563815,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickCreateAnAccount()"
});
formatter.result({
  "duration": 626968694,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.accountDashboardIsDisplayed()"
});
formatter.result({
  "duration": 70308,
  "status": "passed"
});
});