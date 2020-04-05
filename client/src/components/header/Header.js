import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity as TO } from 'react-native';
import { PRIMARY_COLOR } from '../../../global/colors';
import { Feather } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

const Header = props => {
    return (
        <View
            style={
                props.mainScreen
                    ? styles.header
                    : { ...styles.header, justifyContent: 'center' }
            }
        >
            <View></View>
            <Text style={styles.title}>سامانه اساتید</Text>
            {props.mainScreen ? (
                <TO
                    onPress={() =>
                        props.navigation.dispatch(DrawerActions.toggleDrawer())
                    }
                    activeOpacity={0.8}
                >
                    <Feather name="menu" size={30} color="white" />
                </TO>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 16,
        width: '100%',
        height: 120,
        backgroundColor: PRIMARY_COLOR,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'samim',
        fontSize: 24,
        color: 'white',
    }
});

export default Header;
