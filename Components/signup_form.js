import React, { useState} from 'react'
import {
    View, 
    Text, 
    TextInput,
    Button,
} from 'react-native'



const Header = (props) => {
    return (
        <View style={{
            width:'100%',
            height:45,
            backgroundColor:'white',
            alignItems:'center',
        }}>
            <Text style={{
                fontFamily:'Cabin',
                fontWeight:'bold',
                fontSize:20,
                lineHeight:45
            }}>
                {props.content}
            </Text>
        </View>
    )
}

const PhoneNumberForm = () => {
    const [p_number, setP_number] = useState(0)
    const submitHandler = (number) => {
        //play with state data here
        console.log(p_number)
    }
    return (
        <>
        <View>
            <Text>
                Enter your phone number
            </Text>
            <TextInput 
                placeholder="Kenya (+254)"
                maxLength={10}
                multiline={false}
                keyboardType={"number-pad"}
                onChangeText={number => setP_number(number)}
            />
            <Text>Deli Bois will send an SMS to your phone</Text>
            <Button 
                title='Continue'
                onPress={() => submitHandler()}
            />
            <Text>
                {p_number}
            </Text>
        </View>
        </>
    )
}

const SignUp = () => {
    return (
        <>
        <Header content="Sign_in"/>
        <PhoneNumberForm/>
        </>
    )
}
export default SignUp;




