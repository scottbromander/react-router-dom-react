import React, { Component } from 'react';

class Hobbies extends Component {

    onButtonClick = (event) => {
        this.props.history.push('/summary');
    }

    render() {
        return (
            <div>
                <h2>Hobbies</h2>
                <button onClick={this.onButtonClick}>Next</button>
            </div>
        )
    }
}

export default Hobbies;