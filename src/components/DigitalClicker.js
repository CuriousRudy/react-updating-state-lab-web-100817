import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }
  handleClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    });
  };

  render() {
    return (
      <div>
        <h1>I have been clicked {this.state.timesClicked} times!</h1>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
