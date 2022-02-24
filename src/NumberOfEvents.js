import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
      
  render() {
    return (
      <div className="NumberOfEvents">
       <ErrorAlert text={this.props.errorText} />
        <p>Number of events</p>
        <input
          type="number"
          className="newNumber"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}
        />
        

      </div>
    )
  };
}

export default NumberOfEvents;




