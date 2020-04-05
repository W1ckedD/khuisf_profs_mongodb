import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Keyboard } from 'react-native';

const WIDTH = Dimensions.get('screen').width;

const Input = props => {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.label, ...props.style }}>
                {props.label}
            </Text>
            <TextInput
                style={{ ...styles.input, ...props.style }}
                value={props.value}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                autoCapitalize={props.autoCapitalize}
                placeholder={props.placeholder}
                onBlur={() => Keyboard.dismiss()}
                onEndEditing={() => Keyboard.dismiss()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: WIDTH - 32,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        fontFamily: 'samim',
        fontSize: 18,
        padding: 8,
        textAlign: 'right'
    },
    label: {
        fontSize: 16,
        fontFamily: 'samim',
        padding: 8,
        marginBottom: 4
    }
});

export default Input;