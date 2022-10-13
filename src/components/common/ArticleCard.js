import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ArticleCard = ({source, onPress}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Image source={source} />
        </TouchableOpacity>
    </View>
  )
}

export default ArticleCard

const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        alignSelf: 'center'
    }
})
