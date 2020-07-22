import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const hp = Dimensions.get("screen").height;
const wp = Dimensions.get("screen").width;

import Login from "./screens/loginScreen";
import Home from "./screens/Home";
import Coupon from "./screens/Coupon";
import History from "./screens/History";
import HistoryDetail from "./screens/HistoryDetail";
import SearchBox from "./screens/SearchBox";
import BookingScreen from "./screens/bookingScreen";
import BookingYard from "./screens/bookYard";
import BookingSuccess from "./screens/bookSuccess"
import ProfileDetail from "./screens/profileDetail"
import Profile from "./screens/profileScreen"

const stack = createSharedElementStackNavigator();
const Tab = createBottomTabNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    CerealBook: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    CerealMedium: require("./assets/fonts/IBMPlexSans-Medium.ttf"),
  });
};

export default function App() {
  const [dataloaded, setDataLoaded] = useState(false);
  if (!dataloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  // function createHistoryStack() {
  //   return (
  //     <stack.Navigator>
  //       <stack.Screen name="History" component={History} />
  //       <stack.Screen name="HistoryDetail" component={HistoryDetail} />
  //     </stack.Navigator>
  //   );
  // }

  function HomeTab() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <AntDesign name="home" size={hp * 0.032} color={color} />;
            } else if (route.name === "Sale") {
              return <FontAwesome name="tag" size={hp * 0.03} color={color} />;
            } else if (route.name === "Me") {
              return (
                <FontAwesome name="user-o" size={hp * 0.03} color={color} />
              );
            } else if (route.name === "History") {
              return (
                <MaterialIcons name="history" size={hp * 0.032} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "green",
          inactiveTintColor: "gray",
          style: {
            height: hp * 0.07,
          },
          allowFontScaling: true,
          labelStyle: {
            fontSize: hp * 0.015,
            paddingBottom: hp * 0.005,
          },
          iconStyle: {
            paddingTop: hp * 0.0002,
            paddingBottom: hp * 0.0002,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Sale" component={Coupon} />
        <Tab.Screen name="Me" component={Profile} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="HomeTab"
        // screenOptions={{ headerShown: false }}
      >
        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Search"
          component={SearchBox}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="HistoryDetail"
          component={HistoryDetail}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="BookingScreen"
          component={BookingScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="BookingYard"
          component={BookingYard}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="BookingSuccess"
          component={BookingSuccess}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="ProfileDetail"
          component={ProfileDetail}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
