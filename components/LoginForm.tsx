import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import UserTextInput from './UserTextInput';

const LoginForm = () => {
    return (
        <View>
            <Text>Ich logge ein</Text>
            <View style={styles.base}>
                <UserTextInput></UserTextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base: {
        width: 300,
        height: 310,
        borderRadius: 18,
        shadowColor: '#333',
        shadowRadius: 3,
        backgroundColor: '#fff',
        elevation: 1,
        marginLeft: 'auto',
        marginRight: 'auto'
    }

})

export default LoginForm;