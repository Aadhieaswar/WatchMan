import React from 'react';
import { StatusBar, Image } from 'react-native'
import 'react-native-gesture-handler' // needed to use react navigation
import { NavigationContainer } from '@react-navigation/native' // important to use react navigation
import { createStackNavigator } from '@react-navigation/stack' // importing the stack navigator

// import components
import Movie from './movieDetails.js'
import Search from './search.js'
import Result from './result.js'

// use react navigation
const stack = createStackNavigator() // create a stack object

// function to render header image
function HeaderImage() {
    return(
        <Image style={{ height: 30, width: 30 }} source={require('./assets/play.png')} />
    )
}

export default class App extends React.Component {  // use the following method to use a stack navigator in react-native
    render() {
        return (
            <NavigationContainer>
                <StatusBar barStyle='light-content' />
                <stack.Navigator initialRouteName={ Search }>
                    <stack.Screen name="Search" component={ Search } options={header.head} />
                    <stack.Screen name="Results" component={ Result } options={header.head} />
                    <stack.Screen name="Movie" component={ Movie } options={header.head} />
                </stack.Navigator>
            </NavigationContainer>
        );
    }
}

// header styles
const header = {
    head: {
        headerTitle: <HeaderImage />,
        headerStyle: {
            backgroundColor: '#1d2124',
            height: 75,
            borderBottomWidth: 5,
            borderBottomColor: '#fa575d',
        },
        headerBackTitle: 'Back',
        headerTintColor: '#fa575d',
    },
}
