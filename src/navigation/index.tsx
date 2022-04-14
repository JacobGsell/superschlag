import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator()
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={LoginScreen} />
                <Stack.Screen name='Dashboard' component={DashboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;