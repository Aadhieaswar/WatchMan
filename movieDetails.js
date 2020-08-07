import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, ScrollView, StyleSheet } from 'react-native'

export default class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: this.props.route.params.Movie,
        }
    }

    render() {
        var movie = this.state.movie[0] // get the movie object into a variable
        return (
            <View style={styles.container}>
                <View style={styles.movieContainer}>
                    <Text style={styles.title}>{movie.Title}</Text>
                    <Image source={movie.Poster === 'N/A'? require('./assets/NA.png') : {uri: movie.Poster}} style={styles.poster} resizeMode='contain' />
                    <View style={styles.scrollContainer}>
                        <ScrollView contentContainerStyle={styles.info}>
                            <Text style={styles.txt}> Year {'\n'} <Text style={styles.tag}>{movie.Year}</Text> </Text>
                            <Text style={styles.txt}>Genre {'\n'} <Text style={styles.tag}>{movie.Genre}</Text> </Text>
                            <Text style={styles.txt}>Type {'\n'} <Text style={styles.tag}>{movie.Type}</Text> </Text>
                            <Text style={styles.txt}>Language {'\n'} <Text style={styles.tag}>{movie.Language}</Text> </Text>
                            <Text style={styles.txt}>IMDB Rating {'\n'} <Text style={styles.tag}>{movie.imdbRating}</Text> </Text>
                            <Text style={styles.txt}>Metascore {'\n'} <Text style={styles.tag}>{movie.Metascore}</Text> </Text>
                            <Text style={styles.txt}>Actors {'\n'} <Text style={styles.tag}>{movie.Actors}</Text> </Text>
                            <Text style={styles.txt}>Production {'\n'} <Text style={styles.tag}>{movie.Production}</Text> </Text>
                            <Text style={styles.txt}>Country {'\n'} <Text style={styles.tag}>{movie.Country}</Text> </Text>
                            <Text style={styles.txt}>Plot {'\n'} <Text style={styles.tag}>{movie.Plot}</Text> </Text>
                        </ScrollView>
                    </View>
                </View>
                <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.backTxt}>Back to Results</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d2124',
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieContainer: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#fa575d',
        borderWidth: 4,
        borderColor: 'white',
        marginTop: 15,
        padding: 5,
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderColor: '#1d2124',
        borderRadius: 10,
    },
    info: {
        flexGrow: 1,
        alignItems: 'center',
        width: '100%',
    },
    tag: {
        color: 'white',
        fontStyle: 'normal',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1d2124',
    },
    txt: {
        padding: 10,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#1d2124',
        fontSize: 16,
    },
    poster: {
        minWidth: '80%',
        maxHeight: '40%',
        minHeight: '35%',
        marginBottom: 10,
    },
    backBtn: {
        backgroundColor: '#fa575d',
        borderRadius: 5,
        margin: 15,
    },
    backTxt: {
        fontSize: 16,
        padding: 10,
    },
})
