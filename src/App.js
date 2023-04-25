import 'react-native-gesture-handler';
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './Redux/store';


import React from 'react'
import Navigation from './Navigation';

const App = () => {
    return (
        <StoreProvider store={store}>
            <PersistGate persistor={persistor}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                    <StatusBar barStyle='light-content' />
                    <Navigation />
                </SafeAreaView>
            </PersistGate>
        </StoreProvider>
    )
}

export default App