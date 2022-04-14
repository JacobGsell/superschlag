import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator()
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Dashboard' component={DashboardScreen} />
                <Stack.Screen name="Home" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;