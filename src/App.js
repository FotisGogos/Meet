import React, {Component}  from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { WarningAlert } from './Alert';


import { extractLocations, getEvents, checkToken, getAccessToken } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    showWelcomeScreen: undefined,
    numberOfEvents: 32,
    currentLocation: "all",
    errorText: '',
    warningText: '',
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

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
    if (this.state.showWelcomeScreen === undefined) return <div
        className="App" />
    return (
      <div className="App">
        <div>
        { !navigator.onLine ? (<WarningAlert text='You are offline!' />) : (<WarningAlert text=' ' />)}
        </div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
        <NumberOfEvents 
           numberOfEvents={this.state.numberOfEvents}
           updateNumberOfEvents={this.updateNumberOfEvents}
           errorText ={this.state.errorText}
          />
          <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }

}

export default App;