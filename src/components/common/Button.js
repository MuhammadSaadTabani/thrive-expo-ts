import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ActivityIndicator,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import { white } from '../../assets/colors';

export default ({onPress, color, text, textColor, image, style, loading}) => {
    return(
        <TouchableOpacity disabled={loading} onPress={onPress} style={[styles.container,{backgroundColor:color},style]}>
            {loading 
            ?
                <ActivityIndicator color={textColor || white} size="small" />
            :
            <>
                {image && <Image style={styles.image} source={image}/>}
                <Text style={[styles.text,{color: textColor}]}>{text}</Text>
            </>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:'100%',
        height:hp('6%'),
        marginTop:hp('2.5%'),
        borderRadius:hp('3%'),
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontFamily: fonts.regular ,
        fontSize:hp('2.2%'),
    },
    image:{
        height:hp('3%'),
        width:'7%',
        marginRight:hp('2%')
    }
})