import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, StyleSheet, Text, TextInput, Alert, TouchableOpacity, KeyboardAvoidingView, Image, Keyboard } from 'react-native'

var search = '' // global search variable to save the search text

export default class Search extends Component {

    getResult(data) {
        search = data.nativeEvent.text // value.nativeEvent.text to get the value of the TextInput
    }

    safeSearch = () => {
        if (search === '' || search === null) {
            Alert.alert(
                'Invalid Search',
                'Please enter a valid search text!',
                [
                    {
                        text: 'Ok', onPress: () => console.log('retrying search...')
                    },
                ],
                {
                    cancelable: false
                },
            )
        } else {
            this.props.navigation.navigate('Results', { search: search, })
        }
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
                            <TextInput placeholder='Search...' style={styles.input} onChange={(text) => this.getResult(text)}/>
                        <TouchableOpacity style={styles.backButton} onPress={this.safeSearch}>
                            <Text style={styles.btnTxt}>Search</Text>
                        </TouchableOpacity>
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
    }
})
