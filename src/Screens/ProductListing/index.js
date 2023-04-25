import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'
import ProductItem from './ProductItem'
import { H } from '../../Theme'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ProductListingScreen = (props) => {
    const user = useSelector(state => state.user.user)
    const [listingData, setListingData] = useState([])
    const [orderBy, setOrderBy] = useState('asc');

    useEffect(() => {
        getListing()
    }, [])

    const getListing = async () => {
        try {
            const response = await fetch('https://www.innopadsolutions.com/projects/androidapi/webservice/getProduct')
            const data = await response.json();
            if (data.code == 200) {
                const newData = data.data
                const updatedData = newData.sort((a, b) => a.product_id - b.product_id)
                setListingData(updatedData)
            }
        }
        catch (e) {
            console.log('exception is generated', e)
        }
    }

    const sortData = () => {
        let localData = [...listingData]
        if (orderBy == 'asc' || !orderBy) {
            localData.sort((a, b) => b.product_id - a.product_id)
            setOrderBy('desc')
        }
        else {
            localData.sort((a, b) => a.product_id - b.product_id)
            setOrderBy('asc')
        }
        console.log('local data', localData)
        setListingData(localData)
    }
    return (
        <View style={[styles.container]}>
            <View style={[styles.bodyContainer]}>
                <View style={[styles.headerContainer]}>
                    <Text style={[styles.headerText]}>Welcome, {user}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                    <Icon onPress={sortData} name='sort-alpha-up' size={20} />
                    <Icon onPress={() => props.navigation.navigate('AddProductScreen')} name='plus' size={20} />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: H(10) }}
                    ItemSeparatorComponent={() => <View style={{ marginTop: H(10) }} />}
                    data={listingData}
                    extraData={listingData}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item }) => <ProductItem item={item} />}
                />
            </View>

        </View>
    )
}

export default ProductListingScreen
