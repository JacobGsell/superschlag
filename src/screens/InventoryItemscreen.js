import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import { UserMock as UserMock } from '../mock/User'
import { AvatarMock } from '../mock/Avatar';
import { JobMock } from '../mock/Job';
import User from '../models/User';

const InventoryItemScreen = ({ route }) => {
    const { itemType, name } = route.params;
    return (
        <View style={{flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Item Type: {JSON.stringify(itemType)}</Text>
            <Text style={{ textAlign: 'center' }}>Name: {JSON.stringify(name)}</Text>
        </View>
    )
}

export default InventoryItemScreen;