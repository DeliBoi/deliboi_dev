import React, { useState } from 'react'
import {
    View, 
    Text, 
    TextInput,
    Button,
} from 'react-native'
import { Header } from './commmon'

//phone number hardcoded for now but will also draw from state
//Automatically grab code from text
//automatically submit code if len=4


const Verify = (props) => {
    const [verify_code, setVerify_code] = useState(0)

    const verifyHandler = () => {
        //handle code submission here
        console.log(verify_code)
    }
    const requestCode = () => {
        //handle code request here
        console.log('New verification code requested')
    }

    return (
    <>
        <Header content="Verify"/>
        <Text>
            Enter Verification code
        </Text>
        <Text>
            Please enter the verification code sent to {props.phone_number}
        </Text>
        <TextInput 

            style={{backgroundColor:"grey", textAlign:"center"}}

            style={{backgroundColor:"grey", textAlign:"center"}}
            style={{backgroundColor:"grey"}}

            multiline={false}
            keyboardType={"number-pad"}
            maxLength={4}
            onChangeText={val => setVerify_code(val) }
        />
        <Button 
            title={"Submit code"}
            onPress={() => verifyHandler}

            onPress={() => verifyHandler}

        />
        <Button
            title={"Resend Code"}
            onPress={() => requestCode}
        />


    </>
    )
}


export default Verify