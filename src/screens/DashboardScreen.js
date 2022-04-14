import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CustomButton from '../components/CustomButton';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Stock',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Fahrradhelm',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Heftklammer',
    },
    {
        id: '58694a0f-2da1-471f-bd96-145571e29d72',
        title: 'Rucksack',
    },
];

const InventorySlotListItem = ({ title }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listText}>{title}</Text>
        </View>
    )
}

const renderItem = ({ item }) => (
    <InventorySlotListItem title={item.title} />
);


const DashboardScreen = () => {
    const navigation = useNavigation();

    return (

        <View style={styles.base}>
            <View style={styles.circle}>
                <Text style={{ textAlign: 'center' }}> Profilbild</Text>
            </View>

            <CustomButton
                title='Auf Knüppeln!'
                style={styles.fight}
                textStyle={styles.fightText}
                onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.listContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base: {
    },
    circle: {
        marginTop: 67,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000',
        width: 150,
        height: 150,
        borderRadius: 75
    },
    fight: {
        marginTop: 30,
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
    fightText: {
        color: '#fff',
        textAlign: 'center'
    },
    listContainer: {
        width: 170,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center'
    },
    listItem: {
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#777'
    },
    listText: {
        textAlign: 'center'
    }
})

export default DashboardScreen;