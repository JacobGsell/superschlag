import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UserTextInput = () => {
    const [userName, onChangeText] =
        React.useState('');

    const [password, onChangePassword] =
        React.useState('');

    return (
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
    )
}

const styles = StyleSheet.create({
    input: {
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
});

export default UserTextInput;