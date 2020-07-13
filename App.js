import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NavigationService from "./service/navigation";
import { AppLoading } from 'expo';
import profileScreen from "./screens/profileScreen.js";
import profileDetail from "./screens/profileDetail.js";
import bookYard from "./screens/bookYard.js";
import loginScreen from "./screens/loginScreen.js";
import bookingScreen from "./screens/bookingScreen.js";



import * as Font from 'expo-font';

const Container = createStackNavigator(
  {
    profileScreen: {
      screen: profileScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },

    bookYard: {
      screen: bookYard,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },

    profileDetail: {
      screen: profileDetail,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },

    loginScreen: {
      screen: loginScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },

    bookingScreen: {
      screen: bookingScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },

  },
  {
    initialRouteName: "bookingScreen",
  }
);

const AppContainer = createAppContainer(Container);

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  loadAsset = async () => {
    await Font.loadAsync({
      'lato-bold': require('./assets/fonts/lato-bold.ttf'),
      'lato-light': require('./assets/fonts/lato-light.ttf'),
      'lato-medium': require('./assets/fonts/lato-medium.ttf'),
      'lato-regular': require('./assets/fonts/lato-regular.ttf'),
    }
    )
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAsset}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )

    } else {
      return (
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      );
    }

  }

}

