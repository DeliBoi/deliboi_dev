import React from 'react'
import {
    View, 
    Text, 
    TextInput,
    Button,
    StyleSheet
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'


const SignInScreen = () => {
    
    return (
        <>
        <View style={styles.header}>
            <Text style={styles.signInText}>
                Sign In
            </Text>
        </View>
        <View style={styles.signInContent}>
            <Text style={styles.welcome}>
                Welcome!
            </Text>
            <TextInput
                placeholder="Email Address"
                placeholderTextColor="#ffffff"
                style={styles.inputs}
            />
            <TextInput
                placeholder='password'
                placeholderTextColor="#ffffff"
                style={styles.inputs}
            />
            <View style={{alignSelf:'flex-start', width:'80%'}}>
                <CheckBox
                    style={{}}
                    disabled={false}
                />
            </View>
        </View>    
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        flex:1,
        backgroundColor:'#3700B3',
    },
    signInText:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        fontFamily:'Cabin',
        textAlign:'center',
        lineHeight:54
    },
    signInContent:{
        backgroundColor:'#03DAC5',
        alignItems:'center',
        flex:10
    },
    welcome:{
        textAlign:'center',
        fontFamily:'Cabin',
        fontSize:40,
        color:'black',
    },
    inputs:{
        borderBottomColor:'black',
        borderLeftColor:'rgba(0,0,0,0)',
        borderRightColor:'rgba(0,0,0,0)',
        borderTopColor:'rgba(0,0,0,0)',
        borderBottomEndRadius:5,
        borderWidth:1,
        width:'80%',
        textAlign:'left',
    }

})

export default SignInScreen;