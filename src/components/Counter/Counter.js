import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  render() {

    return (
      <div className="counter">
          <div><button onClick={this.incrementNum}>+</button>
                <span> {this.state.number} </span>
          <button onClick={this.decrementNum}>-</button></div>
      </div>
    );
  }

  incrementNum = ()  => {this.setState({number: this.state.number+1})
                this.props.onCounterValueChange(1)}
  decrementNum = () => {this.setState({number: this.state.number-1})
                this.props.onCounterValueChange(-1)}
}

export default Counter;
