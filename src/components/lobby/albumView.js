import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import AlbumCard from './albumcard'
import CardSection from './cardsection'
import Button from './button'

const AlbumView = (props) => {
    return(
        <AlbumCard>
            <CardSection>
                <View style = {Styles.thumbnailcontainerstyle}>
                    <Image
                        style = {Styles.imagestyle} 
                        source={{ uri : props.albumdata.thumbnail_image}} 
                    />
                </View>
                <View style = {Styles.textwrapper}>
                    <Text style={Styles.headertext}>{props.albumdata.title}</Text>
                    <Text>{props.albumdata.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style= {Styles.coverimage} source = {{ uri : props.albumdata.image}}/>
            </CardSection>
            <CardSection>
                <Button onButtonPress={()=>Linking.openURL(props.albumdata.url)}/>
            </CardSection>
        </AlbumCard>
    )
}

const Styles = (
    {
        textwrapper : {
            justifyContent : 'space-around' ,
            flexDirection : 'column',
        },
        imagestyle : {
            width : 50,
            height : 50,
        },
        thumbnailcontainerstyle : {
            justifyContent : 'center',
            alignItems : 'center' ,
            marginLeft : 10,
            marginRight : 10,
        },
        headertext : {
            fontSize : 20,
        },
        coverimage : {
            height: 300,
            width : null,
            flex : 1,
        }
    }
)
export default AlbumView