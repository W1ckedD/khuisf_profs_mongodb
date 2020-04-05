import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../global/styles';

const ServerError = () => {
    const error = 'خطا در برقراری ارتباط با سرور';
    return (
        <View style={styles.screen}>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
};

export default ServerError;
