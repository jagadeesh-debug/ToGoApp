import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./HomeScreen";
import Profile from "./profile_card"
import { AppRegistry } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "@/components/login";
import Signup from "@/components/signup";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

function ToGo() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

AppRegistry.registerComponent('ToGo', () =>ToGo);