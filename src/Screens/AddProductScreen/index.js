import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../Theme/colors'
import { Dropdown } from 'react-native-element-dropdown';
import { launchImageLibrary } from 'react-native-image-picker'
import FastImage from 'react-native-fast-image'
import { H, W } from '../../Theme'
const AddProductScreen = (props) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('')
    const [productCategoryList, setProductCategoryList] = useState([]);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [imageProfile, setImageProfile] = useState()
    const [localImage, setLocalImage] = useState()

    useEffect(() => {
        getCategoryList()
    }, [])

    const getCategoryList = async () => {
        try {
            const apiResponse = await fetch('https://www.innopadsolutions.com/projects/androidapi/webservice/getCategory')
            const response = await apiResponse.json()
            console.log('RESPONSE DATA', response)
            if (response.code == 200) {
                setProductCategoryList(response.data)
            }
        }
        catch (e) {
            console.log('product is fetched', e)
        }
    }

    const onChangeImage = async () => {
        const selectedImage = await launchImageLibrary({ quality: 0.5, mediaType: 'photo', presentationStyle: 'fullScreen' })
        setImageProfile(selectedImage.assets[0].uri);
        setLocalImage(selectedImage.assets[0])
    }

    const onSubmitData = async () => {
        const { navigation } = props
        try {
            if (!imageProfile) {
                alert('Please add image')
                return
            }
            if (!productCategory) {
                alert('Please select product category')
                return
            }
            if (!productName) {
                alert('Please add product name')
                return
            }
            if (!productPrice) {
                alert('Please add product price')
                return
            }
            if (!productDescription) {
                alert('Please add product description')
                return
            }
            let formData = new FormData()
            formData.append('image', { name: localImage.fileName, uri: localImage.uri, type: localImage.type })
            formData.append('category_id', productCategory)
            formData.append('product_name', productName)
            formData.append('price', productPrice)
            formData.append('description', productDescription)
            console.log('FROM DATA', formData)
            const responseAPI = await fetch('https://www.innopadsolutions.com/projects/androidapi/webservice/AddProduct', {
                method: 'post',
                headers: {
                    "Content-Type": "multipart/form-data",
                }, body: formData
            })
            if (responseAPI.ok) {
                navigation.goBack();
            }
        }
        catch (e) {
            console.log('exception is generated', e)
        }
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.headerContainer]}>
                <Ionicons onPress={() => props.navigation.goBack()} name='chevron-back' color={colors.backgroundColor} size={30} />
                <Text style={[styles.headerTitle]}>Add Product</Text>
            </View>
            <View style={[styles.bodyContainer]}>
                {!localImage ?
                    <TouchableOpacity onPress={onChangeImage} style={[styles.imageContainer]}>
                        <Ionicons name='image-outline' size={60} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={onChangeImage} style={[styles.activeImageContainer]}>
                        <FastImage resizeMode='cover' source={{ uri: imageProfile }} style={[styles.fastImageContainer]} />
                    </TouchableOpacity>
                }
                <View style={[styles.productDetailContainer]}>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={productCategoryList}
                        search={false}
                        maxHeight={300}
                        labelField="category_name"
                        valueField="id"
                        placeholder={!isFocus ? 'Select Category' : '...'}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.id);
                            setIsFocus(false);
                            setProductCategory(item.id)
                        }}

                    />
                    <TextInput
                        style={[styles.textInputStyle]}
                        placeholder='Please enter product name'
                        onChangeText={(pName) => setProductName(pName)}
                        value={productName}
                    />
                    <TextInput
                        style={[styles.textInputStyle]}
                        placeholder='Please enter product price'
                        onChangeText={(pPrice) => setProductPrice(pPrice)}
                        value={productPrice}
                    />
                    <TextInput
                        style={[styles.textInputStyle, { maxHeight: H(100), height: H(80), textAlignVertical: 'top' }]}
                        placeholder='Please enter product description'
                        onChangeText={(pDesc) => setProductDescription(pDesc)}
                        value={productDescription}
                        multiline
                    />

                    <TouchableOpacity onPress={onSubmitData} style={[styles.loginButton]}>
                        <Text style={[styles.submitText]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AddProductScreen