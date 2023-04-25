import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import images from '../../Theme/images';
import { StackActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../Redux/reducers/userReducer';

const LoginScreen = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch()

    const onLoginPress = () => {
        if (!userEmail) {
            alert('Please enter email address or user name')
            return
        }
        if (!userPassword) {
            alert('Please enter password')
            return
        }
        if ((userEmail == 'Jyoti' || userEmail == 'jyoti@gmail.com') && userPassword == 'Jyoti@123') {
            const { navigation } = props
            dispatch({ type: SET_USER, payload: { user: userEmail } })
            navigation.dispatch(StackActions.replace('ProductListingScreen'))
        }
        else {
            alert('Password or user detail is incorrect')
        }
    }
    return (
        <View style={[styles.container]}>
            <View style={[styles.bodyContainer]}>
                <Text style={[styles.loginText]}>Login</Text>
                <View style={[styles.loginContentContainer]}>
                    <Image source={images.signupBanner} style={[styles.imageContainer]} />
                    <TextInput
                        style={[styles.textInputStyle]}
                        placeholder='Please enter email address or username'
                        onChangeText={(user) => setUserEmail(user)}
                        value={userEmail}
                    />
                    <TextInput
                        style={[styles.textInputStyle]}
                        placeholder='Please enter password'
                        onChangeText={(pwd) => setUserPassword(pwd)}
                        value={userPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity onPress={onLoginPress} style={[styles.loginButton]}>
                        <Text style={[styles.submitText]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen