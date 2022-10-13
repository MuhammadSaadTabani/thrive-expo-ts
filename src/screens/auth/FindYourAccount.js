import React, {useState} from 'react'
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import theme from '../../assets/colors';
import Button from '../../components/common/Button';
import CancelBack from '../../components/common/CancelBack';
import Container from '../../components/common/Container';
import Error from '../../components/common/Error';
import Heading from '../../components/common/Heading';
import IconInput from '../../components/common/IconInput';
import Logo from '../../components/common/Logo';
import { validateEmail } from '../../utils';

export default () => {


    let emailRef;

    const [email, setEmail] = useState({
        value: "",
        inValid: false, 
    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // const [activeInput, setActiveInput] = useState('');

    const onContinuePress = () => {
        if(!validateEmail(email.value)){
            setError("Invalid Email Address")
            return setEmail({...email, inValid: true})
        }
        setError('')
        setEmail({...email, inValid: false})
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            alert('Your email found')
        }, 2500)
    }
    

    return (
        <Container>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <CancelBack />
                <Logo/>
                <Heading
                    text={"Find Your Account"}
                />
                { error &&
                    <Error
                        text={error}
                    />
                }
                <IconInput
                    icon={'mail'}
                    value={email}
                    blur={false}
                    onChange={(text) => setEmail({...email, value: text})}
                    placeholder={"Email Address"}
                    keyboard={"email-address"}
                    inputRef={ref => emailRef = ref}
                    onSubmitPress={()=>passRef.focus()}
                    iconColor={email.inValid && theme.bordersColor.danger}
                />
               
                <Button
                    loading={loading}
                    color={theme.buttonColors.green}
                    text={"Continue"}
                    textColor={theme.textColors.whiteText}
                    onPress={onContinuePress}
                />
               
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: heightPercentageToDP('2%'),
        color: theme.primaryColor
    }
})