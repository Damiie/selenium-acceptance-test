@accountManagement
Feature: Account Management

  Background:
    Given luma application is launched

  @createAccount
  Scenario Outline: Create an account with a valid email
    And user on create an account page
    When user enter "<Firstname>"
    And user enters "<Lastname>"
    And user enter their "<Email>"
    And user enters their "<Password>"
    And users enter "<Confirmpassword>"
    And user click create an account
    Then account dashboard is displayed
    Examples:
      | Firstname | Lastname | Email                   | Password | Confirmpassword |
      | lilian    | Farner   | Lilian.farner01@yahoo.com | Monday03 | Monday03        |

  @login
  Scenario Outline: Account Login- Registered customer can login
    And user on login page
    When user enter "<Email>" on login page
    And user enters "<Password>" on login page
    And user click Login
    Then My account dashboard is displayed
    Examples:
      | Email                   | Password |
      | devondash01@yahoo.co.uk | Monday02 |