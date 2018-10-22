import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {
    return(
        <TouchableOpacity style= {Styles.buttonstyle} onPress={props.onButtonPress}>
            <Text style = {Styles.textstyle}>Buy Now</Text>
        </TouchableOpacity>
        
    )
}

const Styles = (
    {
        buttonstyle : {
            flex : 1,
            alignSelf : 'stretch',
            backgroundColor : 'white' ,
            borderRadius : 5,
            borderWidth : 1,
            borderColor: 'orange',
            marginLeft : 5,
            marginRight : 5,
        },
        textstyle : {
            alignSelf : 'center' ,
            color : 'orange' ,
            fontSize : 15,
            fontWeight : '600',
            paddingTop : 10,
            paddingBottom : 10,
        }
    }
)

export default Button
