import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
    <View style={Styles.container}>
        <Text style={Styles.text}>Featured Albums</Text>
    </View>
    )
}
const Styles = StyleSheet.create(
    {
        container : {
            backgroundColor : 'orange',
            justifyContent : 'center',
            alignItems: 'center',
            height: 60,
            paddingTop: 22,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            elevation: 2
        },
        
        text : {
            fontSize: 21,
            color : 'white'
        }
    }
) 
export default Header