import React, {Component}  from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import { extractLocations, getEvents } from './api';



class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    errorText: ''
  }


  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events) 
        });
      }
    });
  } 

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location,eventcount) => {
    getEvents(eventcount).then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, this.state.numberOfEvents);
        if (this.mounted) {
          this.setState({
            events: eventsToShow,
            currentLocation: location,
          });
        }
    });
  }

  

  updateNumberOfEvents = (eventCount) => {
    const value = eventCount.target.value;
    if (value > 32) {
      this.setState({
        numberOfEvents: 32,
        errorText: 'Please select a number from 1 to 32'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      });
    }
    const { currentLocation } = this.state;
    this.updateEvents(currentLocation, eventCount);
    };

  render() {
    return (
      <div className="App">
       
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
        <NumberOfEvents 
           numberOfEvents={this.state.numberOfEvents}
           updateNumberOfEvents={this.updateNumberOfEvents}
           errorText ={this.state.errorText}
          />
        
      </div>
    );
  }

}

export default App;