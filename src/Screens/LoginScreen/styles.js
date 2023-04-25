import { StyleSheet } from 'react-native'
import { H, W } from '../../Theme'
import colors from '../../Theme/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    loginText: {
        fontSize: W(18),
        color: colors.black
    },
    bodyContainer: {
        flex: 1,
        padding: 16
    },
    textInputStyle: {
        height: H(50),
        borderWidth: 1,
        marginTop: H(20),
        borderColor: colors.borderColor,
        borderRadius: 6,
        paddingLeft: W(10),
        fontSize: W(14),
        color: colors.black
    },
    loginContentContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        height: H(200),
        width: W(200),
        alignSelf: 'center'
    },
    loginButton: {
        backgroundColor: colors.denim,
        marginTop: H(40),
        paddingVertical: H(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    submitText: {
        fontSize: W(16),
        color: colors.backgroundColor
    }
})