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
                    <Image source={this.props.Poster === 'N/A'? require('./assets/NA.png') : {uri: this.props.Poster}} style={styles.poster} />
                    <View style={styles.separator}>
                        <Text style={styles.separatorTitle}>{this.props.Title}</Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.tag}>Year: <Text style={styles.txtContainer}>{this.props.Year}</Text> </Text>
                            <Text style={styles.tag}>Lan: <Text style={styles.txtContainer}>{this.props.Language}</Text> </Text>
                            <Text style={styles.tag}>Duration: <Text style={styles.txtContainer}>{this.props.Runtime}</Text> </Text>
                            <Text style={styles.tag}>Genre: <Text style={styles.txtContainer}>{this.props.Genre}</Text> </Text>
                            <Text style={styles.tag}>Rated: <Text style={styles.txtContainer}>{this.props.Rated}</Text> </Text>
                        </View>
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
        width: '100%',
        height: '100%',
        maxWidth: '90%',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#fa575d',
    },
    separator: {
        padding: 5,
        maxWidth: '66%',
        alignItems: 'center',
    },
    separatorTitle: {
        color: '#fa575d',
        minWidth: '100%',
        fontWeight: 'bold',
        fontSize: 16,
        maxWidth: 200,
        textAlign: 'center',
    },
    tag: {
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 5,
        fontSize: 12,
        padding: 5,
        fontWeight: 'bold',
    },
    poster: {
        height: 150,
        width: '33%',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-around',
        width: '100%',
        textAlign: 'center',
        padding: 5,
    },
    txtContainer: {
        color: '#fa575d',
        textAlign: 'center',
        letterSpacing: 1,
    },
})


