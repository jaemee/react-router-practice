import React from 'react';
import Counter from '../Counter/Counter';
import './CounterGroup.css'


class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.defaultNum,
            inputValue: this.props.defaultNum,
            sum: 0
        }
    }

    render() {
        let counters = this.renderCounters();
        return (
            <div className="counter-group">
                <div className="regenerate">
                    <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button onClick={this.regenerateCounters}>Regenerate Indicated Counters</button>
                    <span>SUM: {this.state.sum}</span>
                    {counters}
                </div>
            </div>
        );
    }
    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }
    regenerateCounters = () => {
        this.setState({ counter: this.state.inputValue })
    }

    renderCounters = () => {
        let counters = [];
        for (let count = 0; count < this.state.counter; count++) {
            counters.push(<Counter
                key={count}
                onCounterValueChange={this.counterUpdateCallBack} />);
        }
        return counters;
    }

    counterUpdateCallBack = changeNum => {
        this.setState({ sum: this.state.sum + changeNum })
    }
}

export default CounterGroup;
