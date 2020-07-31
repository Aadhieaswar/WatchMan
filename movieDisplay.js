import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native'

export default class MovieListComp extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableHighlight style={styles.movieWrapper} key={this.props.imKey} onPress={this.props.ShowMovie}>
                <View style={styles.movieContainer}>
                    <Image source={this.props.poster === 'N/A'? require('./assets/NA.png') : {uri: this.props.poster}} style={{ height: 150, width: '33%', alignSelf: 'center', borderWidth: 2, borderColor: 'white' }} />
                    <View style={styles.separator}>
                        <Text key={this.props.Title} style={styles.separatorTitle}>{this.props.Title}</Text>
                        <Text key={this.props.Year} style={styles.year}>Year: {this.props.Year}</Text>
                        <Text key={this.props.ShortPlot} style={styles.plot}>Plot: {this.props.ShortPlot}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    movieWrapper: {
        height: 200,
        width: '100%',
        backgroundColor: '#1d2124',
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieContainer: {
        flexDirection: 'row',
        height: '100%',
        width: '90%',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#fa575d',
    },
    separator: {
        padding: 5,
        minWidth: '66%',
        alignItems: 'center',
    },
    separatorTitle: {
        color: '#fa575d',
        fontWeight: 'bold',
        fontSize: 16,
        width: 200,
        textAlign: 'center',
        overflow: 'scroll',
    },
    year: {
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: 12,
        padding: 15,
    },
    plot: {
        alignSelf: 'flex-start',
        color: 'white',
        width: 200,
        padding: 15,
        height: '50%',
        fontSize: 16,
        overflow: 'scroll',
    },
})


