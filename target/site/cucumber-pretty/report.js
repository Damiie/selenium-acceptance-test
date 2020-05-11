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
  "duration": 11748396103,
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
  "duration": 1786256323,
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
  "duration": 1232082888,
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
  "duration": 305761497,
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
  "duration": 544503730,
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
  "duration": 393764548,
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
  "duration": 274297250,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickCreateAnAccount()"
});
formatter.result({
  "duration": 1979712663,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.accountDashboardIsDisplayed()"
});
formatter.result({
  "duration": 59562,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Account Login- Registered customer can login",
  "description": "",
  "id": "account-management;account-login--registered-customer-can-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user on login page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enter \"\u003cEmail\u003e\" on login page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\u003cPassword\u003e\" on login page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user click Login",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "My account dashboard is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "account-management;account-login--registered-customer-can-login;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 29,
      "id": "account-management;account-login--registered-customer-can-login;;1"
    },
    {
      "cells": [
        "devondash01@yahoo.co.uk",
        "Monday01"
      ],
      "line": 30,
      "id": "account-management;account-login--registered-customer-can-login;;2"
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
  "duration": 5836917261,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Account Login- Registered customer can login",
  "description": "",
  "id": "account-management;account-login--registered-customer-can-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    },
    {
      "line": 21,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user on login page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enter \"devondash01@yahoo.co.uk\" on login page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"Monday01\" on login page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user click Login",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "My account dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userOnLoginPage()"
});
formatter.result({
  "duration": 1754749401,
  "status": "passed"
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
  "duration": 1307007961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monday01",
      "offset": 13
    }
  ],
  "location": "AccountManagementSteps.userEntersOnLoginPage(String)"
});
formatter.result({
  "duration": 209268555,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickLogin()"
});
formatter.result({
  "duration": 1576723077,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountDashboardIsDisplayed()"
});
formatter.result({
  "duration": 60873,
  "status": "passed"
});
});