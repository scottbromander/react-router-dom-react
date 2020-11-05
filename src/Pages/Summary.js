import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {

    render() {

        ////////////////
        // let person = this.props.store.personReducer.firstName ? this.props.store.personReducer : 
        // {
        //     firstName: "<N/A>",
        //     middleName: "<N/A>",
        //     lastName: "<N/A>"
        // };

        // if (this.props.store.personReducer.firstName) {
        //     person = this.props.store.personReducer
        // } else {
        //     person = {
        //         firstName: "<N/A>",
        //         middleName: "<N/A>",
        //         lastName: "<N/A>"
        //     }
        // }
        /////////////////



        return (
            <div>
                <h2>Summary</h2>

                <h2>Name</h2>
                {/* <p>{person.firstName} {person.middleName} {person.lastName}</p> */}
                {/* {this.props.store.personReducer.firstName ? <p>{this.props.store.personReducer.firstName}</p> : <p>?</p>} */}
                {this.props.store.personReducer.firstName && <p>{this.props.store.personReducer.firstName}</p>}
            </div>
        )
    }
}

const mapStoreToProps = (store) => ({store});

export default connect(mapStoreToProps)(Summary);