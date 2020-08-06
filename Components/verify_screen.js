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
<<<<<<< HEAD
            style={{backgroundColor:"grey", textAlign:"center"}}
=======
            style={{backgroundColor:"grey"}}
>>>>>>> 1eabea51ae7f540e864262aed65ef782b59d19db
            multiline={false}
            keyboardType={"number-pad"}
            maxLength={4}
            onChangeText={val => setVerify_code(val) }
        />
        <Button 
            title={"Submit code"}
<<<<<<< HEAD
            onPress={() => verifyHandler}
=======
>>>>>>> 1eabea51ae7f540e864262aed65ef782b59d19db
        />
        <Button
            title={"Resend Code"}
            onPress={() => requestCode}
<<<<<<< HEAD
=======

>>>>>>> 1eabea51ae7f540e864262aed65ef782b59d19db
        />

    </>
    )
}


export default Verify