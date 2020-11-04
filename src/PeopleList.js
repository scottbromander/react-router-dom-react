import React, { Component } from 'react';
import { connect } from 'react-redux';

class PeopleList extends Component {

    render() {

        const htmlArray = this.props.store.peopleReducer.map((item, index) => {
            return <li key={index}>{item}</li>
        })

        return (
            <div>
                <ul>
                    {htmlArray}
                </ul>
            </div>
        )
    }
}

const mapStoreToProps = (store) => ({
    store
});

export default connect(mapStoreToProps)(PeopleList);