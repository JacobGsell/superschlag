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
                    style={styles.picker}
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
                spacing={2}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer]}>
                        <View style={styles.itemWrapper}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCode}>{item.code}</Text>
                        </View>
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
    title: {
        textAlign: 'center',
        marginBottom: 30
    },
    nameLabel: {
        textAlign: 'center'
    },
    jobLabel: {
        marginTop: 30,
        textAlign: 'center'
    },
    statsLabel: {
        marginTop: 30,
        textAlign: 'center'
    },
    nameInput: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%'
    },
    container: {
        paddingTop: 40,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        flex: 1
    },
    pickerContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#fff',
        width: '100%',
        borderWidth: 1,
        height: 'auto',
        borderColor: '#000',
    },
    picker: {
    },
    submitButton: {
        marginBottom: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        backgroundColor: '#fff',
        width: '70%',
        paddingVertical: 10,
        borderWidth: 1,
    },
    submitButtonText: {
        textAlign: 'center'
    },
    gridView: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    itemWrapper: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default AvatarCreationScreen;