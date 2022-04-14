import * as React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

function LoginForm() {
    const navigation = useNavigation();
    const [userName, onChangeText] =
        React.useState('');

    const [password, onChangePassword] =
        React.useState('');

    const login = () => { navigation.navigate('Dashboard')}
    const register = () => { console.log('register') }

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

                    <CustomButton
                        title='Login'
                        style={styles.login}
                        textStyle={styles.loginText}
                        onPress={login}
                    />

                    <CustomButton
                        title='Registrieren'
                        style={styles.register}
                        textStyle={styles.registerText}
                        onPress={register}
                    />
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
    },
    login: {
        marginTop: 19,
        width: 230,
        height: 40,
        borderRadius: 14,
        shadowColor: '#333',
        shadowRadius: 3,
        backgroundColor: '#0075ff',
        elevation: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center'
    },
    loginText: {
        color: '#fff',
        textAlign: 'center'
    },
    register: {
        marginTop: 19,
        width: 230,
        height: 40,
        borderRadius: 14,
        shadowColor: '#333',
        shadowRadius: 3,
        backgroundColor: '#fff',
        borderColor: '#0075ff',
        borderWidth: 2,
        elevation: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center'
    },
    registerText: {
        color: '#0075ff',
        textAlign: 'center'
    }
})

export default LoginForm;