import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import FastImage from 'react-native-fast-image'

const ProductItem = ({ item }) => {
    console.log('ITEM', item.product_image)
    return (
        <View style={[styles.cardContainer]}>
            <FastImage source={{ uri: item.product_image }}
                style={[styles.fastImage]}
                resizeMode='contain'
            />
            <View style={[styles.cardBody]}>
                <Text style={[styles.phoneNameTitle]}>{item.product_name}</Text>
                <Text style={[styles.productDetailText]}>Product Category: <Text style={{ fontWeight: 'bold' }}>{item.product_name}</Text></Text>
                <Text style={[styles.productDetailText]}>Product Price: <Text style={{ fontWeight: 'bold' }}>{item.product_price}</Text></Text>
                <Text style={[styles.productDetailText]}>Description</Text>
                <Text style={[styles.descriptionText]} numberOfLines={4}>{item.description}</Text>
            </View>
        </View>
    )
}

export default ProductItem