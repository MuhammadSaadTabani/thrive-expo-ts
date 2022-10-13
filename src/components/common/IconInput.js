import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme, { black, darkGray } from '../../assets/colors';

const IconInput = ({style, inValid, inputStyle, onChange, value, iconColor, icon, placeholder, inputRef, onSubmitPress, blur,pass, keyboard, phone, ...props}) => {
    
    const input = useRef(null);
    const [visible, setVisible]  = useState(true);
    
     return(
        <View style={[styles.inputRow,style, inValid && {borderColor: theme.bordersColor.danger}]}>
            {phone &&
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {/* <Image style={styles.imageStyle} source={require('../../assets/images/pk.jpg')} /> */}
                    <TextInput
                        {...props}
                        style={[styles.input,{flex:0}]}
                        editable={false}
                        placeholder={" +92"}
                        placeholderTextColor={black}
                    />
                </View>
            }
            <TextInput
                {...props}
                autoCapitalize="sentences"
                blurOnSubmit={blur}
                onChangeText={onChange}
                value={value}
                style={[styles.input,inputStyle]}
                placeholder={placeholder}
                placeholderTextColor={darkGray}
                ref={inputRef}
                onSubmitEditing={onSubmitPress}
                secureTextEntry={pass ? visible : !visible}
                keyboardType={keyboard ? keyboard : "default"}
            />
            {pass
                ?
                value == ""
                    ?<Icon name={icon} size={22} color={iconColor || theme.iconsColor.primaryIcon} />
                    :<Icon onPress={()=>setVisible(!visible)} name={visible ? 'eye' : 'eye-off'} size={22} color={iconColor || theme.iconsColor.primaryIcon} />
                :
                icon &&
                <Icon name={icon} size={22} color={iconColor || theme.iconsColor.primaryIcon} />
            }
        </View>
    )
}

export default IconInput

const styles = StyleSheet.create({
    inputRow:{
        flexDirection:"row",
        alignItems:'center',
        paddingLeft:hp('1.5%'),
        paddingRight:hp('1.5%'),
        width:'100%',
        height:hp('6.5%'),
        backgroundColor:'white',
        borderRadius:hp('1%'),
        marginTop:hp('2.5%'),
        borderWidth: 1.5,
        borderColor: theme.bordersColor.primaryBorder
    },
    input:{
        flex:1,
        fontSize:hp('2.25%'),
        color:"black",
    },
    imageStyle:{
        height:hp('3.5%'),
        width:hp('5%'),
    }
})