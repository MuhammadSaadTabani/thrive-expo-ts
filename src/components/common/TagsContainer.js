import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import fonts from '../../assets/fonts'
import theme from '../../assets/colors'

const TagsContainer = ({tags}) => {
    const [selectedTags, setSelectedTags] = useState(['All']);
    
    const selectTag = (tag) => {
        setSelectedTags(oldTags => [...oldTags, tag])
    }
    const unselectTag = (tag) => {
        setSelectedTags(() => {
            return selectedTags.filter(currentTag => tag !== currentTag)
        })
    }
  return (
    <View style={styles.tagsContainer}>
        {
            tags.map((tag, index) => {
                if(selectedTags.includes(tag)){
                    return <Text key={index} onPress={() => unselectTag(tag)} style={styles.selectedTag}>{tag}</Text>
                }else {
                    return <Text key={index} onPress={() => selectTag(tag)} style={styles.tag}>{tag}</Text>
                }
                 
            })
        }
    </View>
  )
}

export default TagsContainer

const styles = StyleSheet.create({
    tagsContainer: {
        width: "100%",
        alignSelf:'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    tag: {
        fontFamily: fonts.regular,
        color: theme.primaryColor,
        fontSize: wp('4%'),
        paddingHorizontal: 14,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: theme.primaryColor,
        borderRadius: 50,
        margin: 3
    },
    selectedTag: {
        fontFamily: fonts.regular,
        color: "white",
        backgroundColor: theme.primaryColor,
        fontSize: wp('4%'),
        paddingHorizontal: 14,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: theme.primaryColor,
        borderRadius: 50,
        margin: 3
    }
})