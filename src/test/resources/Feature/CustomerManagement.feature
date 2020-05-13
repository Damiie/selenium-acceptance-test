Feature: Customer Management

Scenario Outline: Create an account- Customer cannot open account with duplicate email
Given user on create account page
When user enter "<Firstname>"
And user enter  "<Lastname>"
And user enters "<Email>"
And user enter "<Password>"
And user enter "<Confirmpassword>"
And user click create an account
Then User login unsuccessful- Error message "Email account already exist" is displayed
Examples:
| Firstname  | Lastname | Email                   | Password   | Confirmpassword |
| Lisa-Marie | Smith    | devondash01@outlook.com | Thursday02 | Thursday02      |

Scenario Outline: Account Login- Registered customer can login
Given user on login page
When user enter "<Email>"
And user enter "<Password>"
And user click Login
Then My account dashboard is displayed
Examples:
| Email                   | Password |
| devondash01@outlook.com | Tuesday |

Scenario Outline: Account Login-Error message displayed when Unregistered customer attempts login
Given user on Login page
When user enter "<Email>"
And user enter "<Password>"
And user click Login
Then User login unsuccessful- Error message "Username/ Password does not exist" is displayed
Examples:
| Email                      | Password  |
| crystabeljenkins@yahoo.com | Orange231 |

Scenario Outline:Account login- Deleted customer account cannot login
Given user on Login page
When user enter "<Email>" that has been deleted
And user enter "<Password>"
And user click Login
Then User login unsuccessful- Error message "..." is displayed
Examples:
| Email                        | Password  |
| Lilianfraser23@outlook.co.uk | Tweezer68 |

Scenario Outline:Account login- Customer account inactive after 12 months cannot login
Given user on Login page
When user enter "<Email>"
And user enter "<Password>"
And user click Login
Then User login unsuccessful- Error message "..." is displayed
Examples:
|Email|Password|