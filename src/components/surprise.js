import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surprise: false
        }
    }

    buttonChange(surprise) {
        this.setState({
            surprise
        });
    }

    render() {
        // Show the button to start with
        if (!this.state.surprise) {
            console.log("Button is here");
            return (
            <div className="surpriseapp-btn">
            <SurpriseButton action={e => this.buttonChange(e)}/>;
            </div>
            );
        }

        return (
            <SurpriseImage />
        )
    }
}

