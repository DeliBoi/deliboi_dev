import React from 'react'
import {
    View,
    Text,
}from 'react-native'


const Header = (props) => {
    return (
        <View style={{
            width:'100%',
            height:45,
            backgroundColor:'white',
            alignItems:'center',
            borderColor:'black',
            borderStyle:'dotted',
            borderWidth:2

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

export {
    Header
}