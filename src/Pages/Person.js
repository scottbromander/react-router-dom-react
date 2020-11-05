import React, { Component } from 'react';
import { connect } from 'react-redux';

class Person extends Component {
    state = {
        firstName: '',
        middleName: '',
        lastName: ''
    }

    onButtonClick = (event) => {
        this.props.dispatch({type: 'UPDATE_PERSON', payload: this.state});
        this.props.history.push('/hobbies');
    }

    // DRY = Dont Repeat Yourself
    onFormChange = (input) => (event) => {
        this.setState({
            [input]: event.target.value
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Person Page</h2>
                </div>

                <div>
                    <input onChange={this.onFormChange('firstName')} placeholder="Enter First Name"></input>
                    <input onChange={this.onFormChange('middleName')} placeholder="Enter Middle Name"></input>
                    <input onChange={this.onFormChange('lastName')} placeholder="Enter Last Name"></input>
                </div>

                <div>
                    <button onClick={this.onButtonClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default connect()(Person);