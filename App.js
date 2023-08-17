import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView ,Text} from 'react-native';
import MainNavigator from './src/navigator/MainNavigator';
// import { DataProvider } from './src/context/DataContext';
import {LogBox } from 'react-native';

export default function App() {
    LogBox.ignoreLogs(['Reanimated 2']);
    return (
        // <DataProvider>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <SafeAreaView style={styles.safeArea}>
                    <MainNavigator />
                </SafeAreaView>
            </View>
        // </DataProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
});
