Feature:Show/Hide events details

Scenario: An event element is collapsed by default
Given a user is on his main page
When an event is shown
Then event details/element will be collapsed

Scenario: User can expand an event to see its details
Given a user can see the events
When user clicks on the predefined “expand” button
Then events details will be displayed

Scenario: User can collapse an event to hide its details
Given user sees the details of an event
When user clicks on “close” button
Then events details will be hidden 