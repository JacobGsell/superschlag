import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FlatGrid } from 'react-native-super-grid';
import CustomButton from '../components/CustomButton';

const CreateAvatar = () => {
    console.log('erstelle avatar!');
}

const AvatarCreationScreen = () => {
    const [items, setItems] = React.useState([
        { name: 'Angriff', code: 10 },
        { name: 'Verteidigung', code: 5 },
        { name: 'Glück', code: 27 },
        { name: 'Ausweichen', code: 20 },
        { name: 'Leben', code: 15 },
    ]);

    const [selectedValue, setSelectedValue] = useState('');
    const [AvatarNameText, onChangeText] = React.useState('');

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.title}>
                Erstelle deinen Avatar!
            </Text>


            <Text style={styles.nameLabel}>
                Name deines Milchmanns
            </Text>

            <TextInput
                style={styles.nameInput}
                onChangeText={onChangeText}
                value={AvatarNameText}
            />

            <Text style={styles.jobLabel}>
                Wähle deine Klasse!
            </Text>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Ritter" value="0" />
                    <Picker.Item label="Milchmann" value="1" />
                    <Picker.Item label="Dieb" value="2" />
                </Picker>
            </View>

            <Text style={styles.statsLabel}>
                Statuswerte
            </Text>

            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.code}</Text>
                    </View>
                )}
            />
            <CustomButton
                title='Erstellen'
                onPress={CreateAvatar}
                style={styles.submitButton}
                textStyle={styles.submitButtonText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    nameInput: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    container: {
        paddingTop: 40,
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000'
    },
    submitButton: {
        backgroundColor: '#fff',
        width: '70%',
        paddingVertical: 10,
        borderWidth: 1,
    },
    submitButtonText: {
        textAlign: 'center'
    }
});

export default AvatarCreationScreen;