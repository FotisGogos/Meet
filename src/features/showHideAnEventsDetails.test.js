import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount,  } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    //Scenario 1
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;

    given('a user is on his main page', () => {
      AppWrapper = mount(<App />);
    });

    when('an event is shown', () => {
      expect(AppWrapper.find('.event')).toBeDefined();
    });

    then('event details/element will be collapsed', async () => {
      const eventDetails = await AppWrapper.find('.event .extra-details');
      expect(eventDetails.find('.hide')).toBeDefined();
    });


    
  });

    // Scenario 2 
  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;  

    given('a user can see the events', () => {
      AppWrapper = mount(<App />);
    });

    when('user clicks on the predefined “expand” button', () => {
      AppWrapper.update();
      let Event = AppWrapper.find('.event');
      Event.find('.show-details-btn').at(0).simulate('click');
    });

    then('events details will be displayed', () => {
      const EventDetails =  AppWrapper.find('.event .extra-details');
      expect(EventDetails.find('.show')).toBeDefined();
    });
  });

  //Scenario 3 
  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper; 
    AppWrapper = mount(<App />);
    given('user sees the details of an event', () => {
      const EventDetails =  AppWrapper.find('.event .extra-details');
        expect(EventDetails.find('')).toBeDefined();
    });

    when('user clicks on “close” button', () => {
      AppWrapper.update();
        let Event = AppWrapper.find('.event');
        Event.find('.show-details-btn').at(0).simulate('click');
    });

    then('events details will be hidden', () => {
      const EventDetails =  AppWrapper.find('.event .extra-details');
        expect(EventDetails.find('.hide')).toBeDefined();
    });

  });
});