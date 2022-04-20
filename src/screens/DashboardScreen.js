import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import { UserMock as UserMock } from '../mock/User'
import { AvatarMock } from '../mock/Avatar';
import { JobMock } from '../mock/Job';
import User from '../models/User';

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
    }
];

const InventorySlotListItem = ({ item }) => {
    const navigation = useNavigation();

    return (

        <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name} </Text>
            <Text onPress={() => {
                navigation.navigate('InventoryItem', {
                    name: item.name,
                    itemType: item.itemType
                }),
                console.log(item.itemType)
            }}
                style={styles.listIcon}>{'>>'}</Text>
        </View>
    )
}

const renderItem = ({ item }) => (
    <InventorySlotListItem item={item} />
);


const DashboardScreen = () => {
    const navigation = useNavigation();
    const user = UserMock;
    const avatar = AvatarMock

    return (

        <View style={styles.base}>
            <View style={styles.circle}>
                <Text style={{ textAlign: 'center' }}> Profilbild</Text>
            </View>

            <View style={styles.userName}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>{AvatarMock.name} | {JobMock.name}</Text>
            </View>

            <CustomButton
                title='Auf Knüppeln!'
                style={styles.fight}
                textStyle={styles.fightText}
                onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.listContainer}>
                <FlatList
                    data={AvatarMock.equipped}
                    renderItem={renderItem}
                    keyExtractor={item => item.itemType}
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
        marginTop: 40,
        width: 230,
        height: 40,
        borderRadius: 14,
        shadowColor: '#333',
        borderWidth: 1,
        borderColor: '#000',
        shadowRadius: 3,
        backgroundColor: '#fff',
        elevation: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center'
    },
    fightText: {
        color: '#000',
        textAlign: 'center'
    },
    listContainer: {
        width: 230,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center'
    },
    listItem: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listText: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#777',
    },
    listIcon: {
        width: '10%',
        height: '100%',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#000',
        color: '#fff',
    },
    userName: {
        marginTop: 13,
        justifyContent: 'center',
    }
})

export default DashboardScreen;