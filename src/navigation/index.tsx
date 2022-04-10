import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'

function HomeScreen() {
    return (
            <Text> Home Screen </Text>
    )
}

const Stack = createNativeStackNavigator()
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;