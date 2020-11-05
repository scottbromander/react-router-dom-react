import React, { Component } from 'react';

class Home extends Component {

    onButtonClick = (event) => {
        this.props.history.push('/person')
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <h2>Home Page</h2>

                <button onClick={this.onButtonClick}>Start</button>
            </div>
        )
    }
}

export default Home;