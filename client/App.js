import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Custom fonts
import * as Font from 'expo-font';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './src/components/navigators/ScreenStack';

// Context
import { Provider as ProfProvider } from './src/context/ProfContext';
const App = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        Font.loadAsync({
            samim: require('./assets/fonts/Samim.ttf'),
            samimBold: require('./assets/fonts/Samim-Bold.ttf')
        }).then(() => setFontLoaded(true));
    }, []);
    if (!fontLoaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <NavigationContainer>
            <ScreenStack />
        </NavigationContainer>
    );
};

export default () => {
    return (
        <ProfProvider>
            <App />
        </ProfProvider>
    );
};
