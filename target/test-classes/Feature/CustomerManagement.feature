@customerManagement
Feature: Customer Management

#  Background:
#    Given luma application is launched

  @changePassword
  Scenario Outline: Change password
    And user on login page
    When user enter "<Email>" on login page
    And user enters "<Password>" on login page
    And user click Login
    And user on Edit Account information page
    When user click on change password
    And user enter  "<Currentpassword>"
    And user enters "<Newpassword>" on edit account information page
    And users enter their "<ConfirmNewpassword>"
    And user click save
    Then Account Dashboard should displayed with validation message "You saved the account information"

    Examples:
      | Currentpassword | Newpassword | ConfirmNewpassword | Email                   | Password |
      | Monday05        | Monday03    | Monday03           | devondash01@yahoo.co.uk | Monday05 |

