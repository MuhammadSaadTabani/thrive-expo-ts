import React, {useCallback, useContext, useEffect, useState} from 'react'
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import theme from '../../assets/colors';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Error from '../../components/common/Error';
import Heading from '../../components/common/Heading';
import IconInput from '../../components/common/IconInput';
import Logo from '../../components/common/Logo';
import { RouteNames } from '../../routes/navTypes';
import { useToken } from "ad-b2c-react-native";
import { validateEmail } from '../../utils';
import { useFocusEffect, useNavigationState } from '@react-navigation/native';
import { setItem } from '../../storage';
import { AuthContext } from '../../context';
    
export default ({navigation}) => {


    // let emailRef, passRef;

    // const [email, setEmail] = useState({
    //     value: "",
    //     inValid: false
    // });
    // const [password, setPassword] = useState({
    //     value: "",
    //     inValid: false
    // });
    // const [error, setError] = useState('');

    // const [activeInput, setActiveInput] = useState('');

    const { getTokensAsync, isLoading, error, isAuthentic } = useToken();

    const [newUrl, setNewUrl] = useState("");
    const [refresh, setRefresh] = useState(false);

    const [tokenRes, setTokenRes] = useState({
            access: "",
            id: "",
            expiresOn: 0,
            url: "",
            error: "",
            isAuthentic: false,
    });

    const context = useContext(AuthContext);

    useEffect(()=>{
        console.log('response', tokenRes)
    },[tokenRes]);

    const routesLength = useNavigationState((state) => {
        return state.routes.length;
    });

    // useFocusEffect(
    //     useCallback(() => {
    //       getTokensAsync().then((x) => {
    //         if (x.error) {
    //         //   nav.replace(RouteNames.home);
    //         }
    //         setTokenRes(x);
    //         if (x.url) {
    //           setNewUrl(x.url);
    //         }
    //       });
    //     }, [isAuthentic, routesLength])
    //   );

    useEffect(() => {
        if(refresh){
            redirectforLogin()
        }
    }, [isAuthentic, routesLength])
    

    const redirectforLogin = () => {
        getTokensAsync().then(async (x) => {
            console.log(x)
            if (x.error) {

                alert('couldnt login')

                // nav.replace(RouteNames.home);
            }
            if(x.access){
                await setItem('token', JSON.stringify(x));
                context.updateState();
                // navigation.navigate(RouteNames.home)
            }
            setTokenRes(x);
            if (x.url) {
                setNewUrl(x.url);
            }
        });
    }
    const onSigninPress = async () => {
        setRefresh(true);
        redirectforLogin();
        // useCallback(() => {
            
        // }, [isAuthentic, routesLength])

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

    function browserResultHandler(x) {
        if (x.type === "success") {
            setNewUrl(x.url);
        }
    }
    
    {/* const onForgetPress = () => {
        navigation.navigate('ForgetPassword')
    }
    const onFindPress = () => {
        navigation.navigate('FindYourAccount')
    } */}

    const { access, id, expiresOn } = tokenRes;
   

    return (
        <Container>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Logo/>
                <Heading
                    text={"Sign in to continue"}
                />
                {/* <Text>Access {access}</Text>
                <Text>id {id}</Text> */}
                { error &&
                    <Error
                        text={error}
                    />
                }
                {/* <IconInput
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
                /> */}
                <Button
                    color={theme.buttonColors.green}
                    text={"Sign in"}
                    textColor={theme.textColors.whiteText}
                    // onPress={() => navigation.navigate(RouteNames.private)}
                    onPress={onSigninPress}
                />
                {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: heightPercentageToDP('3%')}}>
                    <Text onPress={onForgetPress} style={styles.text} >Forget your password?</Text>
                    <Text onPress={onFindPress} style={styles.text} >Find your account</Text>
                </View> */}
            </View>
        </Container>
    )
}

// const styles = StyleSheet.create({
//     text:{
//         fontSize: heightPercentageToDP('2%'),
//         color: theme.primaryColor
//     }
// })