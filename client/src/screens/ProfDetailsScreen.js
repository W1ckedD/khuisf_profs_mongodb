import React, { useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    ActivityIndicator,
    StyleSheet,
    Linking
} from 'react-native';
import ServerError from '../components/errors/ServerError';
import { styles } from '../../global/styles';
import { Context as ProfContext } from '../context/ProfContext';
import Card from '../components/elements/Card';
import Button from '../components/elements/Button';

const ProfDetailsScreen = ({ route, navigation }) => {
    const { state, getProfById } = useContext(ProfContext);
    const { prof, errorMessage } = state;
    const { id } = route.params;
    useEffect(() => {
        getProfById({ id });
    }, []);
    if (errorMessage) {
        return <ServerError />;
    }
    if (!prof) {
        return (
            <View style={styles.screen}>
                <ActivityIndicator color="gray" size="large" />
            </View>
        );
    }
    return (
        <View style={styles.screen}>
            <ScrollView>
                <Image
                    style={componentStyles.image}
                    source={{ uri: prof.imageUrl }}
                />

                <View
                    style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        style={componentStyles.btn}
                        titleStyle={componentStyles.btnTitle}
                        title="دانلود فایل"
                        onPress={() => navigation.navigate('Download', { id: prof._id })}
                    />
                    <Button
                        style={componentStyles.btn}
                        titleStyle={componentStyles.btnTitle}
                        title="ارتباط با استاد"
                        onPress={() => Linking.openURL(`mailto:${prof.email}`)}
                    />
                </View>
                <Card style={componentStyles.card}>
                    <View style={componentStyles.flexBox}>
                        <Text style={componentStyles.label}>نام: </Text>
                        <Text style={componentStyles.text}>
                            {prof.firstName}
                        </Text>
                    </View>
                    <View style={componentStyles.flexBox}>
                        <Text style={componentStyles.label}>
                            نام خانوادگی:{' '}
                        </Text>
                        <Text style={componentStyles.text}>
                            {prof.lastName}
                        </Text>
                    </View>
                    <View style={componentStyles.flexBox}>
                        <Text style={componentStyles.label}>ایمیل: </Text>
                        <Text style={componentStyles.text}>{prof.email}</Text>
                    </View>
                    <View style={componentStyles.flexBox}>
                        <Text style={componentStyles.label}>دانشکده: </Text>
                        <Text style={componentStyles.text}>
                            {prof.faculty}
                        </Text>
                    </View>
                        <Text style={componentStyles.label}>رشته تحصیلی: </Text>
                        <Text style={componentStyles.text}>
                            {prof.major}
                        </Text>
                    <View style={componentStyles.flexBox}>
                        <Text style={componentStyles.label}>نوع همکاری: </Text>
                        <Text style={componentStyles.text}>
                            {prof.position}
                        </Text>
                    </View>
                    <Text style={componentStyles.label}>زمینه تحقیقات: </Text>
                    <Text style={componentStyles.text}>
                        {prof.researchField}
                    </Text>
                    {prof.bio ? (
                        <View>
                            <Text style={componentStyles.label}>شرح حال: </Text>
                            <Text style={componentStyles.text}>{prof.bio}</Text>
                        </View>
                    ) : null}
                </Card>
            </ScrollView>
        </View>
    );
};

const componentStyles = StyleSheet.create({
    image: {
        width: 240,
        height: 300,
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 8
    },
    label: {
        fontFamily: 'samimBold',
        fontSize: 18
    },
    text: {
        fontFamily: 'samim',
        fontSize: 16,
        textAlign: 'right'
    },
    flexBox: {
        flexDirection: 'row-reverse',
        flex: 1
    },
    card: {
        elevation: 4
    },
    btn: {
        minWidth: 124,
        borderRadius: 8,
        paddingHorizontal: 8,
        margin: 4
    },
    btnTitle: {
        fontSize: 16
    }
});

export default ProfDetailsScreen;
