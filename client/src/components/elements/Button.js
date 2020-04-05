import React from 'react';
import { Text, TouchableOpacity as TO, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../../global/colors';

const Button = props => {
    return (
        <TO
            activeOpacity={0.7}
            style={{ ...styles.btn, ...props.style }}
            onPress={props.onPress}
        >
            <Text style={{ ...styles.title, ...props.titleStyle }}>
                {props.title}
            </Text>
        </TO>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'samimBold',
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        borderRadius: 15
    },
    btn: {
        padding: 4,
        margin: 16,
        minWidth: 180,
        backgroundColor: PRIMARY_COLOR
    }
});

export default Button;
