import React, { useEffect, useContext } from 'react';
import { View, Text, FlatList, Linking, StyleSheet, Dimensions } from 'react-native';
import { Context as ProfContext } from '../context/ProfContext';
import ServerError from '../components/errors/ServerError';
import { styles } from '../../global/styles';
import Button from '../components/elements/Button';

const WIDTH = Dimensions.get('screen').width;

const DownloadFileScreen = ({ route }) => {
    const { id } = route.params;
    const { state, getDownloadListById } = useContext(ProfContext);
    const { downloadList, errorMessage } = state;
    useEffect(() => {
        getDownloadListById({ id });
    }, []);
    if (errorMessage) {
        return <ServerError />;
    }
    if (downloadList.length === 0) {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>موردی یافت نشد!</Text>
            </View>
        );
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>دانلود فایل</Text>
            <FlatList
                keyExtractor={item => item._id}
                data={downloadList}
                renderItem={({ item }) => (
                    <View style={componentStyles.listItem}>
                        <Text style={componentStyles.text}>{item.title}</Text>
                        <Button
                            title="دانلود"
                            onPress={() => Linking.openURL(item.url)}
                            style={componentStyles.btn}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const componentStyles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 8,
        margin: 8,
        width: WIDTH - 48,
        justifyContent: 'space-between'
    },
    btn: {
        minWidth: 80
    }, text : {
        alignSelf: 'center',
        fontFamily: 'samimBold',
        fontSize: 18
    }
});

export default DownloadFileScreen;
