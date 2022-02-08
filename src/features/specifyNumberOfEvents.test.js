import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  //Scenario 1

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('a user in on his main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user hasn’t specified a default number', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
      AppWrapper.update();
    });

    then('default number will be shown', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
     });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    

    given('a user in on his main page', () => {
      AppWrapper = mount(<App />);
      
    });

    when('the user knows the number of events they want to see', () => {
      AppWrapper.update();
      AppWrapper.find(".newNumber").simulate("change", { target: { value: '1' } });
      });
    

    then('the specified number of events will be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });
});