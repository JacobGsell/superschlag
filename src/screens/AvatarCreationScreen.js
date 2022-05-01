import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FlatGrid } from 'react-native-super-grid';
import CustomButton from '../components/CustomButton';
import { JobMocks } from '../mock/Job';
import axios from 'axios';

const AvatarCreationScreen = () => {
    const [items, setItems] = React.useState([
        { name: 'Angriff', code: 10 },
        { name: 'Verteidigung', code: 5 },
        { name: 'Glück', code: 27 },
        { name: 'Ausweichen', code: 20 },
        { name: 'Leben', code: 15 },
    ]);

    const [selectedValue, setSelectedValue] = React.useState('');
    const [AvatarNameText, onChangeText] = React.useState('');

    const createPickerItems = (jobs) => {
        return jobs.map((job, index) => {
            return <Picker.Item label={job.name} value={index}/>
        })
    }

    function CreateAvatar(selectedValue) {

        const selectedJob = JobMocks[selectedValue]

        const newAvatar = {
            name: AvatarNameText,
            jobId: selectedJob.id
        }
    }

    let selectedJob = JobMocks[0];

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

            <View style={styles.nameInputWrapper}>
                <TextInput
                    style={styles.nameInput}
                    onChangeText={onChangeText}
                    value={AvatarNameText}
                />
            </View>

            <Text style={styles.jobLabel}>
                Wähle deine Klasse!
            </Text>

            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => {

                        selectedJob = JobMocks[itemValue]

                        // let response = axios('http://192.168.2.49:8080/avatar/8')
                        // .then(response => {
                        //     console.log(response.data.jobDto.statsDto)
                        //     const jobStats = response.data.jobDto.statsDto

                        //     setItems(Object.entries(jobStats))
                        // })



                        setItems(Object.entries(selectedJob.stats))
                        setSelectedValue(itemValue)
                    }}
                >

                    {createPickerItems(JobMocks)}
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
                            <Text style={styles.itemName}>{item[0]}:
                                <Text style={{ fontWeight: 'bold' }}> {item[1]}</Text>
                            </Text>
                        </View>
                    </View>
                )}
            />
            <CustomButton
                title='Erstellen'
                onPress={() => CreateAvatar(selectedValue)}
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
        marginBottom: 10,
        textAlign: 'center'
    },
    nameInputWrapper: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        textAlign: 'left'
    },
    nameInput: {
        marginLeft: 8
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
        marginVertical: 10,
        borderBottomWidth: 1
    }
});

export default AvatarCreationScreen;