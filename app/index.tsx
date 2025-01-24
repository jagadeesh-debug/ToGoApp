import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./HomeScreen";
import Profile from "./profile_card";
import { AppRegistry } from "react-native";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
AppRegistry.registerComponent('ToGo', () => App);
