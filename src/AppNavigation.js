import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './screens/Dashboard';
import ShowBooks from './screens/ShowBooks';


const Stack = createStackNavigator(); 

export default class Appnavigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="DashBoard" component={DashBoard} />
                    <Stack.Screen name="Books" component={ShowBooks} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}