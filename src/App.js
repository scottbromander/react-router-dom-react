import React, { Component } from 'react';
import { connect } from 'react-redux';
import PeopleList from './PeopleList';

class App extends Component {

  state = {
    form: ''
  }

  onBroadcastClickOne = (event) => {
    this.props.dispatch({type: 'BUTTON_ONE'});
  }

  onBroadcastClickTwo = (event) => {
    this.props.dispatch({type: 'BUTTON_TWO'});
  }

  onBroadcastClickThree = (event) => {
    this.props.dispatch({type: "BUTTON_THREE"})
  }

  onFormUpdate = (event) => {
    this.setState({
      form: event.target.value
    });
  }

  onAddPerson = (event) => {
    this.props.dispatch({type: "ADD_PERSON", payload: this.state.form});
    this.setState({
      form: ''
    })
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Radio!!</h1>
        <h1>{this.props.store.firstReducer}</h1>
        <h1>{this.props.store.secondReducer}</h1>
        <h1>{this.props.store.thirdReducer}</h1>
        <button onClick={this.onBroadcastClickOne}>Radio out1</button>
        <button onClick={this.onBroadcastClickTwo}>Radio out2</button>
        <button onClick={this.onBroadcastClickThree}>Radio out3</button>
        <div>
          <input value={this.state.form} onChange={this.onFormUpdate} placeholder="Add person" />
          <button onClick={this.onAddPerson}>Add Person</button>
        </div>
        
        <PeopleList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store
});

export default connect(mapStoreToProps)(App);
