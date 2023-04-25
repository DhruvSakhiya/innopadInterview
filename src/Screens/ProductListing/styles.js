import { StyleSheet } from 'react-native'
import { H, W } from '../../Theme'
import colors from '../../Theme/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    bodyContainer: {
        flex: 1,
        padding: 16
    },
    headerContainer: {
        alignItems: 'flex-end'
    },
    headerText: {
        fontSize: W(20),
        color: colors.black
    },
    cardContainer: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: colors.borderColor
    },
    cardBody: {
        marginTop: H(10)
    },
    phoneNameTitle: {
        fontSize: W(18),
        color: colors.black,
        fontWeight: '900'
    },
    productDetailText: {
        fontSize: W(12),
        color: colors.black,
        marginTop: H(2)
    },
    descriptionText: {
        color: colors.black,
        fontSize: W(12)
    },
    fastImage: {
        height: H(80),
        width: W(80)
    }
})