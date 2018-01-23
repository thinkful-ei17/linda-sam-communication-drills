import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            hours: 1
        };
    }

    rate(day, hours){
        return day/hours
    }

    updateDay(value){
        return this.setState({day: value})
    }

    updateHours(value){
        return this.setState({hours: value})
    }

    render() {
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} value={this.state.day} update={(value) => this.updateDay(value)} />
                <NumberInput id="hours" label="Hours" min={1} max={12} value={this.state.hours} update={(value) => this.updateHours(value)} />
                <Output id="hourly-rate" label="Hourly rate" value={this.rate(this.state.day, this.state.hours).toFixed(2)}
/>
            </form>
        );
    }
}