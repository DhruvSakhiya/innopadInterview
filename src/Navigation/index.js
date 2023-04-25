import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { W } from '../Theme'
import LoginScreen from '../Screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductListingScreen from '../Screens/ProductListing';
import { useSelector } from 'react-redux';
import AddProductScreen from '../Screens/AddProductScreen';


const Stack = createStackNavigator();
const Navigation = () => {
    const user = useSelector(state => state.user.user)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
                {!user ?
                    <Stack.Screen name='LoginScreen' component={LoginScreen} />
                    :
                    <>
                        <Stack.Screen name='ProductListingScreen' component={ProductListingScreen} />
                        <Stack.Screen name='AddProductScreen' component={AddProductScreen} />
                    </>
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
