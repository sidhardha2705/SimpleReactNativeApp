import { ScrollView } from 'react-native'
import React from 'react'
import axios from 'axios'

import AlbumView from './albumView'

class AlbumList extends React.Component {
    state = { albums : [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then (response => this.setState({ albums: response.data }))
    }

    displayAlbums (){
        return this.state.albums.map( album => <AlbumView key={album.title} albumdata={album}/>)
    }

    render() {
        console.log(this.state)

        return (
            <ScrollView >
                {this.displayAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList

