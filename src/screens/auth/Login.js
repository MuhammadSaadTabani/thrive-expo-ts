import React, {useState} from 'react'
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import theme from '../../assets/colors';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Error from '../../components/common/Error';
import Heading from '../../components/common/Heading';
import IconInput from '../../components/common/IconInput';
import Logo from '../../components/common/Logo';
import { validateEmail } from '../../utils';
    
import AzureAuth from 'react-native-azure-auth';

const azureAuth = new AzureAuth({
    clientId: '17uoEtuihi6Lsg4hdedT7PUhF4FNgBPD2F'
});


export default ({navigation}) => {


    let emailRef, passRef;

    const [email, setEmail] = useState({
        value: "",
        inValid: false
    });
    const [password, setPassword] = useState({
        value: "",
        inValid: false
    });
    const [error, setError] = useState('');

    // const [activeInput, setActiveInput] = useState('');

    const onSigninPress = async () => {

    

        try {
            let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read Mail.Read' })
            // this.setState({ accessToken: tokens.accessToken });
            let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: '/me'})
            // this.setState({ user: info.displayName, userId: tokens.userId })

            console.log('info', info);
            console.log('token', tokens);

        } catch (error) {
            console.log(error)
        }

        // setError('')
        // if(!email.value){
        //     setEmail({...email, inValid: true});
        //     setError("Enter Valid Email and Password")
        //     return
        // }
        // if(!password.value){
        //     setPassword({...password, inValid: true})
        //     setError("Enter Valid Email and Password")
        //     return
        // }
        // if(!validateEmail(email.value)){
        //     setEmail({...email, inValid: true});
        //     setError("Enter Valid Email Address")
        //     return
        // }
        // if(email.value !== "user@gmail.com" && password.value !== "123"){
        //     setError("Invalid Email Address or Password")
        //     return
        // }else{
        //     setError('')
        //     setEmail({...email, inValid: false})
        //     setPassword({...password, inValid: false})
        // }
    }
    const onForgetPress = () => {
        navigation.navigate('ForgetPassword')
    }
    const onFindPress = () => {
        navigation.navigate('FindYourAccount')
    }

    return (
        <Container>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Logo/>
                <Heading
                    text={"Sign in to continue"}
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
                    inValid={email.inValid}
                    iconColor={email.inValid && theme.bordersColor.danger}
                />
                <IconInput
                    icon={'key'}
                    pass
                    value={password}
                    onChange={(text) => setPassword({...password, value: text})}
                    placeholder={"Password"}
                    inputRef={ref => passRef = ref}
                    inValid={password.inValid}
                    iconColor={password.inValid && theme.bordersColor.danger}
                />
                <Button
                    color={theme.buttonColors.green}
                    text={"Sign in"}
                    textColor={theme.textColors.whiteText}
                    onPress={() => navigation.navigate('MainRoutes')}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: heightPercentageToDP('3%')}}>
                    <Text onPress={onForgetPress} style={styles.text} >Forget your password?</Text>
                    <Text onPress={onFindPress} style={styles.text} >Find your account</Text>
                </View>
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