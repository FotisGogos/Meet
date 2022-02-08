Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number

Given a user in on his main page
When the user hasn’t specified a default number
Then default number will be shown

Scenario: User can change the number of events they want to see

Given a user in on his main page
When the user knows the number of events they want to see
Then the specified number of events will be displayed 