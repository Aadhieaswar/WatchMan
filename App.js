import React, { Component } from 'react';
import { StatusBar, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native' // important to use react navigation
import { createStackNavigator } from '@react-navigation/stack' // importing the stack navigator

// import screens to display
import Movie from './screens/movieDetails.js'
import Search from './screens/search.js'
import Result from './screens/result.js'

// use react navigation
const stack = createStackNavigator() // create a stack object

// function to render header image
function HeaderImage() {
  return(
    <Image style={{ height: 35, width: 35 }} source={require('./assets/play.png')} />
  );
}

export default class App extends Component {  // use the following method to use a stack navigator in react-native
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle='light-content' />
        <stack.Navigator initialRouteName={ Search }>
          <stack.Screen name="Search" component={ Search } options={header.head} />
          <stack.Screen name="Results" component={ Result } options={header.head} />
          <stack.Screen name="Movie" component={ Movie } options={{
            headerTitle: 'Watch Man',
            headerStyle: {
              backgroundColor: '#1d2124',
              height: 75,
              borderBottomWidth: 5,
              borderBottomColor: '#fa575d',
            },
            headerBackTitle: 'Back',
            headerTintColor: '#fa575d',
          }} />
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
    headerTitleStyle: {
      height: 50,
      marginBottom: 10,
      justifyContent: 'center',
      textAlign: 'center',
    },
    headerBackTitle: 'Back',
    headerTintColor: '#fa575d',
  },
}
