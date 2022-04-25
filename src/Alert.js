import React,  { Component } from 'react'

class Alert  extends Component {
  constructor(props){
    super(props)
    this.color = null; 
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render () {
    return (
      <div className ="Alert">
        <p style={this.getStyle()} className="error-text">{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }

  getStyle = () => {
    return {
      color: this.color,
      position: 'relative',
      bottom: '20px',
      right: '60px'
    };
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }

  getStyle = () => {
    return {
      color: this.color,
      position: 'absolute',
      bottom: '-115px'
    };
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }
}

export { InfoAlert,ErrorAlert, WarningAlert };