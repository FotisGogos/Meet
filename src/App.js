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
    currentLocation: "all"
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
    this.setState({
      numberOfEvents: eventCount
    });
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
          />
      </div>
    );
  }

}

export default App;