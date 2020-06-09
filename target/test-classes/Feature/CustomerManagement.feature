@customerManagement
Feature: Customer Management

  Background:
    Given luma application is launched

  @changePassword
  Scenario Outline: Change password
    And user on Edit Account information page
    When user click on change password
    And user enter  "<Currentpassword>"
    And user enters "<Newpassword>" on edit account information page
    And users enter their "<ConfirmNewpassword>"
    And user click save
    Then Account Dashboard should displayed with validation message "You saved the account information"

    Examples:
      | Currentpassword | Newpassword | ConfirmNewpassword |
      | Monday02        | Monday03    | Monday03        |

