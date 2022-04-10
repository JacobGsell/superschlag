import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';


function LoginForm() {
    const [userName, onChangeText] =
        React.useState('');

    const [password, onChangePassword] =
        React.useState('');

    return (
        <View>
            <View style={styles.base}>
                <SafeAreaView>
                    <TextInput
                        style={[styles.first, styles.input]}
                        onChangeText={onChangeText}
                        value={userName}
                        placeholder='Benutzername' />

                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder='Passwort' />

                </SafeAreaView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base: {
        marginTop: 150,
        width: 300,
        height: 310,
        borderRadius: 18,
        shadowColor: '#333',
        shadowRadius: 3,
        backgroundColor: '#fff',
        elevation: 1,
        marginLeft: 'auto',
        marginRight: 'auto'
    }, input: {
        height: 40,
        width: 230,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 1,
        padding: 10,
        borderRadius: 14
    },
    first: {
        marginTop: 18,
        marginBottom: 18,
    }

})

export default LoginForm;