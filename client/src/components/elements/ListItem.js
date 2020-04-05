import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const ListItem = props => {
    const { navigate } = useNavigation();
    return (
        <Card>
            <View style={styles.flexBox}>
                <Image style={styles.image} source={{ uri: props.imageUrl }} />
                <View>
                    <Button
                        style={styles.btn}
                        titleStyle={styles.btnTitle}
                        title="اطلاعات بیشتر"
                        onPress={() => navigate('Details', { id: props.id })}
                    />
                    <Button
                        style={styles.btn}
                        titleStyle={styles.btnTitle}
                        title="دانلود فایل"
                        onPress={() => navigate('Download', { id: props.id })}
                    />
                    <Button
                        style={styles.btn}
                        titleStyle={styles.btnTitle}
                        title="ارتباط با استاد"
                        onPress={() => Linking.openURL(`mailto:${props.email}`)}
                    />
                </View>
            </View>
            <Text style={styles.text}>
                {props.firstName} {props.lastName}
            </Text>
            <Text style={styles.text}>دانشکده: {props.faculty}</Text>
            <Text style={styles.text}>رشته تحصیلی: {props.major}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 160,
        alignSelf: 'center',
        borderRadius: 15
    },
    text: {
        fontFamily: 'samimBold',
        fontSize: 16
    },
    btn: {
        minWidth: 124,
        borderRadius: 8,
        paddingHorizontal: 8,
        margin: 4
    },
    btnTitle: {
        fontSize: 16
    },
    flexBox: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    }
});

export default ListItem;
