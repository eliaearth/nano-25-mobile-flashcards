import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

class DeckView extends Component {
    render(){
        return (<View></View>)
    }
}

function mapStateToProps (state) {

    return {
    }
}

export  default connect(
    mapStateToProps
)(DeckView)