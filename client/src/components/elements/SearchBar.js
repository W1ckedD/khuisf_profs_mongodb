import React  from "react";
import { View, StyleSheet, TextInput, Dimensions, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";

const WIDTH = Dimensions.get("screen").width;

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <Feather
                name="search"
                color="#444"
                size={30}
                onPress={props.onPress}
            />
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
    container: {
        width: WIDTH - 64,
        backgroundColor: "#eee",
        elevation: 4,
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        fontFamily: "samim",
        fontSize: 18,
        textAlign: "right",
        width: '90%'
    },
    icon: {},
});

export default SearchBar;
