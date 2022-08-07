import React, { PureComponent } from "react";

export class ClassTimer extends PureComponent {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    console.log(" class timer start");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { time } = this.state;
    return (
      <div className="Container">
        <div className="center White">Class Timer</div>
        <div className="center White">{time}</div>
        <button
          className="btn btn-width"
          onClick={() => {
            clearInterval(this.interval);
          }}
        >
          Stop
        </button>
      </div>
    );
  }
}

export default ClassTimer;
