import React from 'react'
import {View} from 'react-native'

const CardSection = (props) => {
    return(
        <View style = {Styles.sectioncontainer}>
            {props.children}
        </View>
    )
}

const Styles = (
    {
        sectioncontainer : {
            borderBottomWidth : 1,
            padding: 5,
            backgroundColor : 'white' ,
            justifyContent : 'flex-start' ,
            flexDirection : 'row',
            borderColor : '#c7d5ed',
            position : 'relative'
        }
    }
)

export default CardSection