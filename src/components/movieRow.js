import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native'

export default class MovieListComp extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableHighlight style={styles.movieWrapper} onPress={this.props.LookUpMovie}>
                <View style={styles.movieContainer}>
                    <Text style={styles.title}>{this.props.Title}</Text>
                    <Image source={this.props.Poster === 'N/A'? require('./../assets/NA.png') : {uri: this.props.Poster}} style={styles.poster} />
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    movieWrapper: {
        height: 300,
        width: '100%',
        backgroundColor: '#1d2124',
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieContainer: {
        width: '100%',
        height: '100%',
        maxWidth: '90%',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#fa575d',
    },
    title: {
        color: '#fa575d',
        fontWeight: 'bold',
        fontSize: 16,
        maxWidth: 250,
        padding: 10,
        textAlign: 'center',
    },
    poster: {
        height: 200,
        width: 140,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#f1f1f1',
    },
})


