import React, { Component } from 'react'
import { Text, View, FlatList, TouchableHighlight, StyleSheet } from 'react-native'

// import components
import MovieRow from './movieRow.js'

const API_URL = 'https://www.omdbapi.com/?apikey=fda039b5&r=json&'

export default class Results extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: this.props.route.params.results,
            page: 2,
            reRender: false,
            totalPages: this.props.route.params.pageCount,
        }
    }

    emptyComponent = () => {
        return <Text style={styles.empty}>Sorry! We couldn't find results for '{this.props.route.params.search}'</Text>
    }

    sendInfo = (ID) => {
        fetch(API_URL + `i=${ID}&plot=full&`).
            then((res) => res.json()).
            then((data) => {
                if (data['Response'] === 'True') {
                    var SelectedMovie = [] // array to store info on the selected movie
                    SelectedMovie.push({
                        Poster: data.Poster,
                        Title: data.Title,
                        Year: data.Year,
                        Language: data.Language,
                        Actors: data.Actors,
                        Plot: data.Plot,
                        Country: data.Country,
                        Genre: data.Genre,
                        Production: data.Production,
                        Type: data.Type,
                        Metascore: data.Metascore,
                        imdbRating: data.imdbRating,
                    })
                    this.props.navigation.navigate('Movie', { Movie: SelectedMovie })
                } else {
                    console.log('request failed..')
                }
            }).
            catch((err) => console.error(err))
    }

    updateState = (newData) => {
        if (this.state.totalPages === 1 || newData.length === 0 || this.state.totalPages === this.state.page) {
            return
        } else {
            id = 0
            const UpdatedData = this.state.results.concat(newData)
            this.setState(prevState => ({
                results: [...UpdatedData],
                reRender: !prevState.reRender,
                page: (prevState.page + 1),
            }))
        }
    }

    renderExtraContent = () => {
        const search = this.props.route.params.search
        fetch(API_URL + `s=${search}&page=${this.state.page}`).
            then((res) => res.json()).
            then((data) => {
                if (data['Response'] === 'True') {
                    this.updateState(data['Search'])
                } else {
                    const empty = []
                    this.updateState(empty)
                }
            }).
            catch((err) => console.error(err))
    }

    renderItem = (data) => {
        return <MovieRow Key={data['item'].imdbID} {...data['item']} LookUpMovie={() => this.sendInfo(data['item'].imdbID)} />
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.title0}> Showing Search Results for '{this.props.route.params.search}'</Text>
                <FlatList style={styles.list} ListEmptyComponent={this.emptyComponent} data={this.state.results} renderItem={(item) => this.renderItem(item)} keyExtractor={(index) => index.imdbID.toString()} onEndReachedThreshold={0.4} onEndReached={this.renderExtraContent} extraData={this.state.reRender} />
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
    list: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#fa575d',
        width: 300,
        padding: 5,
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
    },
    empty: {
        color: '#f1f1f1',
        fontSize: 30,
        textAlign: 'center',
        padding: 10,
    },
})
