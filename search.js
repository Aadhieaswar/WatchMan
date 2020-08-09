import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Keyboard } from 'react-native'

var search = '' // global search variable to save the search text
const API_URL = 'https://www.omdbapi.com/?apikey=fda039b5&r=json&'
var results = [] // variable to store the result objects in
var pageCount = 1 // get the total page numbers

export default class Search extends Component {

    state = {
        err: '',
    }

    async getResult(data) {
        search = data
        return fetch(API_URL + `s=${search}&`).
            then((req) => req.json()).
            then((json) => this.addToArray(json)).
            catch((err) => console.error(err))
    }

    safeSearch = () => {
        if (search.length < 3) {
            this.setState({err: '⚠ Please Enter at least 3 characters to search for movies'})
            return
        } else {
            this.setState({err: ''})
            Keyboard.dismiss()
            return this.props.navigation.push('Results', { results: results, search: search, pageCount: pageCount})
        }
    }

    addToArray = (data) => {
        results = []
        if (data['Response'] === 'False') {
            var objects = []
            return false
        } else {
            const objs = data['Search']
            pageCount = Math.ceil(data['totalResults'] / 10) // get total number of results
            var objects = objs.map((item) => {
                results.push(item)
            })
        }
        return objects
    }


    render() {
        return(
            <KeyboardAvoidingView behavior='position' style={styles.wrapper}>
                {/* using images as static files */}
                <Image source={require('./assets/Movies_Logo.png')} style={styles.logo}/>
                <TouchableWithoutFeedback Style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Text style={styles.sText}>
                            Search for Movies
                        </Text>
                            <TextInput placeholder='Search...' style={styles.input} onChangeText={(text) => this.getResult(text)}/>
                        <TouchableOpacity style={styles.backButton} onPress={this.safeSearch}>
                            <Text style={styles.btnTxt}>Search</Text>
                        </TouchableOpacity>
                        <Text style={styles.error}>{this.state.err}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2124',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d2124',
        width: 400,
    },
    logo: {
        height: 60,
        width: 350,
        padding: 5,
        marginTop: 75,
        alignSelf: 'center',
    },
    sText: {
        textAlign: 'center',
        padding: 20,
        color: '#fa575d',
        fontSize: 20,
    },
    input: {
        borderColor: '#f1f1f1',
        borderWidth: 3,
        borderRadius: 5,
        width: 200,
        fontSize: 16,
        height: 40,
        padding: 10,
        backgroundColor: 'white',
    },
    btnTxt: {
        color: 'white',
        fontSize: 16,
        padding: 10,
    },
    backButton: {
        backgroundColor: '#fa575d',
        borderRadius: 5,
        marginTop: 5,
    },
    error: {
        color: 'red',
        padding: 5,
        fontSize: 14,
        marginTop: 20,
    },
})
