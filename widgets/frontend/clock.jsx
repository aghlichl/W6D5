const React = require('react');

class Clock extends React.Component{
  constructor(){
    super();
    this.state = {time: new Date()};
  }

  render(){
    const time = this.state.time;
    return(
      <div className="clock-container">
      <div className = "clock">
        <h3>Current Time</h3>
        <span>{time.getHours() % 12}:{this.pad(time.getMinutes())}:{this.pad(time.getSeconds())}</span>
      </div>
      <div className = 'date'>
        <h3>Date</h3>
        <span>{this.dayString(time.getDay())} {this.monthString(time.getMonth())} {time.getDate()} {time.getFullYear()} </span>
      </div>
      </div>
    );
  }

  dayString(num){
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    return days[num];

  }

  monthString(num){
    const months = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months[num];
  }
  pad(num, size=2) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  tick(){
    this.setState({time: new Date()});
  }

  componentDidMount(){
    const intervalID = setInterval(this.tick.bind(this), 1000);
    this.intervalID = intervalID;
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }
}



export default Clock;
