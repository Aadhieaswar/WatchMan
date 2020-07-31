import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

// import component
import MovieList from './movieDisplay.js'

const API_URL = 'http://www.omdbapi.com/?apikey=fda039b5&r=json&'

var results = [] // variable to save the results of the search
var plot = 'Nothing At the Moment'

export default class Fetch extends Component {

    constructor(props) {
        super(props)
    }

    // gets the title, year, and poster for the movie
    APIFetch = async () => {
        var req = await fetch(API_URL + `s=${this.props.look}&`)
        var data = await req.json()
        this.mapArr(data)
    }

    mapArr = (data) => {
        data['Search'].map((item) => {
            results.push(item)
        })
    }

    getPlot = async (imdbID) => {

        var req = await fetch(API_URL + `i=${imdbID}&plot=short&`)
        var data = await req.json()

        return data
    }

    displayResults = results.map((obj) => {
        this.getPlot(obj.imdbID).
            then((data) => plot = data.Plot).
            catch((err) => console.error(err))

        return (
            <MovieList Key={obj.imdbID} imKey={obj.imdbID} poster={obj.Poster} Title={obj.Title} Year={obj.Year} ShortPlot={plot} ShowMovie={() => this.props.nav('Movie', { imdbID: obj.imdbID })} />
        )
    })

    componentDidMount() {
        this.APIFetch().
            catch((err) => console.log(err))
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <Text style={styles.title}>API Fetch Component</Text>
                {this.displayResults}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 5,
        backgroundColor: '#fa575d',
        width: 350,
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        padding: 2,
        fontWeight: 'bold',
        fontSize: 20,
    },
})
