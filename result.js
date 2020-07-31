import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableHighlight, StyleSheet } from 'react-native'

// import api results
import API from './api.js'

export default class Results extends Component {

    constructor(props) { // always pass in as props to prevent errors
        super(props)
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <Text style={styles.title0}> Showing Search Results for "{this.props.route.params.search}"</Text>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <API look={this.props.route.params.search} nav={this.props.navigation.navigate}/>
                </ScrollView>
                <TouchableHighlight style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.backTxt}>Go Back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#1d2124',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d2124',
    },
    title: {
        textAlign: 'center',
        justifyContent: 'space-between',
        color: 'white',
        fontSize: 16,
        fontFamily: 'American Typewriter',
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'left',
    },
    title0: {
        fontSize: 20,
        fontWeight: "800",
        padding: 10,
        color: '#fa575d',
        textAlign: 'center',
        fontFamily: 'Verdana',
        backgroundColor: '#1d2124',
        marginBottom: 10,
    },
    backBtn: {
        backgroundColor: '#fa575d',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
    },
    backTxt: {
        color: 'white',
        fontSize: 16,
        padding: 10,
    }
})
