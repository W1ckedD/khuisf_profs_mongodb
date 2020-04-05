import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('screen').width;

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: WIDTH - 64,
        backgroundColor: 'white',
        elevation: 15,
        padding: 16,
        margin: 16,
        borderRadius: 16
    }
});

export default Card;
