import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./HomeScreen";
import Profile from "./profile_card"
import { AppRegistry } from "react-native";
import Login from "@/components/login";
import Signup from "@/components/signup";
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Profile">
            <Tab.Screen name="sign" component={Login} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
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