import React from 'react';
import MajorsDrawer from './MajorsDrawer';
import { createStackNavigator } from '@react-navigation/stack';
import ProfDetailsScreen from '../../screens/ProfDetailsScreen';
import DownloadFileScreen from '../../screens/DownloadFileScreen';
import Header from '../header/Header';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: props => <Header mainScreen={true} {...props} />
            }}
        >
            <Stack.Screen name="Drawer" component={MajorsDrawer} />
            <Stack.Screen
                name="Details"
                component={ProfDetailsScreen}
                options={{ header: () => <Header /> }}
            />
            <Stack.Screen
                name="Download"
                component={DownloadFileScreen}
                options={{ header: () => <Header /> }}
            />
        </Stack.Navigator>
    );
};
