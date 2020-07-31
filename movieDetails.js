import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const API_URL = 'http://www.omdbapi.com/?apikey=fda039b5&r=json&'
var MovieInfoList = []

export default class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'NO TITLE',
        }
        this.getContent()
        this.getArrayItem('Title')
    }

    getContent = async () => {
        var req = await fetch(API_URL + `i=${this.props.route.params.imdbID}&plot=full&`)
        var data = await req.json()
        MovieInfoList = Object.entries(data)
    }

    getArrayItem = (value) => {
        MovieInfoList.forEach(([key, item]) => {
            if (value === key) {
                console.log(item)
                this.setState({title: item})
                return false
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', fontSize: 20, }}>{this.state.title}</Text>
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
    movieTitle: {
        color: '#fa575d',
        fontSize: 40,
    },
    backBtn: {
        backgroundColor: '#fa575d',
        borderRadius: 5,
    },
    backTxt: {
        fontSize: 16,
        padding: 10,
    },
})
