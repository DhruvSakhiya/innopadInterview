import { StyleSheet } from 'react-native'
import { H, W } from '../../Theme'
import colors from '../../Theme/colors'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    headerContainer: {
        height: H(60),
        backgroundColor: colors.lightPeriwinkle,
        paddingLeft: W(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: W(18),
        fontWeight: 'bold',
        color: colors.backgroundColor
    },
    bodyContainer: {
        flex: 1,
        // backgroundColor: 'red',
    },
    imageContainer: {
        alignSelf: 'center',
        padding: 20,
        backgroundColor: colors.borderColor,
        marginVertical: H(50),
        borderRadius: 100,
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
    productDetailContainer: {
        paddingHorizontal: W(16)
    },
    loginButton: {
        backgroundColor: colors.denim,
        marginTop: H(40),
        paddingVertical: H(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    submitText: {
        fontSize: W(15),
        color: colors.backgroundColor
    },
    dropdown: {
        height: H(50),
        borderColor: colors.borderColor,
        borderRadius: 6,
        paddingHorizontal: W(10),
        borderWidth: 1
    },
    placeholderStyle: {
        fontSize: W(14),
    },
    selectedTextStyle: {
        fontSize: W(14),
    },
    activeImageContainer: {
        alignSelf: 'center',
        marginVertical: H(50),
    },
    fastImageContainer: {
        height: H(80),
        width: H(80),
        borderRadius: H(40),
        borderWidth: 2,
        borderColor: colors.lightPeriwinkle
    }
})