import React from 'react'
import {View } from 'react-native'

const AlbumCard = (props) => {
    return (
        <View style = {Styles.cardcontainer}>
            {props.children}
        </View>
    )
}

const Styles = (
    {
        cardcontainer : {
            borderWidth : 1,
            borderRadius : 2,
            borderColor : '#c7d5ed' ,
            borderBottomWidth : 0,
            shadowColor : 'black',
            shadowOffset : { width : 0 , height : 2 } ,
            shadowOpacity : 0.1,
            shadowRadius : 2,
            elevation : 1,
            marginLeft : 5,
            marginRight : 5,
            marginTop : 10,
        }
    }
)

export default AlbumCard