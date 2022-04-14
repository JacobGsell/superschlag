import React from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';



function CustomButton(props: any) {
    return (
        <TouchableOpacity
            style={props.style}
            onPress={props.onPress}
        >
            <Text style={props.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontWeight: '400',
        textAlign: 'center',
        fontSize: 17
    }
})

export default CustomButton;