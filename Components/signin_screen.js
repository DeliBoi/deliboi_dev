import React, { useState } from 'react'
import {
    View, 
    Text, 
    TextInput,
    Button,
    Image,
    StyleSheet
} from 'react-native'

import CheckBox from '@react-native-community/checkbox'
const bgColor = '#03DAC5' 
//three components
//logo and welcome banner
//email, pass, login, remember
//buttons for alternate authentication

const Banner = () => {
    //welcome
    //icon
    //possible carousel?? look into it
    return (
        <View style={{
            alignItems:'center',
            backgroundColor:bgColor,
            flex:2
        }}>
            <Text style={{
                fontFamily:'Cabin',
                fontSize:30,
                fontWeight:"normal"
            }}>
                Welcome
            </Text>
        </View>
    )
}


const LoginForm = () => {
    //manage login state here
    //email text box
    //password text box
    //remember me check box
    //forgot password dialog box
    //login button
    const [rememberMe, setRememberMe] = useState(false)
    return (
        <View styles={{
            backgroundColor:'purple',
            flex:4,
            alignItems:'center'
        }}>
            <Text>
                Mwachala eric mutie    
            </Text>  
            <CheckBox 
                style = {{marginLeft:10}}
                value = {rememberMe}
                onValueChange = {val => setRememberMe(val)}
            />
        </View>
    )
}

const AltAuth = () => {
    //button for facebook auth
    //button for google auth
    return (
        <View style={{flex:6, backgroundColor:bgColor}}>
        <Text>
            World !!
         </Text>
        </View>
    )
}
const SignInScreen = () => {
    
    return (
        <>
        <Header content='Sign in' />
        <Banner/>
        <LoginForm />
        <AltAuth />
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        marginLeft:10,
        marginRight:10,
        backgroundColor:'rgba(3,218,197,1)',
        width:'80%'
    }
})



export default SignInScreen;