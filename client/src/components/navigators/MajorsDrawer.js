import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import BachelorsScreen from '../../screens/BachelorsScreen';
import FullTimeScreen from '../../screens/FullTimeScreen';
import InvitedScreen from '../../screens/InvitedScreen';
import MastersScreen from '../../screens/MastersScreen';
import PartTimeScreen from '../../screens/PartTimeScreen';
import RetiredScreen from '../../screens/RetiredScreen';
import ScholarshipScreen from '../../screens/ScholarshipScreen';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const CustomDrawer = props => {
    return (
            <DrawerContentScrollView {...props}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/logo.jpg')}
                />
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
    );
};

export default () => {
    return (
        <Drawer.Navigator
            drawerPosition="right"
            drawerContent={CustomDrawer}
            drawerContentOptions={{ labelStyle: styles.label }}
            backBehavior="initialRoute"
        >
            <Drawer.Screen
                name="FullTime"
                component={FullTimeScreen}
                options={{title: 'Tests', drawerLabel: 'هیات علمی تمام وقت' }}
            />
            <Drawer.Screen
                name="PartTime"
                component={PartTimeScreen}
                options={{ drawerLabel: 'هیات علمی نیمه وقت' }}
            />
            <Drawer.Screen
                name="Invited"
                component={InvitedScreen}
                options={{ drawerLabel: 'مدعو-حق التدریس' }}
            />
            <Drawer.Screen
                name="Scholarship"
                component={ScholarshipScreen}
                options={{ drawerLabel: 'بورسیه' }}
            />
            <Drawer.Screen
                name="Bachelors"
                component={BachelorsScreen}
                options={{ drawerLabel: 'کارشناس' }}
            />
            <Drawer.Screen
                name="Masters"
                component={MastersScreen}
                options={{ drawerLabel: 'کارشناس ارشد' }}
            />
            <Drawer.Screen
                name="Retired"
                component={RetiredScreen}
                options={{ drawerLabel: 'بازنشسته-انفصال از خدمت' }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 180,
        alignSelf: 'center'
    },
    label: {
        fontSize: 16,
        fontFamily: 'samimBold'
    }
});
